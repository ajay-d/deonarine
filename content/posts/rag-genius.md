---
title: "Rag Genius"
date: 2024-08-11T11:26:12-04:00
draft: false
---

Llama 3.1 was released with an expanded context window length of 128K.  
This is great for RAG applications.  Here I feed into the prompt lyrics pulled from some popular rappers, and have the model generate new lyrics in the same style.  


The lyrics are stored in D1 so the lyrics generation happens server side.  


The *RAG* part embeds the topic to filter down the sample example lyrics.  

{{< text-lyrics >}}
