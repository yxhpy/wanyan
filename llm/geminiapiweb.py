import json
from typing import Optional

import requests


# Extract information recursively
def extract_text(data):
    if isinstance(data, list):
        if len(data) == 2 and data[0] is None:
            yield data[1]
        else:
            for element in data:
                for i in extract_text(element):
                    yield i
    elif isinstance(data, dict):
        return extract_text(list(data.values()))


def run(
        headers: Optional[dict] = None,
        model: Optional[str] = None,
        prompt: Optional[str] = None
):
    url = "https://alkalimakersuite-pa.clients6.google.com/$rpc/google.internal.alkali.applications.makersuite.v1.MakerSuiteService/GenerateContent"

    payload = f'''["models/{model}",[[[[null,{json.dumps(prompt)}]],"user"]],[[null,null,7,2],[null,null,8,2],[null,null,9,2],[null,null,10,2]],[null,null,null,8192,1,0.95,null,"text/plain"],"!MTKlMmrNAAZeJS9dfiVCx8ES3oKuMJo7ADQBEArZ1NZh3_yBblMCQWUj9iD-QJaHTYavmOZL_WnZHsxVIqH-borV80WU5xdDJY5IrZk6AgAAAkxSAAAAAmgBB34AOMEteBUQ920J5vjfD8N5mIplYmLd4HQRjlfhyi8MC4sPVN0yYiM3kGipfejaqOc7W7RNrHUB2nyQCgB-p-xXTJ8jGqyQhPgv7FULk_Od2FurCgYjv08zQoHn328TEdalYTK4pTib8sAR91GdbW9btzNXOBUO7r1F-eWDMyck88HavCEj-tPyU6zSPvSSZXQ-379v9IcLcZ09lXPhtDEpIzO06WtTIFs-5iGC7DQasnRoW-LOWYCNZrkfmQKo1kqHR5IVxFn6v5FkTAVx4Z1Td1-alDr2yN2AGu5N13OYQnZKrKeg3b8qRFchZQ7rHjQEwpk4sg8dcBsq0PArhn5XlYxno0eS0jakW1lAKIf1g-o1vINk_Gzct7Qe3Qa6jQn1BbVE5zgAlUxxXbmynZO_uwjhRpdDaub0T8vMEP-tzzaE6wShlmxq4LoD4Z2ZTkq0haCmpkqzfNiHr2f3nyYBwifcPDKuRBn2NBle8c74vwOop_btzv5RisPsFEbxX1r0of3jfmZVJSlQmN1tB5S_6PxJcYDd1-M0CjwCxOq4vHhlhiRlc2eZ0o-iWDGGqA8ufyyisfFjeiRLRWehMtTYo_NL6qVINxqHdmWv4R8BJP5rg0fIBeN5yt7P_ffyQfyRqZicCKwgJgedJgTTC6_l5fUiNRZAboa19Y2jUfceyLMK6eSmeo8v0bO2NuN-Kk_fs1UjZlQidXESOPpndPjjaGUS5bs3C1opWCjsYSWkFq3Gwwh0JykSFSoCiYLbQgPfTVVcsizORVC1f3w5XSgTV_iiL6n_KsCxdtTJPpGi8RzJ1PhZcfYuIQR_fz8v1pxyaYEWadFTZcqr2bFuLlI0fYbnRBgW0-VipFjE6mVy6wayLiXb1U7TTsmBYOinfwSQH8hHLTxiXRzEsVuI2OGVQ4Deg_MzODQKncoA-bQximevvqxrMu0VaMzoVK_yk7_FwzsXYgANKWYF17c4YsCwlXkQq2PJFKmbUnx17AiftfUgn-PTimgIxZa_mVMkRcR_5AcHKTatzIKQEecWW_G-8wYTbz-2A-bDB98HB1dLx9vXKmZ74IolNmvJHxZtRaP7ef0735NKTr6fV2E590YEim-UHG1TLs_ebDGd4iZ5pd1493NYdmDgt1UMDFr4jgWoV93j5U8"]'''
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "Content-Type": "application/json+protobuf",
        "Origin": "https://aistudio.google.com",
        "Referer": "https://aistudio.google.com/",
        **headers}
    response = requests.request("POST", url, data=payload, headers=headers, verify=True, stream=True)
    return ''.join(list(extract_text(response.json())))
