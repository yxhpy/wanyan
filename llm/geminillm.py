from typing import Optional

import google.generativeai as genai


def run(
        model: Optional[str] = None,
        prompt: Optional[str] = None,
        api_key: Optional[str] = None,
        temperature: Optional[float] = 0.0
):
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(model)
    response = model.generate_content(prompt, stream=True, generation_config={
        'temperature': temperature
    })
    res = ""
    for i in response:
        print(i.text, end="")
        res += i.text
    return res
