import json
import time
import uuid

from flask import Flask, request, jsonify, Response, stream_with_context

from core.modelfactory import process_messages

app = Flask(__name__)


@app.route('/v1/chat/completions', methods=['POST'])
def chat():
    # 获取请求数据
    data = request.get_json()

    # 检查请求数据是否符合预期格式
    authorization = request.headers.get('Authorization', "")
    if not data or 'model' not in data or 'messages' not in data or not authorization.startswith('Bearer '):
        return jsonify({'error': 'Invalid request data'}), 400
    authorization = authorization.removeprefix('Bearer ')

    model = data['model']
    prompt = '\n\n'.join([f"{i['role']}:{i['content']}" for i in data['messages']])

    # 处理消息并生成响应
    def generate():
        for chunk in process_messages(model, prompt, authorization):
            c = {"id": "chatcmpl-K0R31EQCCKDOn4zOwBKkhN9bp7giz", "object": "chat.completion.chunk",
                 "created": int(time.time()),
                 "model": model, "system_fingerprint": "fp_5cb6e2917a",
                 "choices": [{"index": 0, "delta": {"content": chunk}, "finish_reason": None}]}
            yield f'data: {json.dumps(c)}\n\n'
        c = {"id": "chatcmpl-K0R31EQCCKDOn4zOwBKkhN9bp7giz", "object": "chat.completion.chunk",
             "created": int(time.time()),
             "model": "gpt-4-turbo", "system_fingerprint": "fp_5cb6e2917a",
             "choices": [{"index": 0, "delta": {"content": ""}, "finish_reason": 'stop'}]}
        yield f'data: {json.dumps(c)}\n\n'
        yield "data: [DONE]"

    # 构造响应数据
    return Response(stream_with_context(generate()), content_type='text/event-stream')


if __name__ == '__main__':
    app.run(debug=True)
