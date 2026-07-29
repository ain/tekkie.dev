---
layout: category
title: Rust posts about systems programming, memory safety, and command line tooling
category: rust
permalink: /rust/
excerpt: Selected Rust posts about systems programming, memory safety, and command line tooling.
---
> Rust is a multi-paradigm, general-purpose programming language that emphasises performance, type safety and concurrency. It enforces memory safety without a garbage collector: a borrow checker validates ownership and lifetimes at compile time, guaranteeing that every reference points at valid memory.

What makes Rust compelling for systems programming is that memory safety and performance stop being a trade-off. The borrow checker rules out use-after-free, double-free and data races before the program ever runs, while the compiled binary ships with no runtime and no garbage collector — so the checks cost nothing once the code is built.

Please find selected Rust posts about systems programming, memory safety, and command line tooling below.
