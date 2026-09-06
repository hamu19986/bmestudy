/* ============================================================
   PROGRAMMING FOR PROBLEM SOLVING — QUESTION BANK
   Source: content/02-Programming-for-Problem-Solving.md
   ============================================================ */

const PPS_QUESTIONS = [
/* -------- Unit I — The Computer -------- */
{ id:'pq1', course:'pps', unit:1, topic:'c1-functional-units', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which functional unit performs arithmetic and logical operations?',
  options:['Control Unit','ALU','Memory','Input unit'], answer:'ALU',
  explanation:'The Arithmetic Logic Unit, inside the CPU, handles both arithmetic (+,−,×,÷) and logical (AND/OR/NOT, comparisons) operations.' },

{ id:'pq2', course:'pps', unit:1, topic:'c1-functional-units', type:'long', difficulty:'Medium', marks:5,
  question:'Draw and explain the block diagram of a computer, clearly showing all five functional units and the direction of data flow.',
  answer:'Five blocks: Input unit (converts data to machine-readable form) → Memory (holds program + data) ↔ CPU (Control Unit: fetch-decode-execute; ALU: arithmetic/logic) → Output unit (converts results back to human-readable form). Memory is bidirectionally connected to the CPU. Explain each unit\'s role in one or two lines.',
  explanation:'Marks are for the diagram (5 labelled blocks, correct arrows, Memory shown bidirectional) plus one-two lines per unit.' },

{ id:'pq3', course:'pps', unit:1, topic:'c1-classification', type:'short', difficulty:'Easy', marks:2,
  question:'Differentiate data and information with one example.',
  answer:'Data is raw, unprocessed facts (e.g. marks 75, 82, 91); information is processed, meaningful output derived from data (e.g. "Average = 82.6%").',
  explanation:'Always attach a concrete example — the differentiation itself is only half the answer.' },

{ id:'pq4', course:'pps', unit:1, topic:'c1-classification', type:'mcq', difficulty:'Easy', marks:1,
  question:'An ATM controller is best classified as a:',
  options:['General-purpose computer','Special-purpose computer','Supercomputer','Mainframe'], answer:'Special-purpose computer',
  explanation:'Special-purpose machines are built for exactly one task.' },

{ id:'pq5', course:'pps', unit:1, topic:'c1-memory', type:'mcq', difficulty:'Easy', marks:1,
  question:'Arrange from fastest to slowest: RAM, registers, cache, SSD.',
  options:['Registers → cache → RAM → SSD','Cache → registers → RAM → SSD','RAM → cache → registers → SSD','Registers → RAM → cache → SSD'], answer:'Registers → cache → RAM → SSD',
  explanation:'This is exactly the memory hierarchy, from the CPU outward.' },

{ id:'pq6', course:'pps', unit:1, topic:'c1-memory', type:'numerical', difficulty:'Medium', marks:2,
  question:'Convert 5 MB to KB and 2048 KB to MB (using binary multiples).',
  answer:'5 MB = 5 × 1024 = 5120 KB. 2048 KB = 2048 ÷ 1024 = 2 MB.',
  explanation:'Use 1024 (2¹⁰), never 1000, between memory units.' },

{ id:'pq7', course:'pps', unit:1, topic:'c1-software', type:'mcq', difficulty:'Medium', marks:1,
  question:'A C compiler is classified as:',
  options:['Application software','System software','Hardware','Firmware'], answer:'System software',
  explanation:'Compilers support program development — system software, not an end-user task.' },

{ id:'pq8', course:'pps', unit:1, topic:'c1-number-systems', type:'numerical', difficulty:'Medium', marks:5,
  question:'Convert (25)₁₀ to binary, then to hexadecimal, showing every step.',
  answer:'25 ÷ 2: remainders 1,0,0,1,1 → reading bottom-to-top: 11001₂ (16+8+1). For hex, group the bits in 4s from the right: 0001 1001 → 1 9 → (19)₁₆.',
  explanation:'Division-remainder method for decimal→binary; 4-bit grouping for binary→hex, padding with leading zeros.' },

{ id:'pq9', course:'pps', unit:1, topic:'c1-number-systems', type:'mcq', difficulty:'Medium', marks:1,
  question:'Binary addition 1 + 1 equals:',
  options:['1','2','10','11'], answer:'10',
  explanation:'1+1 = 0 with a carry of 1, written 10 in binary.' },

{ id:'pq10', course:'pps', unit:1, topic:'c1-codes', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which code changes exactly one bit between any two consecutive values?',
  options:['BCD','ASCII','Gray code','Excess-3'], answer:'Gray code',
  explanation:'The single-bit-change property avoids glitches in digital circuits.' },

{ id:'pq11', course:'pps', unit:1, topic:'c1-codes', type:'short', difficulty:'Easy', marks:2,
  question:'Write 9 in BCD and explain how BCD differs from the binary representation of 9.',
  answer:'9 in BCD = 1001 (each decimal digit gets its own 4-bit code). BCD differs from pure binary per NUMBER: for multi-digit numbers each digit is encoded separately (25 = 0010 0101 in BCD), whereas straight binary encodes the whole value (25 = 11001).',
  explanation:'BCD is per-digit; binary is per-value.' },

/* -------- Unit II — Problem-Solving Techniques -------- */
{ id:'pq12', course:'pps', unit:2, topic:'c2-algorithms', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which is NOT a characteristic of a good algorithm?',
  options:['Finiteness','Definiteness','Ambiguity','Effectiveness'], answer:'Ambiguity',
  explanation:'Each step must be unambiguous — definiteness, the opposite, is the required trait.' },

{ id:'pq13', course:'pps', unit:2, topic:'c2-algorithms', type:'long', difficulty:'Medium', marks:5,
  question:'Write an algorithm to find the largest of three numbers, numbering every step.',
  answer:'Step 1: Start. Step 2: Read A, B, C. Step 3: If A > B and A > C, then Largest = A. Step 4: Else if B > C, then Largest = B. Step 5: Else Largest = C. Step 6: Print Largest. Step 7: Stop.',
  explanation:'Numbered steps with explicit Start/Stop are checked formally by examiners.' },

{ id:'pq14', course:'pps', unit:2, topic:'c2-flowcharts', type:'mcq', difficulty:'Easy', marks:1,
  question:'The standard flowchart symbol for input/output is the:',
  options:['Oval','Parallelogram','Rectangle','Diamond'], answer:'Parallelogram',
  explanation:'Ovals are terminals, rectangles are processes, diamonds are decisions.' },

{ id:'pq15', course:'pps', unit:2, topic:'c2-pseudocode', type:'short', difficulty:'Medium', marks:2,
  question:'Write pseudocode to read three numbers and print the largest.',
  answer:'BEGIN\n  READ a, b, c\n  IF a > b AND a > c THEN largest = a\n  ELSE IF b > c THEN largest = b\n  ELSE largest = c\n  ENDIF\n  WRITE largest\nEND',
  explanation:'Pseudocode uses IF/READ/WRITE keywords — no C syntax like semicolons.' },

{ id:'pq16', course:'pps', unit:2, topic:'c2-translators', type:'long', difficulty:'Medium', marks:5,
  question:'Differentiate compiler and interpreter in a comparison table (speed, error detection, output file, example language).',
  answer:'Compiler: converts the entire program in one pass; errors reported after full compilation; produces a standalone executable; fast execution; example — C. Interpreter: translates and executes line-by-line; errors caught immediately per line; no standalone executable; slower; example — Python.',
  explanation:'Structure as a table: Speed | Error detection | Output file | Example.' },

{ id:'pq17', course:'pps', unit:2, topic:'c2-compilation', type:'mcq', difficulty:'Medium', marks:1,
  question:'At which stage of the C program lifecycle is printf\'s actual code attached to your program?',
  options:['Preprocessing','Compilation','Assembly','Linking'], answer:'Linking',
  explanation:'The linker combines object code with library code such as printf.' },

{ id:'pq18', course:'pps', unit:2, topic:'c2-compilation', type:'short', difficulty:'Medium', marks:2,
  question:'List the four stages of the C compilation process in order, with the file type produced at each.',
  answer:'Preprocessing (expanded source) → Compilation (assembly code) → Assembly (object code .obj/.o) → Linking (executable .exe).',
  explanation:'Draw the pipeline left-to-right with extensions — a common 5-mark diagram.' },

/* -------- Unit III — Fundamentals of C -------- */
{ id:'pq19', course:'pps', unit:3, topic:'c3-c-intro', type:'mcq', difficulty:'Easy', marks:1,
  question:'The escape sequence for a newline in C is:',
  options:['\\t','\\n','\\0','\\\\'], answer:'\\n',
  explanation:'\\t is tab, \\0 is the null character, \\\\ is a backslash.' },

{ id:'pq20', course:'pps', unit:3, topic:'c3-tokens', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which is a VALID C identifier?',
  options:['2sum','float','_total','roll no'], answer:'_total',
  explanation:'Identifiers start with a letter or underscore; keywords and spaces are invalid.' },

{ id:'pq21', course:'pps', unit:3, topic:'c3-data-types', type:'mcq', difficulty:'Medium', marks:1,
  question:'int a = 7, b = 2; float c = (float)a / b; — what is c?',
  options:['3','3.5','3.0','Compile error'], answer:'3.5',
  explanation:'The explicit cast forces floating-point division; without it, integer division would truncate to 3.' },

{ id:'pq22', course:'pps', unit:3, topic:'c3-data-types', type:'short', difficulty:'Easy', marks:2,
  question:'Differentiate implicit and explicit type casting with one example each.',
  answer:'Implicit: automatic conversion by the compiler in mixed expressions (int promoted to float). Explicit: programmer-forced conversion with (type)value, e.g. (int)3.9 → 3 (truncation).',
  explanation:'The truncation-vs-rounding distinction is frequently tested.' },

{ id:'pq23', course:'pps', unit:3, topic:'c3-operators', type:'mcq', difficulty:'Medium', marks:1,
  question:'if (a = 5) is legal C. What is wrong with it?',
  options:['Nothing','It compares a to 5','It assigns 5 to a, so the condition is always true','It is a syntax error'], answer:'It assigns 5 to a, so the condition is always true',
  explanation:'= is assignment; == is comparison — the classic exam trap.' },

{ id:'pq24', course:'pps', unit:3, topic:'c3-operators', type:'short', difficulty:'Medium', marks:2,
  question:'Write the operator precedence chain from highest to lowest for the main C operators.',
  answer:'() → unary (++ -- !) → * / % → + − → relational (> < >= <= == !=) → && → || → ?: → assignment (= += -= …).',
  explanation:'A printable exam favourite — memorize the chain.' },

{ id:'pq25', course:'pps', unit:3, topic:'c3-decisions', type:'programming', difficulty:'Medium', marks:5,
  question:'Write a C program to find the nature of the roots of a quadratic equation ax² + bx + c = 0.',
  answer:'float a,b,c,d; scanf("%f %f %f",&a,&b,&c); d = b*b - 4*a*c; if (d > 0) printf("Two real distinct roots"); else if (d == 0) printf("Two real equal roots"); else printf("Complex roots"); — include <math.h> if computing sqrt(d) for the actual roots.',
  explanation:'The discriminant decides the branch; forgetting math.h for sqrt() is the classic error.' },

{ id:'pq26', course:'pps', unit:3, topic:'c3-loops', type:'programming', difficulty:'Easy', marks:5,
  question:'Write a C program to compute the sum of the first N natural numbers using a for loop.',
  answer:'int n, i, sum = 0; scanf("%d", &n); for (i = 1; i <= n; i++) sum += i; printf("%d", sum);',
  explanation:'The canonical dry-run example — trace the variable table for N = 5: sum builds 1, 3, 6, 10, 15.' },

{ id:'pq27', course:'pps', unit:3, topic:'c3-loops', type:'mcq', difficulty:'Medium', marks:1,
  question:'How many times does the body of a do-while loop execute if its condition is false from the start?',
  options:['0','1','Infinite','Depends on the compiler'], answer:'1',
  explanation:'do-while is exit-controlled — the condition is checked after the body.' },

{ id:'pq28', course:'pps', unit:3, topic:'c3-arrays', type:'mcq', difficulty:'Medium', marks:1,
  question:'For int arr[5], which access is out of bounds?',
  options:['arr[0]','arr[4]','arr[5]','&arr[2]'], answer:'arr[5]',
  explanation:'Valid indices are 0–4; C does not catch the overflow — undefined behaviour.' },

{ id:'pq29', course:'pps', unit:3, topic:'c3-arrays', type:'programming', difficulty:'Medium', marks:5,
  question:'Write the nested-loop code to add two 3×3 matrices.',
  answer:'for (i = 0; i < 3; i++)\n  for (j = 0; j < 3; j++)\n    c[i][j] = a[i][j] + b[i][j];',
  explanation:'Transpose swaps [i][j]/[j][i]; multiplication adds a third inner loop with an accumulator.' },

{ id:'pq30', course:'pps', unit:3, topic:'c3-strings', type:'mcq', difficulty:'Easy', marks:1,
  question:'char s[20] = "Hello"; printf("%d", strlen(s)); prints:',
  options:['6','5','20','4'], answer:'5',
  explanation:'strlen excludes the terminating \\0.' },

{ id:'pq31', course:'pps', unit:3, topic:'c3-strings', type:'short', difficulty:'Medium', marks:2,
  question:'Name four standard string functions and what each does.',
  answer:'strlen() — length excluding \\0; strcpy() — copy; strcat() — concatenate; strcmp() — compare (returns 0 if equal). (Also accepted: strrev, strupr, strlwr.)',
  explanation:'All live in <string.h>; strcmp returning 0 for equal strings is the usual trap.' },

{ id:'pq32', course:'pps', unit:3, topic:'c3-search-sort', type:'mcq', difficulty:'Medium', marks:1,
  question:'The essential precondition for binary search is:',
  options:['The array is large','The array is sorted','The array holds integers','The target is present'], answer:'The array is sorted',
  explanation:'Halving only works when comparisons can discard half the space reliably.' },

{ id:'pq33', course:'pps', unit:3, topic:'c3-search-sort', type:'programming', difficulty:'Medium', marks:5,
  question:'Write the bubble-sort inner logic and hand-trace one full pass on [5, 3, 8, 2].',
  answer:'for (i = 0; i < n-1; i++)\n  for (j = 0; j < n-i-1; j++)\n    if (arr[j] > arr[j+1]) { temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; }\nPass 1 on [5,3,8,2]: compare 5,3 → swap → [3,5,8,2]; compare 5,8 → keep; compare 8,2 → swap → [3,5,2,8]. Largest (8) has bubbled to the end.',
  explanation:'Show each adjacent comparison and swap; after pass 1 the last element is final.' },

/* -------- Unit IV — Advanced C -------- */
{ id:'pq34', course:'pps', unit:4, topic:'c4-functions', type:'long', difficulty:'Medium', marks:5,
  question:'Differentiate call by value and call by reference with a swap-function example.',
  answer:'Call by value passes a COPY — changes inside the function do not affect the caller\'s variables, so a value-based swap fails. Call by reference passes addresses (swap(&x,&y) with void swap(int *a, int *b){ int t=*a; *a=*b; *b=t; }) — the caller\'s variables genuinely swap.',
  explanation:'The swap example is what earns full marks; mention that only copies are passed by value.' },

{ id:'pq35', course:'pps', unit:4, topic:'c4-functions', type:'mcq', difficulty:'Easy', marks:1,
  question:'A function that must modify the caller\'s original variable should receive:',
  options:['A copy of the variable','The variable\'s address','The variable\'s name as a string','Nothing'], answer:'The variable\'s address',
  explanation:'Call by reference via pointers is required for side effects.' },

{ id:'pq36', course:'pps', unit:4, topic:'c4-io', type:'mcq', difficulty:'Medium', marks:1,
  question:'Why does scanf("%d", &x) need &, but scanf("%s", name) does not (char name[20])?',
  options:['Strings are special to scanf','An array name already is an address','& is optional everywhere','name is a keyword'], answer:'An array name already is an address',
  explanation:'The array name decays to the address of its first element.' },

{ id:'pq37', course:'pps', unit:4, topic:'c4-preprocessor', type:'short', difficulty:'Medium', marks:2,
  question:'Distinguish a #define macro from a const variable (two points).',
  answer:'#define is preprocessor text substitution with no type-checking and no memory allocation (and no semicolon); a const variable is typed, compiler-checked and memory-allocated.',
  explanation:'Also mention that a semicolon after #define becomes part of the substituted text.' },

{ id:'pq38', course:'pps', unit:4, topic:'c4-storage-classes', type:'long', difficulty:'Medium', marks:5,
  question:'Compare the four storage classes in C (auto, static, extern, register) using a Scope | Lifetime | Default Value | Where-declared table.',
  answer:'auto: block scope, lifetime of the block, garbage default, declared inside functions (default). static: block/file scope, lifetime of the whole program, zero default, declared inside/outside functions — value persists across calls, initialized once. extern: global scope across files, program lifetime, zero default, declared outside functions/other files. register: block scope, block lifetime, garbage default, declared inside functions — a compiler hint for CPU-register storage.',
  explanation:'The comparison table is the expected 5-mark format; stress that static initializes only once.' },

{ id:'pq39', course:'pps', unit:4, topic:'c4-recursion', type:'programming', difficulty:'Medium', marks:5,
  question:'Write recursive functions for factorial and Fibonacci, clearly labelling the base and recursive cases.',
  answer:'int fact(int n){ return (n <= 1) ? 1 : n * fact(n-1); }  // base: n ≤ 1; recursive: n·fact(n−1)\nint fib(int n){ return (n <= 1) ? n : fib(n-1) + fib(n-2); }  // base: n ≤ 1; recursive: sum of two prior terms',
  explanation:'Explicitly labelling base and recursive cases is what examiners look for.' },

{ id:'pq40', course:'pps', unit:4, topic:'c4-recursion', type:'mcq', difficulty:'Medium', marks:1,
  question:'A missing base case in recursion causes:',
  options:['Compile error','Infinite recursion / stack overflow','Wrong output only','Nothing'], answer:'Infinite recursion / stack overflow',
  explanation:'Calls keep stacking until the stack is exhausted.' },

{ id:'pq41', course:'pps', unit:4, topic:'c4-structures', type:'long', difficulty:'Medium', marks:5,
  question:'Differentiate structure and union with a memory-size example.',
  answer:'struct: each member gets separate memory; total size = sum of members (+ padding). union: all members share one memory block sized by the largest member — only one member is valid at a time. Example: struct {int; float;} = 4+4 = 8 bytes; the equivalent union = 4 bytes (the larger member).',
  explanation:'The size comparison is the mark-scoring differentiator.' },

{ id:'pq42', course:'pps', unit:4, topic:'c4-structures', type:'mcq', difficulty:'Medium', marks:1,
  question:'struct Node { int data; struct Node *next; }; is called a:',
  options:['Nested structure','Self-referential structure','Union','Array of structures'], answer:'Self-referential structure',
  explanation:'It contains a pointer to its own type — the basis of linked lists.' },

{ id:'pq43', course:'pps', unit:4, topic:'c4-pointers', type:'mcq', difficulty:'Medium', marks:1,
  question:'int a = 10, *p; p = &a; — what does *p print?',
  options:['The address of a','10','The address of p','Garbage'], answer:'10',
  explanation:'* dereferences: the value at the address p holds.' },

{ id:'pq44', course:'pps', unit:4, topic:'c4-pointers', type:'short', difficulty:'Medium', marks:2,
  question:'What is a generic (void) pointer and what must happen before dereferencing it?',
  answer:'A void * can point to any data type; it must be explicitly cast to the target type before dereferencing (e.g. *(int*)vp).',
  explanation:'Type-less storage is the advantage; casting is the cost.' },

{ id:'pq45', course:'pps', unit:4, topic:'c4-files', type:'short', difficulty:'Medium', marks:2,
  question:'Write a two-line snippet to open "data.txt" for writing and write "Hello File" into it — including the defensive check.',
  answer:'FILE *fp = fopen("data.txt", "w"); if (fp == NULL) return 1; fprintf(fp, "Hello File"); fclose(fp);',
  explanation:'Checking fopen\'s return against NULL is the mark-earning defensive habit.' },

{ id:'pq46', course:'pps', unit:4, topic:'c4-files', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which fopen mode opens a file for writing, erasing existing content?',
  options:['"r"','"a"','"w"','"x"'], answer:'"w"',
  explanation:'"a" appends; "r" reads; "w" truncates/creates.' },

{ id:'pq47', course:'pps', unit:4, topic:'c4-dynamic-memory', type:'long', difficulty:'Medium', marks:5,
  question:'Differentiate malloc() and calloc(), and write a snippet that safely allocates 5 ints and frees them.',
  answer:'malloc(size): one argument, allocates size bytes, contents UNINITIALIZED (garbage). calloc(n, size): two arguments, allocates n elements of size bytes, contents ZERO-initialized. Snippet: int *arr = (int*) malloc(5 * sizeof(int)); if (arr != NULL) { /* use arr[0..4] */ } free(arr);',
  explanation:'Two differences: argument count and initialization; free() prevents the memory leak.' },

{ id:'pq48', course:'pps', unit:4, topic:'c4-complexity', type:'mcq', difficulty:'Medium', marks:1,
  question:'The worst-case time complexity of binary search is:',
  options:['O(n)','O(log n)','O(n²)','O(1)'], answer:'O(log n)',
  explanation:'The search space halves each step; linear search is O(n), bubble sort O(n²).' }
];
