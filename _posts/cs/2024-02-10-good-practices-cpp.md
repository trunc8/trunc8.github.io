---
layout: post
title:  "Efficient C++"
date:   2024-02-10 21:29:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
draft: False
category: cs
---

<iframe width="600" height="350"
src="https://www.youtube.com/embed/37RpDsCqOYA?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>  
<br />
<br />

#### Table of Contents
<!-- 1. [Debugging](#debugging) -->

1. [Introduction](#introduction)
1. [Data Structures](#data-structures)
1. [Principles while Choosing Data Structure]()
1. [How to Optimize Code?]()
1. [What is Debugging and Profiling?](#what-is-debugging-and-profiling)
1. [Debugging Across Multiple C++ Files](#debugging-across-multiple-c-files)
1. [Debugging Demos](#debugging-demos)
1. [Profiling Methods](#profiling-methods)
1. [Features of C++]()
1. [Gotcha Moments for me]()
1. [Repository of C++ code for Common Tasks](#repository-of-c-code-for-common-tasks)
1. [Appendix](#appendix)
1. [References](#references)

### Introduction
This blog contains material that I prepared for my recitation "Efficient C++." I presented this on Feb 12, 2024 to the *Planning Techniques for Robotics* class at CMU.

### Data Structures
An Abstract Data Type is an interface for interacting with data. It defines operations and results, but not how they're implemented. Examples: list, stack, set, queue, map, tree, priority queue, graph, etc.

Data Structure is an implementation of an Abstract Data Type.

#### Array
<!-- ```cpp
int arr[5] = {10,20,30};
std::vector<int> vec = {10,20,30};
``` -->

#### Stack


#### Queue


#### Linked List and Doubly linked list


#### Hash table


#### Graph


#### Tree


#### Custom data structure



### Principles while Choosing Data Structure
1. Data Access Patterns: If you need fast access to elements by index, arrays or hash tables are suitable. For sequential access, linked lists are efficient.
2. Data Relationship: Use trees for hierarchical data, graphs for interconnected data. For example, trees are ideal for family trees, while graphs suit social networks.
3. Frequency of Operations: If your application involves frequent additions and deletions, dynamic data structures like linked lists or balanced trees can be more efficient than arrays.
4. Memory Efficiency: Consider the memory overhead of each data structure. For instance, linked lists consume more memory than arrays due to storage of additional pointers.

Specific to robot planning problems:

- Breadth-first-search uses the Queue data structure
- Depth-first-search uses the Stack data structure. It can also be implemented using recursion. DFS still uses the same data structure because recursion follows the call stack.


### How to Optimize Code?
- Strength reduction: Replace sum of first N integers with the formula
- Check if there are more efficient data structures based on the most frequent operation on the data structure (like lookup table)
- Use Algorithms with faster time complexity (Big O)


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
*If you want to follow along with these demos, please clone [this repository](https://github.com/trunc8/efficient-cpp)*
#### Terminal
<iframe width="600" height="350"
src="https://www.youtube.com/embed/5e0M7F8CB1U?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>  
[Guide on what those shortcuts mean](https://www.tutorialspoint.com/gnu_debugger/gdb_commands.htm)
<br>

#### VSCode
<iframe width="600" height="350"
src="https://www.youtube.com/embed/chUfsvwmjEI?rel=0&amp;controls=1&amp;start=0" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br>


### Profiling Methods
#### Without tools
This is the simplest form of profiling based on timing blocks of code. Print time taken between two points in the code using `chrono`

```cpp
#include <chrono> // At the top

auto start = std::chrono::high_resolution_clock::now();
/**
* Some computation
*/
auto end = std::chrono::high_resolution_clock::now();
auto duration = std::chrono::duration_cast<std::chrono::seconds>(end - start).count();
printf("Wall clock time: %.2f s\n", duration / 1.0e6);
```

#### With tools
CPU Profiler: Samples CPU each millisecond to check execution is currently inside which function

Names of some tools:

- Valgrind
- TAU - Tuning and Analysis Utilities


### Features of C++
#### STL


#### Assert
When to use?
- Universal truths
- For ensuring that assumptions which the code is based on are actually true in reality, before the code continues processing under those assumptions
- Indicate that you're breaking your own contract, your program invariants
- Example: Frequency calculated from a stream of functions becomes negative. Useful in debugging. Asserts must never fail

#### Inheritance


#### Operator overloading


#### Lambda and Capturing


#### Smart Pointers


#### File IO


#### C++11 Features: auto, range-based loops, initializer lists


#### Template


#### Exception




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


    // This will work-
    void reverse(ListNode* curr, ListNode* prev, ListNode* &reverse_head) {
    
    // This will not-
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


### Appendix
#### FAQs
1. Why is it `std::string` but simply `int` or `float`?
    - The string data type is not built into the C++ language, but is implemented as part of the C++ standard library, in the std namespace. `std` is the namespace in which all of the C++ standard library functions, classes, and objects reside.

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


### References:
- [https://www.einfochips.com/wp-content/uploads/resources/a-practical-approach-to-optimize-code-implementation.pdf](https://www.einfochips.com/wp-content/uploads/resources/a-practical-approach-to-optimize-code-implementation.pdf)
- [https://missing.csail.mit.edu/2020/debugging-profiling/](https://missing.csail.mit.edu/2020/debugging-profiling/)
- [https://www.quora.com/What-is-profiling-in-programming-and-how-do-I-get-started-in-profiling-my-source-code-in-C++](https://www.quora.com/What-is-profiling-in-programming-and-how-do-I-get-started-in-profiling-my-source-code-in-C++)
- [https://en.wikibooks.org/wiki/Optimizing_C%2B%2B/Writing_efficient_code/Performance_improving_features](https://en.wikibooks.org/wiki/Optimizing_C%2B%2B/Writing_efficient_code/Performance_improving_features)
- [https://missing.csail.mit.edu/2020/debugging-profiling/](https://missing.csail.mit.edu/2020/debugging-profiling/)
- [https://www.reddit.com/r/cpp_questions/comments/fxrkb6/learning_to_write_efficient_c/](https://www.reddit.com/r/cpp_questions/comments/fxrkb6/learning_to_write_efficient_c/)
- [https://www.agner.org/optimize/optimizing_cpp.pdf](https://www.agner.org/optimize/optimizing_cpp.pdf)
- [https://stackoverflow.com/questions/41725613/definition-of-debugging-profiling-and-tracing#:~:text=Remote%20debugging%20is%20the%20process,analysis%20tool%20called%20a%20profiler.](https://stackoverflow.com/questions/41725613/definition-of-debugging-profiling-and-tracing#:~:text=Remote%20debugging%20is%20the%20process,analysis%20tool%20called%20a%20profiler.)
- [https://man7.org/linux/man-pages/man1/g++.1.html](https://man7.org/linux/man-pages/man1/g++.1.html)
- [https://www.linkedin.com/advice/0/whats-best-way-determine-data-structure-algorithm-right-qtw0c](https://www.linkedin.com/advice/0/whats-best-way-determine-data-structure-algorithm-right-qtw0c?utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7151999305568931840%2C7151999307347382273%29%2C7152191285741674496%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7151999305568931840%2C7151999307347382273%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287152191285741674496%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7151999305568931840%2C7151999307347382273%29%29)