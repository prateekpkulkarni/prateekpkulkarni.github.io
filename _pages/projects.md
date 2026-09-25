---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 3
---

My work has explored several layers of the quantum software stack. I have worked on noise-aware shot allocation and runtime resource management, compiler-pass attribution, pre-execution resource estimation, coupling-map design, and hardware-efficient mappings of qLDPC codes. Although these projects address different parts of the stack, they share a common theme: useful structure often exists before execution, but conventional abstractions hide it from the compiler or runtime. I am interested in recovering that structure and using it to make systems decisions more informed, predictable, and hardware-aware.

Going forward, I am especially interested in fault-tolerant quantum systems. I want to study how error-correction structure, logical equivalences, decoding constraints, and hardware topology can become first-class compiler and architecture signals rather than fixed backend constraints. This includes fault-tolerant compilation and runtime systems, QEC-aware mapping and scheduling, hardware-efficient qLDPC implementations, and compiler–architecture co-design. A recurring question for me is how much freedom the software stack should preserve—for example through code structure, gauge freedom, or equivalent logical implementations—and when that freedom should be resolved using hardware and runtime information.
