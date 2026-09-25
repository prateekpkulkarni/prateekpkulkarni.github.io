---
layout: page
title: research
permalink: /research/
description: Research directions in quantum computing systems.
nav: true
nav_order: 3
---

My research is guided by the idea that the structure needed to make good systems decisions often already exists in the computation, but is hidden across layers. In quantum computing, algorithmic structure, logical operations, error-correcting codes, scheduling constraints, routing, and hardware topology are usually considered separately. I am interested in identifying the mathematical and architectural structure that connects these layers and turning it into compiler abstractions and algorithms that improve reliability, resource efficiency, and scalability. My broader goal is to develop compiler and architecture techniques that make fault-tolerant quantum computers practical at scale.

Within this direction, I am especially interested in fault-tolerant compilation and runtime systems, QEC-aware mapping and scheduling, resource-aware compilation, and compiler–architecture co-design. I am also interested in how algebraic freedom in quantum codes and logical operations can become a systems primitive: for example, by choosing among equivalent implementations to reduce connectivity, synchronization, decoding, or physical-resource costs. More generally, I want to understand what information about a fault-tolerant computation should remain visible to the software stack, and how exposing the right structure can lead to simpler and more efficient implementations.
