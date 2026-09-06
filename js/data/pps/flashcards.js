/* ============================================================
   PROGRAMMING FOR PROBLEM SOLVING — FLASHCARDS
   Source: content/02-Programming-for-Problem-Solving.md
   ============================================================ */

const PPS_FLASHCARDS = [
/* -------- Unit I -------- */
{ id:'pfc1', course:'pps', unit:1, topic:'c1-functional-units', category:'Definition', front:'Name the five functional units of a computer.', back:'Input, CPU (Control Unit + ALU), Memory, Output — Memory connects bidirectionally to the CPU.' },
{ id:'pfc2', course:'pps', unit:1, topic:'c1-classification', category:'Difference', front:'Data vs information?', back:'Data = raw, unprocessed facts (75, 82, 91); information = processed, meaningful output ("Average = 82.6%").' },
{ id:'pfc3', course:'pps', unit:1, topic:'c1-memory', category:'Memory Trick', front:'Recite the memory hierarchy fastest → slowest.', back:'Registers → Cache → Primary (RAM, ROM) → Secondary (HDD, SSD, optical, USB).' },
{ id:'pfc4', course:'pps', unit:1, topic:'c1-memory', category:'Formula', front:'Memory unit ladder?', back:'Bit → Nibble (4b) → Byte (8b) → KB (2¹⁰) → MB (2²⁰) → GB (2³⁰) → TB (2⁴⁰) — always ×1024, never ×1000.' },
{ id:'pfc5', course:'pps', unit:1, topic:'c1-software', category:'Exam Trap', front:'One-line system vs application software?', back:'"System software runs the computer; application software runs on the computer, for the user." A compiler is SYSTEM software.' },
{ id:'pfc6', course:'pps', unit:1, topic:'c1-number-systems', category:'Algorithm', front:'Decimal → binary conversion method?', back:'Repeated division by 2; collect remainders bottom-to-top. 25₁₀ = 11001₂.' },
{ id:'pfc7', course:'pps', unit:1, topic:'c1-number-systems', category:'Concept', front:'Binary ↔ octal and binary ↔ hex grouping?', back:'Group bits in 3s for octal, 4s for hex — from the right, padding with leading zeros.' },
{ id:'pfc8', course:'pps', unit:1, topic:'c1-codes', category:'Definition', front:'What is special about Gray code?', back:'Only one bit changes between any two consecutive values — avoids glitches in digital circuits.' },
{ id:'pfc9', course:'pps', unit:1, topic:'c1-codes', category:'Definition', front:'BCD vs straight binary for 25?', back:'BCD encodes each decimal digit separately: 25 = 0010 0101 (BCD); straight binary encodes the value: 25 = 11001.' },

/* -------- Unit II -------- */
{ id:'pfc10', course:'pps', unit:2, topic:'c2-algorithms', category:'Definition', front:'Five characteristics of a good algorithm?', back:'Finiteness, Definiteness, Input, Output, Effectiveness.' },
{ id:'pfc11', course:'pps', unit:2, topic:'c2-flowcharts', category:'Syntax', front:'Match the flowchart symbols.', back:'Oval = Start/Stop; Parallelogram = Input/Output; Rectangle = Process; Diamond = Decision; Arrow = flow; Circle = connector.' },
{ id:'pfc12', course:'pps', unit:2, topic:'c2-pseudocode', category:'Exam Trap', front:'Is pseudocode compiled or executed?', back:'No — it is only a design/planning tool for humans; keep it language-neutral (no semicolons/braces).' },
{ id:'pfc13', course:'pps', unit:2, topic:'c2-translators', category:'Difference', front:'Compiler vs interpreter?', back:'Compiler: whole program in one pass, errors after full compilation, produces an executable (C). Interpreter: line-by-line, errors caught immediately, no executable (Python).' },
{ id:'pfc14', course:'pps', unit:2, topic:'c2-compilation', category:'Algorithm', front:'The four-stage C compilation pipeline?', back:'Preprocessing (expands #include/#define) → Compilation (assembly) → Assembly (.obj) → Linking (+ libraries → .exe).' },
{ id:'pfc15', course:'pps', unit:2, topic:'c2-compilation', category:'Difference', front:'Syntax error vs logical error?', back:'Syntax error: violates grammar, caught at compile time (missing semicolon). Logical error: compiles fine, wrong output at run time (+ instead of *).' },

/* -------- Unit III -------- */
{ id:'pfc16', course:'pps', unit:3, topic:'c3-c-intro', category:'Definition', front:'Who developed C, when, where?', back:'Dennis Ritchie, 1972, Bell Labs — a structured, procedural, middle-level language.' },
{ id:'pfc17', course:'pps', unit:3, topic:'c3-c-intro', category:'Syntax', front:'Format specifiers: %d, %f, %c, %s, %lf, %x?', back:'%d int, %f float, %c char, %s string, %lf double, %x hexadecimal.' },
{ id:'pfc18', course:'pps', unit:3, topic:'c3-tokens', category:'Definition', front:'Rules for a valid C identifier?', back:'Starts with a letter or underscore; no digits first, no keywords, no spaces. "int" is forbidden — it is a keyword.' },
{ id:'pfc19', course:'pps', unit:3, topic:'c3-data-types', category:'Exam Trap', front:'What is 7/2 and (float)7/2 in C?', back:'7/2 = 3 (integer division truncates); (float)7/2 = 3.5 (the cast forces floating-point division).' },
{ id:'pfc20', course:'pps', unit:3, topic:'c3-operators', category:'Memory Trick', front:'Precedence chain, highest → lowest?', back:'() → unary (++ -- !) → * / % → + − → relational → && → || → ?: → assignment.' },
{ id:'pfc21', course:'pps', unit:3, topic:'c3-operators', category:'Exam Trap', front:'What does if (a = 5) do?', back:'It ASSIGNS 5 to a (always true) — == is comparison, = is assignment.' },
{ id:'pfc22', course:'pps', unit:3, topic:'c3-decisions', category:'Exam Trap', front:'What is switch fall-through?', back:'Omitting break after a case lets execution continue into the next case regardless of its label.' },
{ id:'pfc23', course:'pps', unit:3, topic:'c3-loops', category:'Difference', front:'while vs do-while?', back:'while: entry-controlled, body may run zero times. do-while: exit-controlled, body always runs at least once.' },
{ id:'pfc24', course:'pps', unit:3, topic:'c3-arrays', category:'Exam Trap', front:'Valid indices of int arr[5]?', back:'0 through 4 — arr[5] is out of bounds, and C does not catch it (undefined behaviour).' },
{ id:'pfc25', course:'pps', unit:3, topic:'c3-strings', category:'Definition', front:'How do strings end in C?', back:'With the null character \\0; strlen("Hello") = 5 because \\0 is not counted.' },
{ id:'pfc26', course:'pps', unit:3, topic:'c3-strings', category:'Syntax', front:'strcmp("cat","cat") returns?', back:'0 — strings are equal (non-zero means different).' },
{ id:'pfc27', course:'pps', unit:3, topic:'c3-search-sort', category:'Formula', front:'Complexities: linear, binary, bubble?', back:'Linear search O(n); binary search O(log n) — needs sorted input; bubble sort O(n²).' },

/* -------- Unit IV -------- */
{ id:'pfc28', course:'pps', unit:4, topic:'c4-functions', category:'Difference', front:'Call by value vs call by reference?', back:'Value: a copy is passed, caller\'s variables unchanged. Reference: the address is passed (pointers, &var), so the function can modify the original.' },
{ id:'pfc29', course:'pps', unit:4, topic:'c4-io', category:'Exam Trap', front:'Why does scanf need & for int but not for arrays?', back:'scanf needs an address; an array name already decays to the address of its first element.' },
{ id:'pfc30', course:'pps', unit:4, topic:'c4-preprocessor', category:'Exam Trap', front:'Two deadly sins of #define?', back:'A semicolon at the end of the line (becomes part of the substituted text) and expecting type-checking — macros are pure text substitution.' },
{ id:'pfc31', course:'pps', unit:4, topic:'c4-storage-classes', category:'Definition', front:'Which storage class persists across function calls?', back:'static — initialized only once; its value survives between calls (auto locals reset every call).' },
{ id:'pfc32', course:'pps', unit:4, topic:'c4-recursion', category:'Definition', front:'What stops recursion?', back:'The base case — without it, infinite recursion overflows the stack.' },
{ id:'pfc33', course:'pps', unit:4, topic:'c4-structures', category:'Difference', front:'struct vs union size?', back:'struct: sum of members (+ padding). union: size of the LARGEST member — all share one memory block; struct{int,float}=8B, union=4B.' },
{ id:'pfc34', course:'pps', unit:4, topic:'c4-pointers', category:'Definition', front:'Meaning of *p and &p?', back:'*p = the value AT the address p holds (dereference); &p = the address of p itself (pointer-to-pointer). Confusing them is the classic error.' },
{ id:'pfc35', course:'pps', unit:4, topic:'c4-pointers', category:'Concept', front:'What marks the end of a singly linked list?', back:'NULL — the last node\'s pointer field; traversal loops rely on it. Linked lists: dynamic size, scattered memory, sequential access.' },
{ id:'pfc36', course:'pps', unit:4, topic:'c4-files', category:'Syntax', front:'fopen modes "r", "w", "a"?', back:'"r" read; "w" write (erases/creates); "a" append. Always check fopen\'s return against NULL and fclose() when done.' },
{ id:'pfc37', course:'pps', unit:4, topic:'c4-dynamic-memory', category:'Difference', front:'malloc vs calloc?', back:'malloc(size): 1 argument, garbage-initialized. calloc(n,size): 2 arguments, zero-initialized. Both need free() to avoid leaks; realloc resizes.' },
{ id:'pfc38', course:'pps', unit:4, topic:'c4-complexity', category:'Formula', front:'Big-O ladder, fastest to slowest?', back:'O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ).' }
];
