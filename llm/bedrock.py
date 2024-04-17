import base64
import json
import os.path
import subprocess
from typing import Optional

import requests

from utils.config import HOME_PATH


def run_js(js_code, creds, content):
    creds = json.dumps(creds, ensure_ascii=False)
    # 创建一个临时的JavaScript文件
    with open('temp.js', 'w', encoding='utf-8') as file:
        file.write(js_code.replace("${creds}", creds).replace("${content}", content))
    # 使用subprocess运行Node.js命令
    try:
        result = subprocess.run(['node', 'temp.js'], stdout=subprocess.PIPE,
                                text=True, encoding='utf-8')
        _content, _headers = result.stdout.split('~split~')
        return {
            'content': _content,
            'headers': json.loads(_headers)
        }  # 打印输出结果
    finally:
        # 清理临时文件
        import os
        os.remove('temp.js')


def get_token(
        token: Optional[str] = None,
        csrf_token: Optional[str] = None):
    url = "https://us-east-1.console.aws.amazon.com/bedrock/tb/creds"
    headers = {
        "Cookie": token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
        "X-Csrf-Token": csrf_token}
    return requests.post(url, headers=headers, timeout=120).json()


def run(
        prompt: Optional[str] = None,
        temperature: Optional[float] = None,
        token: Optional[str] = None,
        csrf_token: Optional[str] = None
):
    creds = get_token(token, csrf_token)
    content = str({"messages": [{"role": "user", "content": [{"type": "text", "text": prompt}]}],
                   "anthropic_version": "bedrock-2023-05-31", "max_tokens": 4096, "temperature": temperature,
                   "top_k": 250,
                   "top_p": 0.999, "stop_sequences": []})
    headers = {}

    with open(os.path.join(HOME_PATH, r'llm', 'js', 'bedrock.js'), 'r', encoding='utf-8') as f:
        res = run_js(f.read(), creds, content)
        _headers = res["headers"]
        _content = res["content"]
    for header in _headers:
        headers[header.title()] = _headers[header]
    resp = requests.post(
        url="https://bedrock-runtime.us-east-1.amazonaws.com/model/anthropic.claude-3-sonnet-20240229-v1%3A0/invoke-with-response-stream",
        headers=headers, data=_content.strip().encode('utf-8'), stream=True, timeout=120)
    result_str = ""
    for i in resp.iter_lines():
        start = i.find(b'{"bytes":"', 0)
        if start == -1:
            continue
        end = i.find(b'"}', start)
        res = json.loads(base64.b64decode(i[start + 10:end].decode('utf-8')))
        if res['type'] == 'content_block_delta':
            print(res['delta']['text'], end="")
            result_str += res['delta']['text']
        if res['type'] == 'content_block_stop':
            break
    return result_str
