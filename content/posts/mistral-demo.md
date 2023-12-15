---
title: "Mistral Demo"
date: 2023-12-13T13:39:18-05:00
draft: false
---

Here's a demo of the Minstral Instruct 7B model (Mistral-7B-v0.1-instruct).
This model outperforms all 13B models and many 34B models.

First enter an ***Instruct***  
Some examples are:
* you are a friendly assistant
* you are a empathetic therapist
* you are a shopping assistant

There doesn't seem to be strong guardrails on it, so this works too:
* you are a psychotic killer

{{< text-mistral >}}

`EventSource` doesn't support `POST` so I wrapped the prompt and instruct into the URL params as a `GET`  
That feels fragile and dangerous, but provides the cool text streaming, which is good enough for demo purposes.  
