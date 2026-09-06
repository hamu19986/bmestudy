# Programming for Problem Solving (C) — 25ESC-CSE101H
**Credits:** 3 (3-0-0) · Internal 25, External 50, Total 75 · Exam: 3 hrs

Content is organized exactly like your BME platform's unit files: **Overview → Working/Explanation → Example → Exam Tip → Common Mistake → Quick Check**, topic by topic, unit by unit.

---

## UNIT I — The Computer

### 1. Functional Units of a Computer
**Overview:** A computer is a system of five interacting functional units: Input, CPU (Control Unit + ALU), Memory, and Output. Data flows in, is processed and temporarily stored, and results flow out.
**Working:** The Input unit converts raw data into machine-readable form and passes it to memory. The Control Unit fetches instructions from memory, decodes them, and directs the ALU and other units on what to do next (fetch-decode-execute cycle). The ALU performs arithmetic (add, subtract, multiply, divide) and logical (AND, OR, NOT, comparisons) operations. Memory holds both the program and the data it operates on. The Output unit converts processed results back into human-readable form.
**Diagram (describe):** A block diagram — Input → Memory ↔ CPU (Control Unit ↔ ALU) → Output, with Memory shown bidirectionally connected to the CPU.
**Exam Tip:** "Draw and explain the block diagram of a computer" is a guaranteed 5-mark Unit I question — practice drawing the five-block diagram with arrows in under a minute.
**Common Mistake:** Students often merge Control Unit and ALU into one box and forget to show Memory as a separate, bidirectionally-connected block.
**Quick Check:** Q: Which unit actually performs arithmetic? A: The ALU (Arithmetic Logic Unit), inside the CPU.

### 2. Data vs. Information; Classification & Characteristics of Computers
**Overview:** Data is raw, unprocessed facts (numbers, characters); information is data that has been processed into a meaningful, useful form.
**Classification:** By purpose — General purpose (versatile, many tasks) vs. Special purpose (built for one task, e.g. ATM controller). By size/power — Supercomputer, Mainframe, Minicomputer (Server), Microcomputer (PC/laptop).
**Characteristics:** Speed (operations/second), Accuracy, Diligence (no fatigue), Versatility, Storage capacity, Automation — contrasted with Advantages (speed, accuracy, reduces manual labour) and Limitations (no intelligence/judgement of its own, needs correct instructions — "Garbage In, Garbage Out").
**Exam Tip:** Examiners like to ask "Differentiate data and information with an example" — always give a concrete example: raw marks (75, 82, 91) = data; "Average = 82.6%" = information.
**Common Mistake:** Saying a computer is "intelligent" — it only executes instructions exactly as given; it has no judgement of its own.
**Quick Check:** Q: Give one example each of a special-purpose and general-purpose computer. A: Special-purpose — ATM/washing-machine controller; General-purpose — a laptop/PC.

### 3. Central Processing Unit (CPU) and Memory
**Overview:** The CPU is the "brain" — it has the Control Unit (directs operations) and ALU (computes). Memory stores instructions and data, organized in a hierarchy by speed, cost, and size.
**Memory Hierarchy (fastest/most expensive/smallest → slowest/cheapest/largest):** Registers → Cache → Primary memory (RAM, ROM) → Secondary memory (HDD, SSD, optical, USB).
**Primary vs Secondary:** Primary memory is directly accessible by the CPU, volatile (RAM loses data on power-off; ROM is non-volatile but read-only/firmware). Secondary memory is non-volatile, cheaper per byte, but slower and accessed indirectly through the OS.
**Measuring Memory & Unit Conversion:** Bit → Nibble (4 bits) → Byte (8 bits) → KB (2¹⁰ B) → MB (2²⁰ B) → GB (2³⁰ B) → TB (2⁴⁰ B). Always use powers of 2 (1024), not 1000, in the strict computing sense.
**Worked Example:** Convert 5 MB to KB → 5 × 1024 = 5120 KB. Convert 2048 KB to MB → 2048 / 1024 = 2 MB.
**Exam Tip:** Memory-hierarchy diagrams and simple unit-conversion numericals are easy, guaranteed marks — don't skip practicing 3–4 conversions.
**Common Mistake:** Using 1000 instead of 1024 as the conversion factor between memory units.
**Quick Check:** Q: Which is faster — cache or RAM? A: Cache (it sits closer to the CPU in the hierarchy).

