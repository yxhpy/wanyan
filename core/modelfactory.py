import importlib

from config.config import TOKEN_CONFIG


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


def process_messages(model, prompt, api_token):
    # 这里您可以实现您的自定义逻辑来处理消息并生成响应
    # 为了简单起见,这里我们只返回一个硬编码的响应
    conf = [i for i in TOKEN_CONFIG if i['token'] == api_token][0]
    return dynamic_import(conf['type'],
                          **{"prompt": prompt,
                             "model": model,
                             **conf['config']})
