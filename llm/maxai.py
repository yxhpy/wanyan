import json
from typing import Optional

import requests


def run(
        prompt: Optional[str] = None,
        api_key: Optional[str] = None,
        model: Optional[str] = None
):
    headers = {
        "Authorization": f"Bearer {api_key}",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
    data = {"chat_history": [], "streaming": True,
            "message_content": [{"type": "text", "text": prompt + "\n\n当回答结束时返回<end>"}],
            "chrome_extension_version": "3.1.1",
            "model_name": model, "prompt_id": "chat", "prompt_name": "chat", "temperature": 1}
    url = {
        "gpt-4-0125-preview": "get_chatgpt_response",
        "gpt-4-turbo-preview": "get_chatgpt_response",
        "gpt-4": "get_chatgpt_response",
        "gpt-3.5-turbo": "get_chatgpt_response",
        "gpt-3.5-turbo-1106": "get_chatgpt_response",
        "mistral-7b-instruct": "get_freeai_chat_response",
        "claude-2": "get_claude_response",
        "gemini-pro": "get_gemini_response",
        "claude-v2:1": "get_claude_response",
        "claude-3-opus": "get_claude_response",
        "claude-3-sonnet": "get_claude_response",
        "claude-3-haiku": "get_claude_response",
    }
    response = requests.post(f"https://api.maxai.me/gpt/{url[model]}", json=data, stream=True, headers=headers)
    res = ""
    for i in response.iter_lines():
        if res.endswith('<end>'):
            res = res.removesuffix("<end>")
            yield res
        if b"400: {'code" in i:
            raise Exception("重试")
        if i.startswith(b'data: '):
            print(json.loads(i.decode("utf-8").replace('data: ', ''))['text'], end="")
            yield json.loads(i.decode("utf-8").replace('data: ', ''))['text']
