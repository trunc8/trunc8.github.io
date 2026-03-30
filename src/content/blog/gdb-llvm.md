---
title: "Debuggers: gdb vs lldm"
pubDate: 2021-08-07
description: "A comparison of GDB and LLDB debuggers and how they work under the hood"
theme: "Programming & Systems"
tags: []
mathjax: false
draft: true
---

### How does a debugger work?[^1]
Let's take GDB for example.

The basic theory is that GDB will replace a program instruction with a trap, illegal divide, or some other instruction that will cause an exception, and then when it's encountered, GDB will take the exception and stop the program. When the user says to continue, GDB will restore the original instruction, single-step, re-insert the trap, and continue on.

### GDB and LLDB[^2]

Compiler | Full form | Project | Compiler | Recommendation
--- | --- | --- | --- | ---
GDB | GNU Debugger | Part of the GNU Project | GNU Compiler | While using *gcc*
LLDB | Low Level Debugger | Part of Apple's LLVM (Low Level Virtual Machine) Project | LLVM Compiler | While using *clang*

<br/>


#### References

[^1]: [Stack Overflow- how does gdb work?](https://stackoverflow.com/a/29201008/7589046)
[^2]: [Stack Overflow- GDB Vs LLDB debuggers](https://stackoverflow.com/a/39717486/7589046)
