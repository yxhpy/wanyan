import json
import os
from typing import Optional

import requests

from utils.config import HOME_PATH

session_path = os.path.join(HOME_PATH, "config", "sessions.json")
if not os.path.exists(session_path):
    with open(session_path, 'w') as f:
        json.dump({}, f)


def run(
        prompt: Optional[str] = None,
        model: Optional[str] = None,
        api_key: Optional[str] = None
):
    with open(session_path, "r") as f:
        session_store = json.load(f)
    if session_store is None:
        session_store = {}
    insert_token = api_key
    refresh_token = session_store.get(insert_token, insert_token)
    res = requests.get("https://kimi.moonshot.cn/api/auth/token/refresh", headers={
        "Authorization": f"Bearer {refresh_token}",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }).json()
    access_token = res['access_token']
    refresh_token = res['refresh_token']
    session_store[insert_token] = refresh_token
    with open(session_path, "w") as f:
        json.dump(session_store, f)
    headers = {
        "Authorization": f"Bearer {access_token}",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    }
    response = requests.post("https://kimi.moonshot.cn/api/chat", json={"name": "未命名会话", "is_example": False},
                             headers=headers)
    data = {"messages": [{"role": "user", "content": prompt}], "refs": [], "use_search": True}
    response = requests.post(f"https://kimi.moonshot.cn/api/chat/{response.json()['id']}/completion/stream", json=data,
                             stream=True, headers=headers)
    res = ""
    for i in response.iter_lines():
        if b"400: {'code" in i:
            raise Exception("重试")
        if i:
            s = i.decode("utf-8").replace('data: ', '')
            s = json.loads(s)
            if i.startswith(b'data: ') and s.get("text"):
                print(s.get("text"), end="")
                res += s.get("text")
    return res
