/* ============================================================
   PROGRAMMING FOR PROBLEM SOLVING (C) — TOPICS  (25ESC-CSE101H)
   Source: content/02-Programming-for-Problem-Solving.md
   ============================================================ */

const PPS_UNIT1_TOPICS = [
{
  id: 'c1-functional-units', course: 'pps', unit: 1, category: 'Computer Fundamentals',
  title: 'Functional Units of a Computer',
  summary: 'Input, CPU (CU + ALU), Memory, Output — the five-block machine.',
  overview: `A computer is a system of five interacting functional units: Input, CPU (Control Unit + ALU), Memory, and Output. Data flows in, is processed and temporarily stored, and results flow out.`,
  working: `The Input unit converts raw data into machine-readable form and passes it to memory. The Control Unit fetches instructions from memory, decodes them, and directs the ALU and other units (fetch-decode-execute cycle). The ALU performs arithmetic (add, subtract, multiply, divide) and logical (AND, OR, NOT, comparisons) operations. Memory holds both the program and the data it operates on. The Output unit converts processed results back into human-readable form.
Block diagram: Input → Memory ↔ CPU (Control Unit ↔ ALU) → Output, with Memory bidirectionally connected to the CPU.`,
  formulas: null,
  examTip: `"Draw and explain the block diagram of a computer" is a guaranteed 5-mark Unit I question — practice drawing the five-block diagram with arrows in under a minute.`,
  commonMistake: `Merging Control Unit and ALU into one box, or forgetting to show Memory as a separate, bidirectionally-connected block.`,
  quickCheck: [{ q: 'Which unit actually performs arithmetic?', a: 'The ALU (Arithmetic Logic Unit), inside the CPU.' }]
},
{
  id: 'c1-classification', course: 'pps', unit: 1, category: 'Computer Fundamentals',
  title: 'Data vs Information; Classification & Characteristics of Computers',
  summary: 'Raw facts vs processed meaning; machine types and their traits.',
  overview: `Data is raw, unprocessed facts (numbers, characters); information is data that has been processed into a meaningful, useful form. Computers are classified by purpose and by size/power, and characterized by speed, accuracy, diligence, versatility, storage and automation.`,
  working: `Classification: by purpose — General purpose (versatile, many tasks) vs Special purpose (built for one task, e.g. ATM controller); by size/power — Supercomputer, Mainframe, Minicomputer (Server), Microcomputer (PC/laptop).
Characteristics: Speed, Accuracy, Diligence (no fatigue), Versatility, Storage capacity, Automation. Advantages: speed, accuracy, reduced manual labour. Limitations: no intelligence/judgement of its own — "Garbage In, Garbage Out".
Example: raw marks (75, 82, 91) = data; "Average = 82.6%" = information.`,
  formulas: null,
  examTip: `Examiners like "Differentiate data and information with an example" — always give a concrete example such as raw marks vs the computed average.`,
  commonMistake: `Saying a computer is "intelligent" — it only executes instructions exactly as given; it has no judgement of its own.`,
  quickCheck: [{ q: 'Give one example each of a special-purpose and general-purpose computer.', a: 'Special-purpose — ATM/washing-machine controller; General-purpose — a laptop/PC.' }]
},
{
  id: 'c1-memory', course: 'pps', unit: 1, category: 'Computer Fundamentals',
  title: 'CPU, Memory Hierarchy and Units',
  summary: 'Registers → cache → RAM/ROM → secondary storage; 1024-based conversions.',
  overview: `The CPU is the "brain" — Control Unit (directs operations) plus ALU (computes). Memory stores instructions and data, organized in a hierarchy by speed, cost and size.`,
  working: `Memory hierarchy (fastest/most expensive/smallest → slowest/cheapest/largest): Registers → Cache → Primary memory (RAM, ROM) → Secondary memory (HDD, SSD, optical, USB).
Primary memory is directly accessible by the CPU and volatile (RAM loses data on power-off; ROM is non-volatile read-only firmware). Secondary memory is non-volatile, cheaper per byte, slower, accessed indirectly through the OS.
Units: Bit → Nibble (4 bits) → Byte (8 bits) → KB (2¹⁰ B) → MB (2²⁰ B) → GB (2³⁰ B) → TB (2⁴⁰ B) — use powers of 2 (1024).
Worked example: 5 MB = 5 × 1024 = 5120 KB; 2048 KB = 2 MB.`,
  formulas: [{ formula: '1 KB = 2¹⁰ B = 1024 B', meaning: 'Memory unit ladder', variables: 'bit → nibble (4b) → byte (8b) → KB → MB → GB → TB, each ×1024', units: 'bytes', condition: 'strict computing sense — not decimal 1000' }],
  examTip: `Memory-hierarchy diagrams and unit-conversion numericals are easy, guaranteed marks — practice 3–4 conversions.`,
  commonMistake: `Using 1000 instead of 1024 as the conversion factor between memory units.`,
  quickCheck: [{ q: 'Which is faster — cache or RAM?', a: 'Cache (it sits closer to the CPU in the hierarchy).' }]
},
{
  id: 'c1-software', course: 'pps', unit: 1, category: 'Computer Fundamentals',
  title: 'Computer Software and Operating Systems',
  summary: 'System software runs the computer; application software runs on it.',
  overview: `Software is the set of programs/instructions that make hardware perform useful tasks: system software (manages hardware, provides a platform) vs application software (performs specific user tasks).`,
  working: `System software: Operating System, device drivers, compilers/interpreters/assemblers. Application software: MS Word, browsers, games.
Operating system role: interface between user and hardware; manages the processor (scheduling), memory (allocation), files (storage/organization) and I/O devices. Examples: Windows, Linux, Android.
One-line differentiator: "System software runs the computer; application software runs on the computer, for the user."`,
  formulas: null,
  examTip: `Classification questions hinge on edge cases — a compiler is SYSTEM software (supports program development, not an end-user task), and an antivirus is usually classed as system software too.`,
  commonMistake: `Classifying a compiler as application software.`,
  quickCheck: [{ q: 'Is an antivirus system software or application software?', a: 'System software (it works closely with the OS to protect the system).' }]
},
{
  id: 'c1-number-systems', course: 'pps', unit: 1, category: 'Number Systems',
  title: 'Number Systems and Binary Arithmetic',
  summary: 'Binary, octal, decimal, hex; conversions and 2\'s-complement arithmetic.',
  overview: `A number system defines the base (radix) and digit symbols used to represent quantities. Computers use Binary (base 2) internally; Decimal (base 10) is human-facing; Octal (base 8) and Hexadecimal (base 16, digits 0–9, A–F) are compact shorthand for binary.`,
  working: `Conversions: Decimal → Binary: repeated division by 2, collect remainders bottom-to-top. Binary → Decimal: positional powers of 2. Decimal → Octal/Hex: repeated division by 8 or 16. Binary ↔ Octal: group bits in 3s; Binary ↔ Hex: group in 4s (from the right, pad with zeros).
Binary arithmetic: addition (1+1=10 carry 1), subtraction via 1's/2's complement, multiplication (shift-and-add), division.
Worked example: 25₁₀ = 11001₂ (16+8+1); 11001₂ → group in 4s → 0001 1001 → 19₁₆.`,
  formulas: [{ formula: '25₁₀ = 11001₂ = 31₈ = 19₁₆', meaning: 'Same value across four bases', variables: 'positional weights: …2³ 2² 2¹ 2⁰', units: '—', condition: 'group 3 bits per octal digit, 4 bits per hex digit' }],
  examTip: `Number-system conversions are the single most numerically "safe" topic in Unit I — practice at least 10 conversions across all four bases and one 2's-complement subtraction.`,
  commonMistake: `Forgetting to pad binary groups with leading zeros before grouping into octal (3-bit) or hex (4-bit) sets, which shifts every digit.`,
  quickCheck: [{ q: 'How many bits represent one hex digit?', a: '4 bits (a "nibble").' }]
},
{
  id: 'c1-codes', course: 'pps', unit: 1, category: 'Number Systems',
  title: 'ASCII, BCD, EBCDIC, Excess-3 and Gray Codes',
  summary: 'How characters and decimal digits are encoded in binary.',
  overview: `Beyond plain binary numbers, computers encode characters and decimal digits using standard codes: ASCII, BCD, EBCDIC, Excess-3 and Gray code.`,
  working: `ASCII: 7/8-bit character encoding (e.g. 'A' = 65). BCD: each decimal digit encoded in 4 bits (e.g. 9 = 1001). EBCDIC: 8-bit IBM character code. Excess-3: BCD + 3, self-complementing. Gray code: only one bit changes between successive values — used to avoid glitches in digital circuits.`,
  formulas: null,
  examTip: `Short-answer favourite: "What is special about Gray code?" — exactly one bit changes between any two consecutive values.`,
  commonMistake: `Confusing BCD (4 bits per DECIMAL DIGIT) with straight binary of the whole number — 25 in BCD is 0010 0101, not 11001.`,
  quickCheck: [{ q: 'What is special about Gray code?', a: 'Only one bit changes between any two consecutive values.' }]
}
];

