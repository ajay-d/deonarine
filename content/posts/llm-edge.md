---
title: "Llm Edge"
date: 2023-10-08T14:46:33-04:00
draft: false
---

Been playing with Cloudflare's AI Workers.
One can set up a LLM deployed to the edge, with pretty fast response time.

{{< text_input >}}

You can also curl directly to my endpoint:

```bash
curl -X POST https://ai.deonarine.com/ -d '{"prompt":"Write a poem that talks about Brooklyn"}'
```