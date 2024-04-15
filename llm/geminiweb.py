import asyncio
from typing import Optional

from gemini_webapi import GeminiClient


def run(
        prompt: Optional[str] = None,
        Secure_1PSID: Optional[str] = None,
        Secure_1PSIDTS: Optional[str] = None,
        model: Optional[str] = None
):
    client = GeminiClient(Secure_1PSID, Secure_1PSIDTS)

    async def main():
        await client.init(timeout=30, auto_close=False, close_delay=300, auto_refresh=True)
        response = await client.generate_content(prompt)
        return response.text

    return asyncio.run(main())