const PPS_UNIT2_TOPICS = [
{
  id: 'c2-problem-steps', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Steps for Solving Logical and Numerical Problems',
  summary: 'Understand → inputs/outputs → design → code → test → document.',
  overview: `Before writing any code, a problem must be analyzed systematically: (1) Understand the problem, (2) Identify inputs/outputs, (3) Design a solution (algorithm/flowchart/pseudocode), (4) Code it, (5) Test and debug, (6) Document/maintain.`,
  working: `Logical problems focus on decision sequences (e.g. "find the largest of three numbers" — comparison logic); numerical problems focus on computation (e.g. "compute compound interest" — formula-driven).`,
  formulas: null,
  examTip: `When asked to "write an algorithm/flowchart/pseudocode", always state the assumed inputs and expected output explicitly as Step 1 — examiners award marks for this clarity.`,
  commonMistake: `Jumping straight to code/pseudocode without first identifying the problem's inputs and expected outputs.`,
  quickCheck: [{ q: 'What is the very first step in problem-solving?', a: 'Understanding the problem — precisely identifying what is given and what is required.' }]
},
{
  id: 'c2-algorithms', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Algorithms: Definition and Characteristics',
  summary: 'A finite, unambiguous, ordered procedure — with five defining traits.',
  overview: `An algorithm is a finite, well-defined, ordered sequence of steps that solves a problem in finite time.`,
  working: `Characteristics: Finiteness (must terminate), Definiteness (each step unambiguous), Input (zero or more), Output (at least one), Effectiveness (each step basic enough to carry out).
Worked example — largest of three numbers:
Step 1: Start. Step 2: Read A, B, C. Step 3: If A > B and A > C then Largest = A. Step 4: Else if B > C then Largest = B. Step 5: Else Largest = C. Step 6: Print Largest. Step 7: Stop.`,
  formulas: null,
  examTip: `Always number your steps and include explicit Start/Stop — examiners specifically check for these formalities in algorithm-writing questions.`,
  commonMistake: `Writing an "algorithm" that's really just a paragraph describing the logic — it must be a numbered, step-wise procedure.`,
  quickCheck: [{ q: 'Name the five characteristics of a good algorithm.', a: 'Finiteness, Definiteness, Input, Output, Effectiveness.' }]
},
{
  id: 'c2-flowcharts', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Flowcharts and Their Symbols',
  summary: 'Ovals, parallelograms, rectangles, diamonds, arrows — drawn to standard.',
  overview: `A flowchart is the graphical/pictorial representation of an algorithm using standardized symbols connected by flow-lines.`,
  working: `Symbols: Oval (Start/Stop/Terminal), Parallelogram (Input/Output), Rectangle (Process), Diamond (Decision), Arrow (Flow direction), Circle (Connector across pages).
Worked example (largest of three): Start(oval) → Read A,B,C(parallelogram) → A>B?(diamond, Yes/No branches) → further decision/process boxes → Print Largest(parallelogram) → Stop(oval), all connected by directional arrows.`,
  formulas: null,
  examTip: `Learn the 5 standard symbols and their exact shapes cold — flowchart questions are marked partly on correct symbol usage, not just correct logic.`,
  commonMistake: `Using a rectangle for a decision instead of a diamond, or omitting arrowheads on flow-lines.`,
  quickCheck: [{ q: 'Which symbol represents a decision point?', a: 'The diamond (rhombus).' }]
},
{
  id: 'c2-pseudocode', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Pseudocode',
  summary: 'Language-neutral logic written with IF/WHILE/FOR keywords.',
  overview: `Pseudocode is a plain-English, structured way of writing an algorithm's logic using programming-like keywords (IF, WHILE, FOR, READ, WRITE) without worrying about a specific language's syntax.`,
  working: `Example:
BEGIN
  READ a, b, c
  IF a > b AND a > c THEN largest = a
  ELSE IF b > c THEN largest = b
  ELSE largest = c
  ENDIF
  WRITE largest
END`,
  formulas: null,
  examTip: `If the examiner says "pseudocode", use IF/WHILE/FOR keywords; if they say "algorithm", use numbered plain-English steps. Knowing both formats for 4–5 standard problems (largest of 3, factorial, sum of digits, Fibonacci, prime check) covers most of Unit II.`,
  commonMistake: `Mixing actual C syntax (semicolons, curly braces) into pseudocode — it should stay language-neutral.`,
  quickCheck: [{ q: 'Is pseudocode compiled or executed by a computer?', a: 'No — it is only a design/planning tool for humans.' }]
},
{
  id: 'c2-translators', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Programming Languages and Translators',
  summary: 'Compiler vs interpreter vs assembler — one pass, line-by-line, mnemonics.',
  overview: `A programming language is a formal notation for expressing algorithms so a computer can execute them: Low-level (Machine language — pure binary; Assembly — mnemonics like MOV, ADD) and High-level (C, Python, Java — portable, human-oriented).`,
  working: `Translators: Compiler converts the entire high-level source program into machine code in one pass, producing an executable (fast execution; errors reported after full compilation) — e.g. a C compiler. Interpreter translates and executes line-by-line, no standalone executable (slower; errors caught immediately per line) — e.g. Python. Assembler converts assembly mnemonics into machine code.`,
  formulas: null,
  examTip: `"Differentiate compiler and interpreter" is a classic 5-mark question — answer as a comparison table: Speed, Error detection, Output file, Example language.`,
  commonMistake: `Saying C is "interpreted" — C is a compiled language.`,
  quickCheck: [{ q: 'Which translator works line-by-line?', a: 'An Interpreter.' }]
},
{
  id: 'c2-compilation', course: 'pps', unit: 2, category: 'Problem Solving',
  title: 'Compilation Process and C Program Lifecycle',
  summary: 'Preprocess → compile → assemble → link; syntax vs logical errors.',
  overview: `Converting C source code into a running program passes through four stages: Preprocessing → Compilation → Assembly → Linking. Errors caught at compile-time are syntax errors; wrong output despite successful compilation indicates logical errors.`,
  working: `(1) Preprocessor expands #include, #define and macros → expanded source. (2) Compiler translates to assembly. (3) Assembler converts assembly to object code (.obj/.o) — syntax errors surface at this stage. (4) Linker combines object code with library code (like printf) to produce the executable (.exe).
Logical error example: using + instead of * — compiles fine, wrong answer.
Pipeline: .c → [Preprocessor] → expanded source → [Compiler] → .asm → [Assembler] → .obj → [Linker] + libraries → .exe`,
  formulas: null,
  examTip: `Draw this exact 4-stage pipeline with the correct file extensions at each arrow — a very common 5-mark diagram question.`,
  commonMistake: `Believing the compiler alone produces the final executable — linking (adding library code) is a separate, necessary final stage.`,
  quickCheck: [{ q: 'At which stage is a missing semicolon caught, and at which stage does printf\'s code get attached?', a: 'Missing semicolon: compilation (syntax error). printf\'s code: linking.' }]
}
];

