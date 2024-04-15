import json

from claude_api import Client
from curl_cffi import requests


class Api3Client(Client):

    def send_message(self, prompt, conversation_id, answer=None, attachment=None, timeout=500):
        if answer is None:
            answer = []
        url = f"https://claude.ai/api/organizations/{self.organization_id}/chat_conversations/{conversation_id}/completion"

        # Upload attachment if provided
        attachments = []
        if attachment:
            attachment_response = self.upload_attachment(attachment)
            if attachment_response:
                attachments = [attachment_response]
            else:
                return {"Error: Invalid file format. Please try again."}

        # Ensure attachments is an empty list when no attachment is provided
        if not attachment:
            attachments = []

        payload = json.dumps({"prompt": prompt, "timezone": "Asia/Kolkata", "attachments": attachments, "files": []})

        headers = {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0',
            'Accept': 'text/event-stream, text/event-stream',
            'Accept-Language': 'en-US,en;q=0.5',
            'Referer': 'https://claude.ai/chats',
            'Content-Type': 'application/json',
            'Origin': 'https://claude.ai',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Cookie': f'{self.cookie}',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'TE': 'trailers'
        }

        def __run(res):
            try:
                decoded_data = res.decode("utf-8").strip()
                data_strings = decoded_data.split('\n\n')
                for data_string in data_strings:
                    if 'completion' in data_string:
                        data = json.loads(data_string.removeprefix('event: completion\ndata: '))['completion']
                        print(data, end="")
                        answer.append(data)
            except Exception as e:
                print(e)

        requests.post(url, headers=headers, data=payload, impersonate="chrome120", timeout=500,
                      content_callback=__run)
