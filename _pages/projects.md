---
layout: page
title: research
permalink: /research/
nav: true
nav_order: 3
---

My research sits at the interface of quantum architecture, compilation, and error correction. I am interested in systems problems where a clean abstraction hides information that would be useful for optimization. In fault-tolerant quantum computing, code structure, logical operations, routing, scheduling, decoding resources, and hardware connectivity are tightly coupled, yet they are often optimized independently. I study how to expose the right structure across these layers and turn it into compiler and runtime decisions that reduce physical resources, communication, synchronization, and reliability overheads. More broadly, I view fault tolerance not only as a backend constraint, but as a source of structure for optimization.

This leads me to questions such as: what properties of an error-correcting code should remain visible to the compiler, which logically equivalent implementations should be preserved as optimization choices, and when should runtime information resolve those choices? I am especially interested in fault-tolerant compilation and runtime systems, QEC-aware mapping and scheduling, hardware-efficient qLDPC implementations, and compiler–architecture co-design. A recurring theme in my work is to use mathematical structure—such as code-graph factorization or gauge freedom—to create practical systems freedom, and then use hardware constraints to choose among those implementations.