### 4. Software
**Overview:** Software is the set of programs/instructions that make hardware perform useful tasks.
**Classification:** System software (manages hardware & provides platform for other software — e.g. Operating System, device drivers, compilers/interpreters/assemblers) vs. Application software (performs specific user tasks — e.g. MS Word, browsers, games).
**Operating System role:** Acts as an interface between user and hardware; manages the processor (scheduling), memory (allocation), files (storage/organization), and I/O devices. Examples: Windows, Linux, Android.
**Exam Tip:** A one-line differentiator examiners love: "System software runs the computer; application software runs on the computer, for the user."
**Common Mistake:** Classifying a compiler as application software — it is system software (it supports program development, not an end-user task).
**Quick Check:** Q: Is an antivirus system software or application software? A: System software (it works closely with the OS to protect the system).

### 5. Number Systems (Binary, Octal, Decimal, Hexadecimal)
**Overview:** A number system defines the base (radix) and the digit symbols used to represent quantities. Computers use Binary (base 2: 0,1) internally; humans commonly use Decimal (base 10); Octal (base 8) and Hexadecimal (base 16, digits 0–9, A–F) are compact shorthand for binary.
**Conversion methods:**
- Decimal → Binary: repeated division by 2, collect remainders bottom-to-top.
- Binary → Decimal: multiply each bit by its positional power of 2 and sum.
- Decimal → Octal/Hex: repeated division by 8 or 16.
- Binary ↔ Octal: group bits in 3s (octal) or 4s (hex) from the right, pad with zeros if needed.
**Worked Example:** Convert 25₁₀ to binary: 25 = 16+8+1 = 11001₂. Convert 11001₂ to hex: group in 4s from right → 0001 1001 → 1 9 → 19₁₆.
**Binary Arithmetic:** Addition (0+0=0, 1+0=1, 1+1=10 carry 1), Subtraction (using 1's/2's complement for negative numbers), Multiplication (shift-and-add), Division (repeated subtraction/shift).
**Codes:** ASCII (7/8-bit character encoding, e.g. 'A' = 65), BCD (each decimal digit encoded in 4 bits, e.g. 9 = 1001), EBCDIC (8-bit IBM character code), Excess-3 (BCD + 3, self-complementing), Gray code (only one bit changes between successive values — used to avoid glitches in digital circuits).
**Exam Tip:** Number-system conversions and binary arithmetic are the single most numerically "safe" topic in Unit I — practice at least 10 conversions across all four bases and one 2's-complement subtraction.
**Common Mistake:** Forgetting to pad binary groups with leading zeros before grouping into octal (3-bit) or hex (4-bit) sets, which shifts every digit.
**Quick Check:** Q: How many bits represent one hex digit? A: 4 bits (a "nibble"). Q: What is special about Gray code? A: Only one bit changes between any two consecutive values.

---

## UNIT II — Problem-Solving Techniques

### 1. Steps of Problem Solving
**Overview:** Before writing any code, a problem must be analyzed systematically: (1) Understand the problem, (2) Identify inputs/outputs, (3) Design a solution (algorithm/flowchart/pseudocode), (4) Code it, (5) Test and debug, (6) Document/maintain.
**Logical vs Numerical problems:** Logical problems focus on decision sequences (e.g., "find the largest of three numbers" — comparison logic); numerical problems focus on computation (e.g., "compute compound interest" — formula-driven).
**Exam Tip:** When asked to "write an algorithm/flowchart/pseudocode" for a problem, always state the assumed inputs and expected output explicitly as Step 1 — examiners award marks for this clarity.
**Common Mistake:** Jumping straight to code/pseudocode without first identifying the problem's inputs and expected outputs.
**Quick Check:** Q: What is the very first step in problem-solving? A: Understanding the problem — precisely identifying what is given and what is required.

