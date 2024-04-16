import os

HOME_PATH = os.path.dirname(os.path.dirname(__file__))
TOKEN_CONFIG = [
    {
        "token": "sk-1",
        "type": "zhipu",
        "config": {"api_key": ""}
    },
    {
        "token": "sk-2",
        "type": "spark",
        "config": {
            "appid": "",
            "api_secret": "",
            "api_key": "",
            "gpt_url": "",
            "domain": ""
        },
    },
    {
        "token": "sk-3",
        "type": "maxai",
        "config": {
            "api_key": "",
        },
    },
    {
        "token": "sk-4",
        "type": "claude",
        "config": {
            "api_key": ""
        }, },
    {
        "token": "sk-5",
        "type": "geminiweb",
        "config": {
            "Secure_1PSID": "",
            "Secure_1PSIDTS": ""
        },
    },
    {
        "token": "sk-6",
        "type": "geminillm",
        "config": {
            "api_key": ""
        },
    },
    {
        "token": "sk-7",
        "type": "kimi",
        "config": {
            "api_key": ""
        },
    },
    {
        "token": "sk-8",
        "type": "bedrock",
        "config": {
            "token": "",
            "csrf_token": "",
        },
    },
]
