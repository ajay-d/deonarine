---
title: "LLMs at the Edge"
date: 2023-10-16T14:46:33-04:00
draft: false
---

Been playing with Cloudflare's AI Workers.
One can set up a LLM deployed on their CDN, which leads to some pretty fast response times.

This is a 7B Llama 2 model
{{< text_input >}}

You can also curl directly to my endpoint:

```bash
curl -X POST https://ai.deonarine.com/ -d '{"prompt":"Write a poem that talks about Brooklyn"}'
```

Technically the API endpoint is a different origin than this website.  So I had deal with a bunch of CORS bullshit to get it working...

The endpoint also handles GETs, so you can visit it directly
(https://ai.deonarine.com)