const PPS_UNIT3_TOPICS = [
{
  id: 'c3-c-intro', course: 'pps', unit: 3, category: 'C Fundamentals',
  title: 'History of C, Character Set, Escape Sequences, Format Specifiers',
  summary: 'Dennis Ritchie, 1972, Bell Labs — plus the everyday C alphabet.',
  overview: `C, developed by Dennis Ritchie in 1972 at Bell Labs, is a structured, procedural, middle-level language — powerful like assembly, yet portable like a high-level language.`,
  working: `Character set: letters (A–Z, a–z), digits (0–9), special symbols (+ − * / = ; , . ( ) { } …), whitespace (space, tab \\t, newline \\n).
Escape sequences: \\n newline, \\t tab, \\\\ backslash, \\' single quote, \\" double quote, \\0 null character (marks the end of a string).
Format specifiers: %d int, %f float, %c char, %s string, %lf double, %x hexadecimal.`,
  formulas: null,
  examTip: `Short-answer favourites: "List any 5 keywords in C" or "Give the escape sequence for newline" — free marks if memorized.`,
  commonMistake: `Using a C keyword (like int, for) as a variable name — a compile-time error.`,
  quickCheck: [{ q: 'What is \\0 called and what does it mark?', a: 'The null character — it marks the end of a string in C.' }]
},
{
  id: 'c3-tokens', course: 'pps', unit: 3, category: 'C Fundamentals',
  title: 'Tokens, Keywords, Identifiers, Constants and Header Files',
  summary: 'The six smallest individual units of a C program.',
  overview: `Tokens are the smallest individual units of a C program: keywords, identifiers, constants, variables, special symbols and operators.`,
  working: `Keywords: reserved words (int, if, for, while, return, …) that cannot be used as identifiers. Identifiers: names for variables/functions — must start with a letter or underscore. Constants: fixed values. Variables: named, changeable storage. Special symbols and operators complete the set.
Header files (#include <stdio.h> etc.) supply library function declarations like printf and scanf.`,
  formulas: null,
  examTip: `Identifier rules are frequently tested: valid identifiers start with a letter or underscore, never with a digit, and cannot be keywords.`,
  commonMistake: `Naming a variable with a leading digit (2sum) or a keyword (float) — both are compile-time errors.`,
  quickCheck: [{ q: 'Can an identifier start with an underscore?', a: 'Yes — letters and underscores are both legal first characters; digits are not.' }]
},
{
  id: 'c3-data-types', course: 'pps', unit: 3, category: 'C Fundamentals',
  title: 'Data Types and Type Casting',
  summary: 'int/float/double/char/void — plus implicit and explicit conversion.',
  overview: `C's basic data types are int (whole numbers), float (single-precision decimal), double (double-precision decimal), char (single character stored as an integer ASCII code) and void (no value). Qualifiers short, long, signed, unsigned modify range.`,
  working: `Type casting: Implicit (automatic conversion, e.g. int to float in mixed expressions) vs Explicit (programmer forces it with (type)value, e.g. (int)3.9 → 3, truncating).
Worked example: int a = 7, b = 2; float c = (float)a / b; → c = 3.5 (the cast forces floating-point division; without it, a/b performs integer division giving 3).`,
  formulas: null,
  examTip: `A guaranteed "predict the output" question involves integer division truncation — always check whether both operands of / are integers before assuming a decimal result.`,
  commonMistake: `Expecting 7/2 to give 3.5 — without casting, C truncates to 3.`,
  quickCheck: [{ q: 'What does (int)9.8 evaluate to?', a: '9 (truncation, not rounding).' }]
},
{
  id: 'c3-operators', course: 'pps', unit: 3, category: 'C Fundamentals',
  title: 'Operators, Expressions, Precedence and Associativity',
  summary: 'Arithmetic to ternary — evaluation order decides everything.',
  overview: `C provides Arithmetic (+ − * / %), Relational (> < >= <= == !=), Logical (&& || !), Assignment (= += -= *= /=), Increment/Decrement (++ --), Bitwise (& | ^ ~ << >>), Conditional/Ternary (?:) and Comma operators.`,
  working: `Precedence & associativity determine evaluation order: * / % bind tighter than + −; most binary operators associate left-to-right, but assignment and unary operators associate right-to-left.
Worked example: int x = 5; printf("%d %d", x++, ++x); — post-increment uses 5 then increments; pre-increment increments to 7 first. (Exact argument evaluation order is compiler-dependent — a known "gotcha".)
Precedence order to memorize: () → unary (++ -- !) → * / % → + − → relational → && → || → ?: → assignment.`,
  formulas: null,
  examTip: `A precedence table is a printable exam favourite — memorize the chain () → unary → * / % → + − → relational → && → || → ?: → assignment.`,
  commonMistake: `Confusing = (assignment) with == (equality) inside an if condition — if (a = 5) is valid C but always evaluates true.`,
  quickCheck: [{ q: 'What does % compute?', a: 'The remainder of integer division (modulus) — undefined for floats.' }]
},
{
  id: 'c3-decisions', course: 'pps', unit: 3, category: 'Control Flow',
  title: 'Decision-Making Statements and the Quadratic-Equation Problem',
  summary: 'if / if-else / ladder / switch — plus the syllabus\'s quadratic example.',
  overview: `Conditional statements alter control flow based on a condition: if, if-else, else-if ladder, switch-case (multi-way branch on a single variable's value) and the ternary operator. Unconditional: goto (discouraged but in the syllabus), break, continue.`,
  working: `Roots of ax² + bx + c = 0:
float d = b*b - 4*a*c;
if (d > 0)          printf("Two real distinct roots");
else if (d == 0)    printf("Two real equal roots");
else                printf("Complex roots");
In switch, omitting break after a case causes "fall-through" into the next case.`,
  formulas: [{ formula: 'd = b² − 4ac', meaning: 'Discriminant of a quadratic', variables: 'd decides root type: d>0 real distinct, d=0 real equal, d<0 complex', units: '—', condition: 'needs #include <math.h> for sqrt()' }],
  examTip: `"Write a C program to find roots of a quadratic equation" is explicitly named in the syllabus lab list — practice this exact program; it tests if-else-if, sqrt() and float formatting together.`,
  commonMistake: `Forgetting #include <math.h> (and -lm on some compilers) when using sqrt(), causing a compile/link error.`,
  quickCheck: [{ q: 'In switch, what happens if break is omitted after a case?', a: 'Fall-through — execution continues into the next case regardless of its label.' }]
},
{
  id: 'c3-loops', course: 'pps', unit: 3, category: 'Control Flow',
  title: 'Loops: for, while, do-while',
  summary: 'Entry-controlled vs exit-controlled repetition.',
  overview: `Loops repeat a block of statements. for (best when the iteration count is known — init, condition and update in one line), while (entry-controlled — condition checked before each iteration; body may run zero times), do-while (exit-controlled — condition checked after; body always runs at least once).`,
  working: `Sum of first N natural numbers:
int n, i, sum = 0;
scanf("%d", &n);
for (i = 1; i <= n; i++) sum += i;
printf("%d", sum);
Dry-run tip: maintain a small table of variable values per iteration when tracing loops on paper.`,
  formulas: null,
  examTip: `Loop "dry run" / trace-the-output questions are extremely common — always build the per-iteration variable table.`,
  commonMistake: `An off-by-one error in the loop condition (i<n vs i<=n), running the loop one time too few or too many.`,
  quickCheck: [{ q: 'Which loop guarantees at least one execution of its body?', a: 'do-while.' }]
},
{
  id: 'c3-arrays', course: 'pps', unit: 3, category: 'Arrays & Strings',
  title: 'One-Dimensional and Multidimensional Arrays',
  summary: 'Fixed-size, same-type, 0-indexed — in 1D and matrix form.',
  overview: `An array is a fixed-size, contiguous collection of elements of the same data type, accessed by index (0-based in C).`,
  working: `1-D array: int arr[5]; — indices 0 to 4. 2-D array (matrix): int mat[3][3]; — accessed mat[row][col].
Matrix addition:
for (i = 0; i < 3; i++)
  for (j = 0; j < 3; j++)
    c[i][j] = a[i][j] + b[i][j];
Matrix multiplication needs a third inner loop over the common dimension with an accumulator; transpose swaps [i][j] with [j][i].`,
  formulas: null,
  examTip: `Matrix problems (addition, transpose, multiplication) are staple lab-exam questions — memorize the nested-loop pattern for each.`,
  commonMistake: `Accessing arr[5] on int arr[5] (valid indices 0–4) — an out-of-bounds access C does not catch, causing undefined behaviour.`,
  quickCheck: [{ q: 'What is the index of the first element of any C array?', a: '0.' }]
},
{
  id: 'c3-strings', course: 'pps', unit: 3, category: 'Arrays & Strings',
  title: 'Strings and String Functions',
  summary: 'char arrays ending in \\0, plus the string.h toolbox.',
  overview: `A string in C is a char array terminated by the null character \\0. String literals like "Hello" are automatically null-terminated arrays of char.`,
  working: `Standard functions (#include <string.h>): strlen() (length excluding \\0), strcpy() (copy), strcat() (concatenate), strcmp() (compare — returns 0 if equal), strrev() (reverse, non-standard), strupr()/strlwr().
Worked example: char s[20] = "Hello"; printf("%d", strlen(s)); prints 5 (the \\0 is not counted).
Palindrome check: compare characters from both ends moving inward.`,
  formulas: null,
  examTip: `"Write a program to check if a string is a palindrome" combines strings + loops and is a very common lab question.`,
  commonMistake: `Sizing the array without room for the terminator — char s[5] cannot safely hold a 5-letter word plus \\0; it needs s[6].`,
  quickCheck: [{ q: 'What does strcmp("cat","cat") return?', a: '0 (the strings are equal).' }]
},
{
  id: 'c3-search-sort', course: 'pps', unit: 3, category: 'Algorithms in C',
  title: 'Linear Search, Binary Search and Bubble Sort',
  summary: 'O(n) scan, O(log n) halving, O(n²) bubbling.',
  overview: `Linear Search checks each element sequentially — works on any array, O(n). Binary Search repeatedly halves the search space by comparing the target to the middle element — requires a sorted array, O(log n). Bubble Sort repeatedly compares adjacent elements and swaps if out of order, bubbling the largest element to the end each pass — O(n²).`,
  working: `Bubble sort pass logic:
for (i = 0; i < n-1; i++)
  for (j = 0; j < n-i-1; j++)
    if (arr[j] > arr[j+1]) { temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; }
Be ready to hand-trace one full pass on a 5-element array.`,
  formulas: [{ formula: 'linear O(n) · binary O(log n) · bubble O(n²)', meaning: 'Complexities of the three syllabus algorithms', variables: 'n = number of elements', units: '—', condition: 'binary search requires a SORTED array' }],
  examTip: `Hand-trace one full bubble-sort pass on a 5-element array on paper — a frequent long-answer/lab question.`,
  commonMistake: `Applying Binary Search to an unsorted array — it silently gives wrong results because it assumes sortedness.`,
  quickCheck: [{ q: 'What is the precondition for Binary Search to work correctly?', a: 'The array must already be sorted.' }]
}
];

