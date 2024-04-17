import json
import os

HOME_PATH = os.path.dirname(os.path.dirname(__file__))
TOKEN_CONFIG = []


def set_token_config(config: list[dict]):
    global TOKEN_CONFIG
    TOKEN_CONFIG = config


def get_token_config():
    global TOKEN_CONFIG
    return TOKEN_CONFIG


config_path = os.path.join(HOME_PATH, 'config', 'config.json')
if os.path.exists(config_path):
    with open(config_path) as f:
        set_token_config(json.load(f))