### 2. Algorithms
**Overview:** An algorithm is a finite, well-defined, ordered sequence of steps that solves a problem in finite time.
**Characteristics:** Finiteness (must terminate), Definiteness (each step unambiguous), Input (zero or more), Output (at least one), Effectiveness (each step must be basic enough to be carried out).
**Worked Example — Algorithm to find the largest of three numbers:**
```
Step 1: Start
Step 2: Read A, B, C
Step 3: If A > B and A > C, then Largest = A
Step 4: Else if B > C, then Largest = B
Step 5: Else Largest = C
Step 6: Print Largest
Step 7: Stop
```
**Exam Tip:** Always number your steps and include explicit Start/Stop — examiners specifically check for these formalities in algorithm-writing questions.
**Common Mistake:** Writing an "algorithm" that's really just a description of the logic in a paragraph — it must be a numbered, step-wise procedure.
**Quick Check:** Q: Name the five characteristics of a good algorithm. A: Finiteness, Definiteness, Input, Output, Effectiveness.

### 3. Flowcharts
**Overview:** A flowchart is the graphical/pictorial representation of an algorithm using standardized symbols connected by flow-lines.
**Symbols:** Oval (Start/Stop/Terminal), Parallelogram (Input/Output), Rectangle (Process), Diamond (Decision), Arrow (Flow direction), Circle (Connector, used to link flowchart across pages).
**Worked Example:** For "find the largest of three numbers", the flowchart starts with an oval "Start", a parallelogram "Read A, B, C", a diamond "A > B?", branching to further diamonds, ending in a parallelogram "Print Largest" and an oval "Stop".
**Diagram (describe):** Draw Start(oval) → Input(parallelogram) → Decision(diamond, two branches Yes/No) → further decision/process boxes → Output(parallelogram) → Stop(oval), all connected by directional arrows.
**Exam Tip:** Learn the 5 standard symbols and their exact shapes cold — a flowchart question is marked partly on correct symbol usage, not just correct logic.
**Common Mistake:** Using a rectangle for a decision instead of a diamond, or omitting arrowheads on flow-lines.
**Quick Check:** Q: Which symbol represents a decision point? A: The diamond (rhombus).

### 4. Pseudocode
**Overview:** Pseudocode is a plain-English, structured way of writing an algorithm's logic using programming-like keywords (IF, WHILE, FOR, READ, WRITE) without worrying about a specific language's syntax.
**Worked Example:**
```
BEGIN
  READ a, b, c
  IF a > b AND a > c THEN
      largest = a
  ELSE IF b > c THEN
      largest = b
  ELSE
      largest = c
  ENDIF
  WRITE largest
END
```
**Exam Tip:** Pseudocode questions are often interchangeable with algorithm questions — if the examiner says "pseudocode", use IF/WHILE/FOR keywords; if they say "algorithm", use numbered plain-English steps. Knowing both formats for the same 4–5 problems (largest of 3, factorial, sum of digits, Fibonacci, prime check) covers most of Unit II.
**Common Mistake:** Mixing actual C syntax (semicolons, curly braces) into pseudocode — pseudocode should stay language-neutral.
**Quick Check:** Q: Is pseudocode compiled or executed by a computer? A: No — it is only a design/planning tool for humans.

### 5. Programming Languages & Translators
**Overview:** A programming language is a formal notation for expressing algorithms so a computer can execute them. Languages are broadly Low-level (Machine language — pure binary, Assembly language — mnemonics like MOV, ADD) and High-level (C, Python, Java — closer to human language, portable).
**Translators:** A Compiler converts an entire high-level source program into machine code in one pass, producing an executable file (fast execution, errors reported after full compilation) — e.g., a C compiler. An Interpreter translates and executes line-by-line, without producing a standalone executable (slower execution, but errors caught immediately per line) — e.g., Python. An Assembler converts assembly language (mnemonics) into machine code.
**Exam Tip:** "Differentiate compiler and interpreter" is a classic 5-mark question — structure your answer as a comparison table: Speed, Error detection, Output file, Example language.
**Common Mistake:** Saying C is "interpreted" — C is a compiled language.
**Quick Check:** Q: Which translator works line-by-line? A: An Interpreter.

