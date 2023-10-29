---
title: "Reverse Dictionary"
date: 2023-10-23T20:19:05-04:00
draft: false
---

One of the more interesting by products of LLMs is the embedding vector.  I read awhile back about others using embedding vectors to reverse dictionaries.  

I think it's a great demonstration of the power and function of these embeddings.  I decided to try my own hand at it, using Cloudflare's vector database, I made my own "reverse dictionary" or semantic thesaurus.  
* I sourced some word lists / SAT prep material
* Pre-embed the definitions to a [1024 dim vector](https://huggingface.co/BAAI/bge-large-en-v1.5)
* Used [D1](https://developers.cloudflare.com/d1/) to store my words and [Vectorize](https://developers.cloudflare.com/vectorize/) as my vector databse
* I embed the inputs at my endpoint and retreive the cosine similar results
* The vector DB runs the (approximate) nearest neighbors search, which is non-trival, and suprisingly fast

----

You can input anything, a definition, collections of feelings, a poem, and the results will be some words that best match that semantic meaning.

{{< word-table >}}

