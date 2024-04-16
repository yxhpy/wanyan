## 万言 (WanYan) - 穿梭于 AI 多元宇宙的语言桥梁

[![GitHub Stars](https://img.shields.io/github/stars/yxhpy/wanyan?style=social)](https://github.com/yxhpy/wanyan/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/yxhpy/wanyan?style=social)](https://github.com/yxhpy/wanyan/network/members) [![GitHub Issues](https://img.shields.io/github/issues/yxhpy/wanyan)](https://github.com/yxhpy/wanyan/issues) [![GitHub License](https://img.shields.io/github/license/yxhpy/wanyan)](https://github.com/yxhpy/wanyan/blob/main/LICENSE) [![Python Version](https://img.shields.io/badge/python-3.6+-blue)](https://www.python.org/)

**万言** 是您通往 AI 多元宇宙的语言桥梁，一个连接无数大语言模型的星际传送门。它将不同模型的接口统一为 OpenAI 协议流，让开发者如同星际旅行者般，自由探索浩瀚的 AI 星辰大海，轻松驾驭各种模型的强大能力，创造出前所未有的智能应用。

**踏上探索之旅**

https://github.com/yxhpy/wanyan.git

**星际航行指南**

* **统一星际语言**: 万言将所有模型的语言统一为 OpenAI 协议流，无需学习各种复杂的方言，轻松与不同星球上的 AI 生命交流。
* **多元宇宙航线**: 探索智谱 AI、Spark Desk、MaxAI、Claude、GeminiWeb、GeminiLLM、Kimi 等众多星球，未来将不断开辟更多航线。
* **自定义星舰**: 打造您专属的星舰，接入任何您发现的未知 AI 星球，探索无限可能。
* **超光速引擎**: 万言采用高效的架构设计，确保您的星际旅行快速而稳定。

**点燃创新的星火**

万言打破了 AI 星球之间的壁垒，建立起一个开放、共享的星际联邦。它将加速 AI 技术的星际传播，点燃创新的星火，引领人类迈向智能文明的新纪元。


**支持清单**
* zhipu 官方
* spark 官方
* maxai 浏览器token
* claude 浏览器token
* geminiweb 浏览器token
* geminillm 官方
* kimi 浏览器token
* bedrock 浏览器token

**开启您的星际探索**

```python
import requests

# 设置目标星球
destination = "glm-4"

# 发送星际通讯信号
payload = {
    "model": destination,
    "messages": [
        {
            "role": "user",
            "content": "你好，来自地球的星际旅行者！"
        }
    ]
}

# 启动星际传送门
response = requests.request("POST", "http://127.0.0.1:5000/v1/chat/completions", json=payload,
                            headers={"Authorization": "Bearer YOUR_API_KEY"})

# 接收来自 AI 星球的回复
print(response.text)
```

**加入星际舰队**

欢迎各位星际旅行者加入万言的开发，共同拓展 AI 多元宇宙的版图，为人类的未来开辟无限可能！