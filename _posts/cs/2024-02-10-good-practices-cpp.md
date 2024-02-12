---
layout: post
title:  "Efficient C++"
date:   2024-02-10 21:29:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
draft: False
category: cs
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

#### Table of Contents
<!-- 1. [Debugging](#debugging) -->

1. [Introduction](#introduction)
1. [Data Structures](#data-structures)
1. [Principles while Choosing Data Structure]()
1. [How to Optimize Code?]()
1. [What is Debugging and Profiling?]()
1. [Debugging](#debugging)
1. [Debugging Demos](#debugging-demos)
1. [Profiling](#profiling)
1. [Features of C++]()
    + STL
    + Assert
    + Inheritance
    + Operator overloading
    + Lambda and Capturing
    + Smart Pointers
    + File IO
    + C++11 Features: auto, range-based loops, initializer lists
    + Template
    + Exception
1. [Gotcha Moments for me]()
1. [Repository of C++ code for Common Tasks]()
1. [Appendix]()
    + Tools for Memory Analysis and Debugging
1. [References]()

### Introduction
This blog contains material that I prepared for my recitation "Efficient C++." I will present this on Feb 12, 2024 to the *Planning Techniques for Robotics* class at CMU.

### Data Structures
- Array
- Stack: LIFO
- Queue: FIFO
- Linked List and Doubly linked list
- Hash table: O(1) access -> unordered_set, unordered_map
- Graph
- Tree: Binary Tree, BST, Tries, Heap (max heap, min heap) -> set, map
- Custom data structure: When do you think of it? (??)

### Principles while Choosing Data Structure


### How to Optimize Code?
- Strength reduction: Replace sum of first N integers with the formula
- Data structures (like lookup table)
- Algorithms
    - Dynamic programming
    - Recursion


### What is Debugging and Profiling?
#### Debugging
Debugging means to look for bugs and their cause in applications. A bug can be an error or just some unexpected behaviour (e.g. a user complains that he/she receives an error when he/she uses an invalid date format). The problem is that the error may occur several lines of code after the actual bug. Therefore, we need principles of debugging to quickly locate the bug. Typically a debugger is used that can pause the execution of an application, examine variables and manipulate them.

#### Profiling
Profiling typically refers to CPU Profiling. It's a method to detect how long each function or each line of code takes to run and how often it gets executed. The profiler is used to find the bottlenecks in the code. Once you detect it, you might greatly increase the speed of execution by applying efficient C++ principles to the bottleneck.


### Debugging Across Multiple C++ Files
#### Without tools
This is the simplest form of debugging. Make expecations on what the variable values should be for a certain input. Print variables at various steps to check that it matches expectation.

Something I use a lot is the pincer move. If my function containing the bug is a large block of code, I will put print statements at the beginning and end. Let's say, the former print statement is alright but the latter print statement shows that something went wrong. Like a pincer, I keep moving my print statements inwards from the front and the back. It converges to the line(s) that are actually causing the bug. This principle becomes more useful with larger code spanning multiple files. I quickly reduce my search space by converging like this.

#### With Tools (Terminal)
Check the [Debugging Demos](#debugging-demos) section to see an example of using these.
```sh
g++ -g hello_world.cpp helper.cpp
# -g flag produces debugging information in the operating 
# system's native format that gdb can use
gdb -tui ./a.out
# -tui flag opens the terminal user interface
```

#### With Tools (VSCode)
Check the [Debugging Demos](#debugging-demos) section to see an example of using these.

Steps:

- Create a `.vscode` folder in your project folder
- Create and add the below two `json` files to the `.vscode` folder
- Open the `.cpp` file containing the `int main()` function
- Click on `Run and Debug` or press `Ctrl+Shift+D`
- Select the `(gdb) Launch` configuration from the list
- The debugger should begin working
- If your executable takes input arguments, add them as comma-separated strings to the `"args": []` field in `launch.json` and run the debugger again

`tasks.json`
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "shell",
            "label": "C/C++: g++ build active file",
            "command": "/usr/bin/g++",
            "args": [
                "-g",
                "${fileDirname}/*.cpp",
                "-o",
                "${fileDirname}/${fileBasenameNoExtension}"
            ],
            "options": {
                "cwd": "/usr/bin"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

`launch.json`
```json
{
    "configurations": [
    {
        "name": "(gdb) Launch",
        "type": "cppdbg",
        "request": "launch",
        "program": "${fileDirname}/${fileBasenameNoExtension}",
        "preLaunchTask": "C/C++: g++ build active file",
        "args": [], // Remember to add arguments needed by your program
        "stopAtEntry": false,
        "cwd": "${fileDirname}",
        "environment": [],
        "externalConsole": false,
        "MIMode": "gdb",
        "setupCommands": [
            {
                "description": "Enable pretty-printing for gdb",
                "text": "-enable-pretty-printing",
                "ignoreFailures": true
            },
            {
                "description": "Set Disassembly Flavor to Intel",
                "text": "-gdb-set disassembly-flavor intel",
                "ignoreFailures": true
            }
        ]
    }
    ]
}
```


### Debugging Demos
#### Terminal
<iframe width="600" height="350"
src="https://www.youtube.com/embed/5e0M7F8CB1U?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br>

#### VSCode
<iframe width="600" height="350"
src="https://www.youtube.com/embed/5e0M7F8CB1U?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br>


### Profiling
#### Without tools:
This is the simplest form of profiling based on timing blocks of code. Print time taken between two points in the code using `chrono`

#### With tools:
CPU Profiler: Samples CPU each millisecond to check execution is currently inside which function

Names of some tools:

- Valgrind
- TAU - Tuning and Analysis Utilities


### Features of C++
#### STL


#### Assert


#### Inheritance


#### Operator overloading


#### Lambda and Capturing


#### Smart Pointers


#### File IO


#### C++11 Features: auto, range-based loops, initializer lists


#### Template


#### Exception




### Gotcha Moments for me
- Clarification about pointers
    - Even they're subject to the pass by value and pass by reference rule
- `nullptr`, not `NULL`

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {

        ListNode* reverse_head = NULL;
        ListNode* prev = NULL;
        reverse(head, prev, reverse_head);
        return reverse_head;
    }


    // This works-
    void reverse(ListNode* curr, ListNode* prev, ListNode* &reverse_head) {
    
    // This does not-
    // void reverse(ListNode* curr, ListNode* prev, ListNode* reverse_head) {
    // Because even a pointer reverse_head needs to be passed by reference

        if(curr == nullptr){
            reverse_head = prev;
            if(prev != nullptr){
                cout << prev->val << endl;
                cout << reverse_head->val << endl;
            }
            return;
        }
        reverse(curr->next, curr, reverse_head);
        if(reverse_head != nullptr)
            cout << reverse_head->val << endl;
        if(prev != nullptr)
            cout << prev->val << endl;
        curr->next = prev;
        return;
    }
};
```

### Repository of C++ code for Common Tasks
Sort vector `nums` while keeping track of indices

```cpp
vector<pair<int,int>> vp(nums.size());
for(int i=0; i<nums.size(); i++){
    vp[i] = make_pair(nums[i],i);
}
sort(vp.begin(), vp.end()); // By default sorts using the first item
```

Convert a string `str` to upper case
```cpp
std::transform(str.begin(), str.end(), str.begin(), ::toupper);
```


### Appendix
#### Memory Analysis & Debugging Tools
- GDB
- Valgrind
- Setting MALLOC_CHECK_=3 and MALLOC_PERTURB_ environment variables.
- Using CPPcheck for static code analysis - Here we can find the list of all checks done by CPPCheck https://sourceforge.net/p/cppcheck/wiki/ListOfChecks/
- [Gperf tools](https://github.com/gperftools/gperftools) (Tcmalloc, Heap Checker, Heap Profiler, CPU Profiler):
    - Heap Profiler
    - Heap Checker
    - CPU Profiler
- [Perf tool](http://lacasa.uah.edu/portal/Upload/tutorials/perf.tool/PerfTool.pdf)
    - Perf record makes perf.data executable in the same directory. Perf report is used to read the perf.data file and prints the profiled output.
    - Usage : perf record ./dist/Debug/GNU-Linux/latencycapture unicast_config.cfg
    - perf report
    - Important : If you don’t want to undergo recompilation of binary again, then run your executable. And then run command
    - perf top -p <pid>
    - It will display the cpu time function wise. The functions consuming much of the cpu time will be on the top of the stack always.
- Objdump: objdump (part of the GNU Binutils) is a program for displaying various information about object files.
- `ps aux` can also be used to view the memory and cpu usage of the currently running application.
    - Usage : ps aux | grep <executable_name>
- Readelf
    - `$ gcc -O2 -frecord-gcc-switches a.c`
    - `$ readelf -p .GCC.command.line a.out`

Debugging:

- General purpose debuggers: GDB, RR
- Memory error detectors: valgrind’s memcheck, AddressSanitizers
- Thread error detectors: ThreadSanitizer
- Tracing: ldd, strace
- OpenGL: apitrace

Profiling:

- CPU: valgrind’s callgrind, Linux perf, Intel VTune Amplifier XE
- Heap memory: valgrind’s massif, heaptrack
- OpenGL: apitrace
- System-wide: LTTng

Testing:

- Static code analysis: clang analyzer, Coverity
- Code coverage: gcov


#### FAQs
1. Why is it `std::string` but simply `int` or `float`?
    - The string data type is not built into the C++ language, but is implemented as part of the C++ standard library, in the std namespace. `std` is the namespace in which all of the C++ standard library functions, classes, and objects reside.

### References:
- [https://www.einfochips.com/wp-content/uploads/resources/a-practical-approach-to-optimize-code-implementation.pdf](https://www.einfochips.com/wp-content/uploads/resources/a-practical-approach-to-optimize-code-implementation.pdf)
- [https://missing.csail.mit.edu/2020/debugging-profiling/](https://missing.csail.mit.edu/2020/debugging-profiling/)
- [https://www.quora.com/What-is-profiling-in-programming-and-how-do-I-get-started-in-profiling-my-source-code-in-C++](https://www.quora.com/What-is-profiling-in-programming-and-how-do-I-get-started-in-profiling-my-source-code-in-C++)
- [https://en.wikibooks.org/wiki/Optimizing_C%2B%2B/Writing_efficient_code/Performance_improving_features](https://en.wikibooks.org/wiki/Optimizing_C%2B%2B/Writing_efficient_code/Performance_improving_features)
- [https://missing.csail.mit.edu/2020/debugging-profiling/](https://missing.csail.mit.edu/2020/debugging-profiling/)
- [https://www.reddit.com/r/cpp_questions/comments/fxrkb6/learning_to_write_efficient_c/](https://www.reddit.com/r/cpp_questions/comments/fxrkb6/learning_to_write_efficient_c/)
- [https://www.agner.org/optimize/optimizing_cpp.pdf](https://www.agner.org/optimize/optimizing_cpp.pdf)
- [https://stackoverflow.com/questions/41725613/definition-of-debugging-profiling-and-tracing#:~:text=Remote%20debugging%20is%20the%20process,analysis%20tool%20called%20a%20profiler.](https://stackoverflow.com/questions/41725613/definition-of-debugging-profiling-and-tracing#:~:text=Remote%20debugging%20is%20the%20process,analysis%20tool%20called%20a%20profiler.)