### 6. Program Execution / Compilation Process
**Overview:** Converting C source code into a running program passes through four stages: Preprocessing → Compilation → Assembly → Linking.
**Working:** (1) The Preprocessor expands `#include`, `#define` and macros, producing an expanded source file. (2) The Compiler translates this into Assembly code. (3) The Assembler converts assembly into Object code (machine code, `.obj`/`.o`) — this stage catches syntax errors. (4) The Linker combines the object code with library code (like `printf` from the standard library) to produce the final executable (`.exe`). Errors caught at compile-time are Syntax errors (violate language grammar, e.g. missing semicolon); errors that only show at runtime with wrong output despite successful compilation are Logical errors (e.g. using `+` instead of `*`).
**Diagram (describe):** A left-to-right pipeline: Source code (.c) → [Preprocessor] → Expanded source → [Compiler] → Assembly code (.asm) → [Assembler] → Object code (.obj) → [Linker] + Library files → Executable (.exe).
**Exam Tip:** Draw this exact 4-stage pipeline with the correct file extensions at each arrow — a very common 5-mark diagram question.
**Common Mistake:** Believing the compiler alone produces the final executable — linking (adding library code) is a separate, necessary final stage.
**Quick Check:** Q: At which stage is a missing semicolon caught? A: Compilation (it's a syntax error). Q: At which stage does `printf`'s actual code get attached to your program? A: Linking.

---

## UNIT III — Fundamentals of C

### 1. Introduction, Character Set, Tokens
**Overview:** C, developed by Dennis Ritchie in 1972 at Bell Labs, is a structured, procedural, middle-level language — powerful like assembly, yet portable like a high-level language.
**Character set:** Letters (A-Z, a-z), Digits (0-9), Special symbols (+ - * / = ; , . ( ) { } etc.), White-space characters (space, tab `\t`, newline `\n`).
**Tokens** (smallest individual units): Keywords (reserved words like `int`, `if`, `for` — cannot be used as identifiers), Identifiers (names given to variables/functions — must start with a letter or underscore), Constants (fixed values), Variables (named, changeable storage), Special symbols, Operators.
**Escape sequences:** `\n` newline, `\t` tab, `\\` backslash, `\'` single quote, `\"` double quote, `\0` null character.
**Format specifiers:** `%d` int, `%f` float, `%c` char, `%s` string, `%lf` double, `%x` hexadecimal.
**Exam Tip:** A short-answer favorite: "List any 5 keywords in C" or "Give the escape sequence for newline" — these are free marks if memorized.
**Common Mistake:** Using a C keyword (like `int`, `for`) as a variable name — this is a compile-time error.
**Quick Check:** Q: What is `\0` called and what does it mark? A: The null character — it marks the end of a string in C.

### 2. Data Types & Type Casting
**Overview:** C's basic data types are `int` (whole numbers), `float` (single-precision decimal), `double` (double-precision decimal), `char` (single character, stored as an integer ASCII code), and `void` (no value). Qualifiers `short`, `long`, `signed`, `unsigned` modify range.
**Type casting:** Implicit (automatic conversion, e.g. `int` to `float` in mixed expressions) vs. Explicit (programmer forces conversion using `(type)value`, e.g. `(int)3.9` → `3`, truncating the decimal).
**Worked Example:** `int a = 7, b = 2; float c = (float)a / b;` → `c = 3.5` (explicit cast forces floating-point division; without the cast, `a/b` would perform integer division giving `3`).
**Exam Tip:** A guaranteed "predict the output" question involves integer division truncation — always check if both operands of `/` are integers before assuming a decimal result.
**Common Mistake:** Expecting `7/2` to give `3.5` — without casting, C performs integer division and truncates to `3`.
**Quick Check:** Q: What does `(int)9.8` evaluate to? A: `9` (truncation, not rounding).

### 3. Operators and Expressions
**Overview:** C provides Arithmetic (`+ - * / %`), Relational (`> < >= <= == !=`), Logical (`&& || !`), Assignment (`= += -= *= /=`), Increment/Decrement (`++ --`), Bitwise (`& | ^ ~ << >>`), Conditional/Ternary (`? :`), and Comma operators.
**Precedence & Associativity:** Determines evaluation order in mixed expressions, e.g. `*` `/` `%` bind tighter than `+` `-`; most binary operators associate left-to-right, but assignment and unary operators associate right-to-left.
**Worked Example:** `int x = 5; printf("%d %d", x++, ++x);` — post-increment `x++` uses 5 then increments to 6; pre-increment `++x` increments to 7 first, then uses it → prints `5 7` (though the exact order of argument evaluation is compiler-dependent — a well-known "gotcha" examiners like to test).
**Exam Tip:** A precedence table (a printable exam favorite) is often asked to be drawn/completed — memorize the order: `()` → unary (`++ -- !`) → `* / %` → `+ -` → relational → `&&` → `||` → `?:` → assignment.
**Common Mistake:** Confusing `=` (assignment) with `==` (equality comparison) inside an `if` condition — `if (a = 5)` is valid C but always evaluates true (it assigns 5, doesn't compare).
**Quick Check:** Q: What does `%` compute? A: The remainder of integer division (modulus) — undefined for floats.

### 4. Decision-Making Statements
**Overview:** Conditional statements alter control flow based on a condition: `if`, `if-else`, `else-if ladder`, `switch-case` (multi-way branch on a single variable's value), and the ternary operator. Unconditional: `goto` (jumps directly to a label — generally discouraged, but part of the syllabus), `break`, `continue`.
**Worked Example — Roots of a quadratic equation (ax²+bx+c=0):**
```c
float a,b,c,d;
d = b*b - 4*a*c;
if (d > 0)          printf("Two real distinct roots");
else if (d == 0)    printf("Two real equal roots");
else                printf("Complex roots");
```
**Exam Tip:** "Write a C program to find roots of a quadratic equation" is explicitly named in the syllabus lab list — practice this exact program; it tests `if-else-if`, `sqrt()` (needs `#include <math.h>`), and float formatting together.
**Common Mistake:** Forgetting `#include <math.h>` (and linking `-lm` on some compilers) when using `sqrt()`, causing a compile/link error.
**Quick Check:** Q: In `switch`, what happens if `break` is omitted after a case? A: "Fall-through" occurs — execution continues into the next case regardless of its label.

### 5. Loops
**Overview:** Loops repeat a block of statements. `for` (best when the number of iterations is known in advance — has init, condition, and update in one line), `while` (entry-controlled — condition checked before each iteration; body may run zero times), `do-while` (exit-controlled — condition checked after; body always runs at least once).
**Worked Example — Sum of first N natural numbers:**
```c
int n, i, sum=0;
scanf("%d", &n);
for(i=1; i<=n; i++) sum += i;
printf("%d", sum);
```
**Exam Tip:** Loop-based "dry run" / trace-the-output questions are extremely common — always maintain a small table of variable values per iteration when solving these on paper.
**Common Mistake:** An off-by-one error in the loop condition (`i<n` vs `i<=n`), causing the loop to run one time too few or too many.
**Quick Check:** Q: Which loop guarantees at least one execution of its body? A: `do-while`.

### 6. Arrays
**Overview:** An array is a fixed-size, contiguous collection of elements of the same data type, accessed by index (0-based in C).
**1-D array:** `int arr[5];` — indices 0 to 4. **2-D array (matrix):** `int mat[3][3];` — accessed as `mat[row][col]`.
**Worked Example — Matrix addition:**
```c
for(i=0;i<3;i++)
  for(j=0;j<3;j++)
     c[i][j] = a[i][j] + b[i][j];
```
**Exam Tip:** Matrix problems (addition, transpose, multiplication) are staple lab-exam questions — memorize the nested-loop pattern for each; multiplication needs a third inner loop over the common dimension with an accumulator.
**Common Mistake:** Accessing `arr[5]` on an array declared `int arr[5]` (valid indices are 0–4) — this is an out-of-bounds access that C does not automatically catch, leading to undefined behaviour.
**Quick Check:** Q: What is the index of the first element of any C array? A: 0.

### 7. Strings
**Overview:** A string in C is a `char` array terminated by the null character `\0`. String literals like `"Hello"` are automatically null-terminated arrays of `char`.
**Standard functions** (`#include <string.h>`): `strlen()` (length excluding `\0`), `strcpy()` (copy), `strcat()` (concatenate), `strcmp()` (compare — returns 0 if equal), `strrev()` (reverse, non-standard but common), `strupr()`/`strlwr()`.
**Worked Example:** `char s[20]="Hello"; printf("%d", strlen(s));` prints `5` (the `\0` is not counted).
**Exam Tip:** "Write a program to check if a string is a palindrome" combines strings + loops and is a very common lab question — compare characters from both ends moving inward.
**Common Mistake:** Forgetting to size the character array large enough to hold the null terminator (`char s[5]` cannot safely hold a 5-letter word plus `\0` — needs `s[6]`).
**Quick Check:** Q: What does `strcmp("cat","cat")` return? A: 0 (strings are equal).

### 8. Searching and Sorting
**Overview:** **Linear Search** checks each element sequentially — works on any array, O(n) time. **Binary Search** repeatedly halves the search space by comparing the target to the middle element — requires a sorted array, O(log n) time. **Bubble Sort** repeatedly compares adjacent elements and swaps them if out of order, "bubbling" the largest element to the end each full pass — O(n²).
**Worked Example — Bubble sort pass logic:**
```c
for(i=0;i<n-1;i++)
  for(j=0;j<n-i-1;j++)
     if(arr[j]>arr[j+1]) { temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp; }
```
**Exam Tip:** Be ready to hand-trace one full bubble-sort pass on a 5-element array on paper — a frequent long-answer/lab question.
**Common Mistake:** Applying Binary Search to an unsorted array — it silently gives wrong results because it assumes sortedness.
**Quick Check:** Q: What is the precondition for Binary Search to work correctly? A: The array must already be sorted.

---

## UNIT IV — Advanced C Programming

### 1. Functions
**Overview:** A function is a self-contained, reusable block of code that performs a specific task, improving modularity and reducing repetition.
**Types:** Library/built-in (`printf`, `sqrt`) vs. User-defined; functions with/without arguments, with/without a return value.
**Call by Value vs. Call by Reference:** Call by Value passes a *copy* of the argument — changes inside the function do NOT affect the original variable. Call by Reference passes the *address* (using pointers, `&variable`) — changes inside the function DO affect the original.
**Worked Example — Swap by reference:**
```c
void swap(int *a, int *b){ int t=*a; *a=*b; *b=t; }
// called as: swap(&x, &y);
```
**Exam Tip:** "Differentiate call by value and call by reference with an example" is one of the most frequently repeated exam questions in this course — always illustrate with a swap function example for full marks.
**Common Mistake:** Trying to swap two values using call-by-value parameters and expecting the caller's variables to change — they won't, because only copies were passed.
**Quick Check:** Q: Which method must be used if a function needs to modify the caller's original variable? A: Call by reference (using pointers).

### 2. Input/Output Functions
**Overview:** Console input: `scanf()` (formatted input, needs `&` before variable names except arrays/strings), `getchar()`/`gets()` (character/line input). Console output: `printf()` (formatted output), `putchar()`/`puts()`.
**Exam Tip:** A common trap: mixing `scanf("%d")` immediately followed by `gets()`/`scanf("%c")` — the leftover newline character from the first input gets consumed by the second, producing unexpected blank input. Mention this as a "common issue" for bonus marks in practical vivas.
**Common Mistake:** Forgetting the `&` (address-of operator) before a variable name in `scanf("%d", &x)` — without it, `scanf` doesn't know where to store the value, and the program can crash.
**Quick Check:** Q: Why does `scanf` need `&` before an `int` variable but not before an array name? A: `scanf` needs an address; a plain array name already decays to the address of its first element, while a plain variable name is just its value.

### 3. Preprocessor Directives
**Overview:** The preprocessor runs before compilation, handling directives beginning with `#`. `#include` inserts header file contents (e.g., `<stdio.h>`); `#define` creates macros (symbolic constants or macro functions, e.g. `#define PI 3.14`); conditional compilation directives `#ifdef`, `#ifndef`, `#endif` include/exclude code blocks.
**Exam Tip:** Distinguish `#define` (a text-substitution macro, no type-checking, no semicolon at the end) from a `const` variable (typed, memory-allocated) — a favorite conceptual question.
**Common Mistake:** Putting a semicolon at the end of a `#define` line — this becomes part of the substituted text and can silently break expressions.
**Quick Check:** Q: Is `#define` processed by the compiler or the preprocessor? A: The preprocessor, before actual compilation begins.

### 4. Storage Classes
**Overview:** Storage classes define a variable's scope, lifetime, and default value: `auto` (default for local variables, exists only within the block), `static` (retains its value between function calls, initialized only once), `extern` (declares a variable defined in another file/outside current scope, for sharing across files), `register` (a hint to store the variable in a CPU register for faster access — modern compilers largely ignore this hint).
**Worked Example:** A `static int count = 0;` inside a function retains its incremented value across multiple calls to that function, unlike a plain (`auto`) local variable which resets every call.
**Exam Tip:** A comparison table (Scope | Lifetime | Default Value | Where declared) across all four storage classes is a classic 5-mark answer format.
**Common Mistake:** Assuming a `static` local variable resets to its initial value every time the function is called — it does not; initialization happens only once, ever.
**Quick Check:** Q: Which storage class variable retains its value between successive function calls? A: `static`.

### 5. Recursion
**Overview:** Recursion is when a function calls itself to solve smaller instances of the same problem, until it reaches a base case that stops further calls.
**Worked Examples:**
```c
// Factorial
int fact(int n){ return (n<=1) ? 1 : n*fact(n-1); }
// Fibonacci
int fib(int n){ return (n<=1) ? n : fib(n-1)+fib(n-2); }
```
**Ackermann Function:** A recursive function of two arguments, notable in theory of computation for growing extremely fast and for NOT being expressible with simple loops — used to illustrate the power (and cost) of recursion:
`A(m,n) = n+1 if m=0; A(m-1,1) if m>0,n=0; A(m-1, A(m,n-1)) otherwise.`
**Exam Tip:** Always identify and explicitly state the *base case* and *recursive case* separately when writing a recursive function on the exam — examiners specifically look for this.
**Common Mistake:** Omitting or writing an incorrect base case, causing infinite recursion and a stack overflow.
**Quick Check:** Q: What stops a recursive function from calling itself forever? A: The base case.

### 6. Structures and Unions
**Overview:** A `struct` groups different data types under one name, with each member getting its own memory (total size = sum of members, plus possible padding). A `union` also groups different types under one name, but all members *share* the same memory location (size = size of the largest member) — only one member holds a valid value at a time.
**Worked Example:**
```c
struct Student { char name[20]; int roll; float marks; };
struct Student s1 = {"Ravi", 1, 89.5};
printf("%s", s1.name);
```
**Passing structures to functions:** Can be passed by value (a full copy) or by reference (pointer to struct, accessed with `->`).
**Self-referential structures:** A structure that contains a pointer to another structure of the *same* type (`struct Node{ int data; struct Node *next; };`) — the basis of linked lists.
**Exam Tip:** "Differentiate structure and union" (with a memory-size example) is a very frequently repeated question — always give a size comparison, e.g., a struct with an `int` (4B) and `float` (4B) is 8B, but the equivalent union is only 4B.
**Common Mistake:** Assuming all union members can hold valid, independent values simultaneously — writing to one member overwrites the shared memory used by all others.
**Quick Check:** Q: In a union of `int` and `char`, what is the union's total size? A: The size of the largest member — `int` (typically 4 bytes).

### 7. Pointers
**Overview:** A pointer is a variable that stores the memory *address* of another variable, rather than a data value directly. Declared as `int *p;` and used with `&` (address-of) and `*` (dereference/value-at-address).
**Generic Pointers:** `void *` is a type-less pointer that can point to any data type, but must be cast before dereferencing.
**Worked Example:**
```c
int a = 10, *p;
p = &a;
printf("%d", *p);  // prints 10, the value at the address p holds
```
**Exam Tip:** Pointer-arithmetic and pointer-array-relationship questions ("`arr` is equivalent to `&arr[0]`") are frequently tested — practice tracing pointer-based code snippets line by line.
**Common Mistake:** Confusing `*p` (dereference — "value at") with `&p` (address-of `p` itself, i.e. a pointer to a pointer) — a very common source of exam errors.
**Quick Check:** Q: If `p = &a`, what does `*p` represent? A: The value stored in `a`.

### 8. Linked Lists (via Self-Referential Structures)
**Overview:** A singly linked list is a chain of nodes, each holding data plus a pointer to the next node, ending in `NULL`. Unlike arrays, linked lists grow/shrink dynamically without needing contiguous memory.
**Diagram (describe):** Draw boxes labelled with data values, each connected by an arrow to the next box, with the last box's pointer field shown as a slash or "NULL".
**Exam Tip:** At the theory level (this course does not go deep into full list operations), be ready to explain the basic node structure and draw the chain diagram, and compare arrays vs. linked lists (static vs. dynamic size, contiguous vs. scattered memory, random vs. sequential access).
**Common Mistake:** Forgetting to set the last node's pointer to `NULL`, which the traversal loop relies on to detect the end of the list.
**Quick Check:** Q: What value marks the end of a singly linked list? A: `NULL`.

### 9. File Handling
**Overview:** C treats files as streams accessed via a `FILE *` pointer, opened with `fopen("filename","mode")` in modes like `"r"` (read), `"w"` (write, overwrites/creates), `"a"` (append), and closed with `fclose()`.
**Built-in functions:** `fprintf()`/`fscanf()` (formatted file I/O), `fgetc()`/`fputc()` (character-wise), `fgets()`/`fputs()` (line/string-wise), `feof()` (detects end-of-file).
**Worked Example:**
```c
FILE *fp = fopen("data.txt","w");
fprintf(fp, "Hello File");
fclose(fp);
```
**Exam Tip:** Always show `fopen`'s return value being checked against `NULL` (to handle a failed file open) in exam code — examiners award marks for this defensive-programming habit.
**Common Mistake:** Forgetting `fclose()` — this can leave data unflushed/unwritten to disk and leak file handles.
**Quick Check:** Q: Which mode opens a file for writing, erasing any existing content? A: `"w"`.

### 10. Dynamic Memory Allocation
**Overview:** Unlike normal variables (allocated automatically at compile-time on the stack), dynamic memory is allocated at run-time on the heap using library functions from `<stdlib.h>`.
**Functions:** `malloc(size)` — allocates `size` bytes, uninitialized (contains garbage). `calloc(n,size)` — allocates memory for `n` elements of `size` bytes each, and initializes it all to zero. `realloc(ptr,newsize)` — resizes a previously allocated block, preserving existing data as far as possible. `free(ptr)` — releases previously allocated memory back to the system.
**Worked Example:**
```c
int *arr = (int*) malloc(5 * sizeof(int));
if(arr != NULL){ /* use arr[0..4] */ }
free(arr);
```
**Exam Tip:** "Differentiate `malloc()` and `calloc()`" is a near-guaranteed question — the two key differences are (1) number of arguments (1 vs 2) and (2) initialization (garbage vs. zero).
**Common Mistake:** Forgetting to call `free()` on dynamically allocated memory, causing a memory leak.
**Quick Check:** Q: Which function both allocates AND zero-initializes memory? A: `calloc()`.

### 11. Algorithm Analysis (Time & Space Complexity)
**Overview:** Time complexity measures how an algorithm's running time grows with input size `n`; Space complexity measures how memory usage grows. Both are usually expressed in Big-O notation, describing worst-case growth.
**Common orders (fastest to slowest growth):** O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic, O(2ⁿ) exponential.
**Worked Example:** A single loop from 1 to n → O(n). A nested loop (like bubble sort) → O(n²). Binary search → O(log n).
**Exam Tip:** Be ready to state the time complexity of every algorithm covered in this course (linear search O(n), binary search O(log n), bubble sort O(n²)) — a common 1–2 mark fill-in.
**Common Mistake:** Confusing the complexity of linear search (O(n)) with binary search (O(log n)) — remember binary search only works on sorted data and halves the range each step.
**Quick Check:** Q: What is the time complexity of bubble sort in the worst case? A: O(n²).

---

## Lab Focus (25LC-CSE101H / 25LC-CSE103H)
The practical list from your syllabus maps directly onto the units above — the 10+ experiments you must perform (arithmetic/logical algorithms, quadratic-equation roots, iterative sum-of-series, 1D/2D arrays, matrix operations, string operations, functions, recursion, pointers, structures, file operations, dynamic memory) are each covered as a "Worked Example" in the matching topic above. Practicing those exact code snippets by hand (not just reading them) is the fastest way to prepare for both the practical exam and the theory paper's programming questions.
