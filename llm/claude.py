import time
from threading import Thread
from typing import Optional

from llm.claude3.api import Api3Client


def run(
        prompt: Optional[str] = None,
        model: Optional[str] = None,
        api_key: Optional[str] = None
):
    claude_api = Api3Client("sessionKey=" + api_key)
    conversation_id = claude_api.create_new_chat()['uuid']
    answers = []
    l = 0
    t = Thread(target=claude_api.send_message, args=(prompt, conversation_id, answers))
    t.start()
    while t.is_alive():
        if len(answers) > l:
            yield answers[l]
            l += 1
        time.sleep(0.1)
