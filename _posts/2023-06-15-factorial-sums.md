---
layout: post
title: "Investigating Factorial Sums and Their Connection with the Laplace Transform"
date: 2023-06-15
description: A short note connecting geometric series, factorial sums, and Laplace transforms.
tags: [math]
categories: [notes]
related_posts: false
---

A geometric progression can be written as

\[
\sum_{n=0}^{k} a^n = 1 + a + a^2 + \cdots + a^k.
\]

Using the integral identity

\[
n! = \int_0^\infty a^n e^{-a}\,da,
\]

we can interchange the finite sum and integral to obtain

\[
\sum_{n=0}^{k} n!
=
\int_0^\infty
\left(\sum_{n=0}^{k} a^n\right)e^{-a}\,da
=
\int_0^\infty
\frac{1-a^{k+1}}{1-a}e^{-a}\,da.
\]

This gives an integral representation for the finite sum of factorials. The identity is elementary, but it is a nice example of moving between a discrete sum and a continuous transform viewpoint.

I originally explored this observation in 2023. Thanks to Prof. Aparna B. S. for introducing me to related ideas and to Harshini S. for discussions.
