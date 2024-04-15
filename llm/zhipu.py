from typing import Optional

from zhipuai import ZhipuAI


# "fd73d04baae3441803e2de6366d41456.qViYZSOFelLwCuYM"
def run(
        prompt: Optional[str] = None,
        api_key: Optional[str] = None,
        model: Optional[str] = None
):
    client = ZhipuAI(api_key=api_key)  # 请填写您自己的APIKey
    response = client.chat.completions.create(
        model=model,  # 填写需要调用的模型名称
        messages=[
            {"role": "user", "content": prompt},
        ],
        stream=True,
    )
    res = ""
    for chunk in response:
        print(chunk.choices[0].delta.content, end="")
        res += chunk.choices[0].delta.content
    return res
