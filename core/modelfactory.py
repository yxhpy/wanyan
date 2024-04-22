import importlib
from copy import deepcopy

from utils.config import get_token_config
from utils.thread import ThreadSafeAutoIncrementDict


def dynamic_import(name, **kwargs):
    '''
    动态导入模块
    :param name:
    :return:
    '''
    o = importlib.import_module('llm.' + name)
    if hasattr(o, 'run'):
        return getattr(o, 'run')(**kwargs)
    return ""


d = ThreadSafeAutoIncrementDict()


def process_messages(model, prompt, api_token):
    # 这里您可以实现您的自定义逻辑来处理消息并生成响应
    # 为了简单起见,这里我们只返回一个硬编码的响应
    conf = [i for i in get_token_config() if i['token'] == api_token][0]
    config_llm = deepcopy(conf['config'])
    api_key = config_llm.get('api_key', None)
    idx = d.insert(api_token)
    if api_key and isinstance(api_key, list):
        config_llm['api_key'] = api_key[idx % len(api_key)]
        print(config_llm)
    return dynamic_import(conf['type'],
                          **{"prompt": prompt,
                             "model": model,
                             **config_llm})