const PPS_UNIT4_TOPICS = [
{
  id: 'c4-functions', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Functions: Types, Call by Value and Call by Reference',
  summary: 'Reusable blocks — copies vs addresses decide side effects.',
  overview: `A function is a self-contained, reusable block of code that performs a specific task, improving modularity and reducing repetition. Types: library/built-in (printf, sqrt) vs user-defined; with/without arguments, with/without a return value.`,
  working: `Call by Value passes a COPY of the argument — changes inside the function do NOT affect the original. Call by Reference passes the ADDRESS (pointers, &variable) — changes DO affect the original.
Swap by reference:
void swap(int *a, int *b){ int t = *a; *a = *b; *b = t; }
// called as: swap(&x, &y);`,
  formulas: null,
  examTip: `"Differentiate call by value and call by reference with an example" is one of the most frequently repeated exam questions — always illustrate with a swap function for full marks.`,
  commonMistake: `Trying to swap two values using call-by-value parameters and expecting the caller's variables to change — only copies were passed.`,
  quickCheck: [{ q: 'Which method must be used if a function needs to modify the caller\'s original variable?', a: 'Call by reference (using pointers).' }]
},
{
  id: 'c4-io', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Console Input/Output Functions',
  summary: 'scanf/printf/getchar/puts — and the address-of requirement.',
  overview: `Console input: scanf() (formatted input, needs & before variable names except arrays/strings), getchar()/gets() (character/line input). Console output: printf() (formatted), putchar()/puts().`,
  working: `scanf("%d", &x) needs the & (address-of) so scanf knows WHERE to store the value. A plain array name already decays to the address of its first element, so no & is needed for strings/arrays.
Common trap: scanf("%d") immediately followed by gets()/scanf("%c") — the leftover newline gets consumed by the second call, producing unexpected blank input.`,
  formulas: null,
  examTip: `Mention the leftover-newline scanf/gets trap as a "common issue" for bonus marks in practical vivas.`,
  commonMistake: `Forgetting the & before a variable name in scanf("%d", &x) — the program misbehaves or crashes.`,
  quickCheck: [{ q: 'Why does scanf need & before an int variable but not before an array name?', a: 'scanf needs an address; an array name already decays to the address of its first element, while a plain variable name is just its value.' }]
},
{
  id: 'c4-preprocessor', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Preprocessor and Preprocessor Directives',
  summary: '#include, #define and conditional compilation — before compilation.',
  overview: `The preprocessor runs before compilation, handling directives beginning with #. #include inserts header file contents (e.g. <stdio.h>); #define creates macros (symbolic constants or macro functions, e.g. #define PI 3.14); #ifdef/#ifndef/#endif include/exclude code blocks conditionally.`,
  working: `#define is a text-substitution macro: no type-checking, no memory allocation, and NO semicolon at the end of the line. A const variable is typed and memory-allocated.
The expanded source produced by preprocessing is what the compiler actually sees.`,
  formulas: null,
  examTip: `Distinguish #define (text substitution, no type checking) from a const variable (typed, memory-allocated) — a favourite conceptual question.`,
  commonMistake: `Putting a semicolon at the end of a #define line — it becomes part of the substituted text and can silently break expressions.`,
  quickCheck: [{ q: 'Is #define processed by the compiler or the preprocessor?', a: 'The preprocessor, before actual compilation begins.' }]
},
{
  id: 'c4-storage-classes', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Storage Classes: auto, static, extern, register',
  summary: 'Scope, lifetime and default value of variables.',
  overview: `Storage classes define a variable's scope, lifetime and default value: auto (default for locals — exists only within the block), static (retains its value between function calls, initialized only once), extern (declares a variable defined elsewhere/another file), register (hint to store in a CPU register — largely ignored by modern compilers).`,
  working: `A static int count = 0; inside a function retains its incremented value across multiple calls; a plain (auto) local resets every call.
Comparison-table answer format: Scope | Lifetime | Default Value | Where declared, across all four classes.`,
  formulas: null,
  examTip: `The four-class comparison table (Scope | Lifetime | Default Value | Where declared) is a classic 5-mark answer format.`,
  commonMistake: `Assuming a static local variable resets to its initial value on every call — initialization happens only once, ever.`,
  quickCheck: [{ q: 'Which storage class variable retains its value between successive function calls?', a: 'static.' }]
},
{
  id: 'c4-recursion', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Recursion: Factorial, Fibonacci, Ackermann',
  summary: 'Functions calling themselves until a base case stops the chain.',
  overview: `Recursion is when a function calls itself to solve smaller instances of the same problem, until it reaches a base case that stops further calls.`,
  working: `Factorial: int fact(int n){ return (n <= 1) ? 1 : n * fact(n-1); }
Fibonacci: int fib(int n){ return (n <= 1) ? n : fib(n-1) + fib(n-2); }
Ackermann function: A(m,n) = n+1 if m=0; A(m-1,1) if m>0, n=0; A(m-1, A(m,n-1)) otherwise — grows extremely fast and cannot be expressed with simple loops; used to illustrate the power (and cost) of recursion.
Every recursive function needs an explicit base case and a recursive case.`,
  formulas: null,
  examTip: `Always identify and explicitly state the base case and recursive case separately — examiners specifically look for this.`,
  commonMistake: `Omitting or writing an incorrect base case, causing infinite recursion and a stack overflow.`,
  quickCheck: [{ q: 'What stops a recursive function from calling itself forever?', a: 'The base case.' }]
},
{
  id: 'c4-structures', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Structures, Unions and Self-Referential Structures',
  summary: 'Grouped members with separate memory vs shared memory.',
  overview: `A struct groups different data types under one name, each member getting its own memory (total size = sum of members, plus padding). A union also groups types under one name, but all members SHARE the same memory (size = largest member) — only one member holds a valid value at a time.`,
  working: `struct Student { char name[20]; int roll; float marks; };
struct Student s1 = {"Ravi", 1, 89.5};
printf("%s", s1.name);
Passing structures: by value (full copy) or by reference (pointer, accessed with ->).
Self-referential structure: struct Node { int data; struct Node *next; }; — the basis of linked lists.
Size example: struct with int (4B) + float (4B) = 8B; the equivalent union = 4B.`,
  formulas: null,
  examTip: `"Differentiate structure and union" (with a memory-size example) is very frequently repeated — always give the size comparison.`,
  commonMistake: `Assuming all union members can hold valid, independent values simultaneously — writing to one member overwrites the shared memory used by all others.`,
  quickCheck: [{ q: 'In a union of int and char, what is the union\'s total size?', a: 'The size of the largest member — int (typically 4 bytes).' }]
},
{
  id: 'c4-pointers', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Pointers, Generic Pointers and the Linked-List Concept',
  summary: 'Variables holding addresses — & to take, * to dereference.',
  overview: `A pointer is a variable that stores the memory address of another variable, declared as int *p; and used with & (address-of) and * (dereference/value-at-address). A generic pointer (void *) can point to any data type but must be cast before dereferencing.`,
  working: `int a = 10, *p;
p = &a;
printf("%d", *p);  // prints 10 — the value at the address p holds
Array relationship: arr is equivalent to &arr[0].
Linked list (via self-referential structures): a chain of nodes, each with data plus a pointer to the next, ending in NULL — dynamic size, scattered memory, sequential access (vs arrays: static size, contiguous memory, random access).`,
  formulas: null,
  examTip: `Pointer-arithmetic and pointer-array-relationship questions ("arr is equivalent to &arr[0]") are frequently tested — practice tracing pointer-based snippets line by line.`,
  commonMistake: `Confusing *p (dereference — "value at") with &p (address of p itself, a pointer-to-pointer).`,
  quickCheck: [{ q: 'If p = &a, what does *p represent?', a: 'The value stored in a.' }]
},
{
  id: 'c4-files', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'File Handling and Built-in File Functions',
  summary: 'FILE*, fopen modes, fprintf/fscanf — always check and close.',
  overview: `C treats files as streams accessed via a FILE * pointer, opened with fopen("filename","mode") in modes like "r" (read), "w" (write — overwrites/creates), "a" (append), and closed with fclose().`,
  working: `Built-in functions: fprintf()/fscanf() (formatted file I/O), fgetc()/fputc() (character-wise), fgets()/fputs() (line/string-wise), feof() (end-of-file detection).
Worked example:
FILE *fp = fopen("data.txt", "w");
if (fp == NULL) { /* handle failure */ }
fprintf(fp, "Hello File");
fclose(fp);`,
  formulas: null,
  examTip: `Always show fopen's return value being checked against NULL in exam code — examiners award marks for this defensive-programming habit.`,
  commonMistake: `Forgetting fclose() — data can remain unflushed and file handles leak.`,
  quickCheck: [{ q: 'Which mode opens a file for writing, erasing any existing content?', a: '"w".' }]
},
{
  id: 'c4-dynamic-memory', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Dynamic Memory Allocation: malloc, calloc, realloc, free',
  summary: 'Run-time heap allocation from <stdlib.h> — and freeing it.',
  overview: `Unlike normal variables (compile-time stack allocation), dynamic memory is allocated at run-time on the heap using library functions from <stdlib.h>.`,
  working: `malloc(size) — allocates size bytes, uninitialized (garbage). calloc(n, size) — allocates n elements of size bytes each, zero-initialized. realloc(ptr, newsize) — resizes a block, preserving existing data as far as possible. free(ptr) — releases the memory.
Worked example:
int *arr = (int*) malloc(5 * sizeof(int));
if (arr != NULL) { /* use arr[0..4] */ }
free(arr);`,
  formulas: null,
  examTip: `"Differentiate malloc() and calloc()" is a near-guaranteed question — the two key differences are (1) number of arguments (1 vs 2) and (2) initialization (garbage vs zero).`,
  commonMistake: `Forgetting to call free() on dynamically allocated memory, causing a memory leak.`,
  quickCheck: [{ q: 'Which function both allocates AND zero-initializes memory?', a: 'calloc().' }]
},
{
  id: 'c4-complexity', course: 'pps', unit: 4, category: 'Advanced C',
  title: 'Time Complexity and Space Complexity',
  summary: 'Big-O growth of running time and memory with input size.',
  overview: `Time complexity measures how an algorithm's running time grows with input size n; space complexity measures how memory usage grows. Both are usually expressed in Big-O notation, describing worst-case growth.`,
  working: `Common orders (fastest to slowest growth): O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic, O(2ⁿ) exponential.
Worked examples: a single loop 1..n → O(n); nested loops (bubble sort) → O(n²); binary search → O(log n).`,
  formulas: [{ formula: 'linear O(n) · binary O(log n) · bubble O(n²)', meaning: 'Complexities of the syllabus algorithms', variables: 'n = input size', units: '—', condition: 'worst-case Big-O' }],
  examTip: `Be ready to state the time complexity of every algorithm covered in this course — a common 1–2 mark fill-in.`,
  commonMistake: `Confusing linear search's O(n) with binary search's O(log n) — binary search only works on sorted data and halves the range each step.`,
  quickCheck: [{ q: 'What is the time complexity of bubble sort in the worst case?', a: 'O(n²).' }]
}
];
