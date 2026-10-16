# Slide Review and Improvement Suggestions

Source: [original deck](https://docs.google.com/presentation/d/10jaMm8s-_tPpA5ALKdsAW674cofOVfaz/edit), 28 slides, counting the cover as slide 2. This review uses the complete text, original PPTX structure, and local renders of every slide. Layout observations refer to those local renders; fonts and line breaks may differ slightly in Google Slides.

The scope fits a JavaScript discussion session. The average and highest-score exercises usefully connect callbacks with destructuring. Prioritize conceptual accuracy and execution results, then improve code presentation and the exercise sequence.

## Priority corrections

| Slide | Original issue | Suggested correction and reason |
| --- | --- | --- |
| 4 | Calling `var`, `let`, and `const` variable “types” can be confused with data types. “const: can't change value” is too broad | Rename the slide `Variable declarations and scope`. Compare scope, reassignment, and access before declaration. Explain that `const` prevents reassignment but allows changes to object properties and array contents |
| 4 | Saying that anything outside a function is global ignores module environments | Limit the statement to the usual top-level behavior in ordinary browser scripts. Note the module boundaries in ES modules and Node files |
| 6 | The reassignment error is annotated beside `console.log(PI)` | Put the error annotation on `PI = 22 / 7`. That assignment throws, so the subsequent log does not execute |
| 7 | The three question marks may suggest that all three logs produce output | State that the first `console.log(i)` interrupts execution. To compare all three accesses, run them separately or catch each error separately |
| 8 | “Move declaration to beginning” can imply that source code is literally moved | Explain binding creation, initialization, and assignment in a simplified execution sequence. Compare `var`'s initial `undefined` with the TDZ for `let` and `const`. Use lowercase `var` and straight quotation marks in code |
| 10 | The later comments still say `// 3`, `// 150`, and `// 150` | Reading `discounted` at the top already throws `ReferenceError` because of the TDZ. Nothing later executes. Even if that first log is removed, the three loop variables are outside their scopes at the later logs. Split TDZ and block scope into two short examples |
| 11–12 | “Functions are hoisted / Function expressions are not hoisted” lacks precision | Distinguish a function declaration from a variable holding a function value. The `var expression` binding initially holds `undefined`; the function value arrives at assignment. Add a `const` expression example to show the different error type on early access |
| 12 | The first line throws, so `catName('Chloe') // works` does not actually run in this snippet | Run the examples separately. Explain that the function declaration permits early calls while acknowledging that this particular execution never reaches that call |
| 13 | “All functions are object methods” is incorrect | Explain that functions are callable objects that can be passed as values, and functions stored as object properties can be used as methods. Distinguish standalone functions from object methods |
| 13 | The example uses curly quotation marks, and “Parameters are optional” needs context | Use straight quotes in code. A function may declare no parameters, and a call may omit arguments. An ordinary missing parameter becomes `undefined`, but that does not mean every function remains useful without its expected arguments |
| 15–16 | The return values of the two array methods are not compared explicitly | Show that `forEach` returns `undefined` and ignores callback return values. Explain that a `reduce` callback must return the next accumulator. Show the initial value and each accumulation step |
| 18 | The second solution uses `Var total` | JavaScript is case-sensitive. Use lowercase `var`, or `const total` when reassignment is unnecessary. `Var total` causes a syntax error here |
| 19 | The second example uses `Let [a, b, ...rest]` | Use lowercase `let`. If both examples share a scope, the earlier `var a, b, rest` also conflicts with the later `let` declaration. Present them as independent examples or keep only one |
| 22–23 | The `fullName` output comment omits `Fullname is ` | The actual output is `Fullname is Peter Anteater`. Correct the comment or change the function to return only the name |
| 23 | Property defaults are shown without a default for the entire argument | Add `function studentID({ id = 11111111 } = {})`. Compare `{}`, an omitted argument, `{id:null}`, and `null` |
| 24–25 | The sentence requested in the exercise differs from the solution's `title + ', published by ' + publisher` | Align the prompt and solution. Have the function return `${title} was published by ${publisher}.`, print it with an external `console.log`, and state the exact expected output |
| 26–28 | Empty-data and tie behavior are unspecified | Define an empty array as returning `null` and ties as selecting the first student. Add negative scores to explain why initializing the maximum to `0` can be incorrect |

Reference documentation: [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [let and TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions), [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), and [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Teaching structure and practice

1. **Replace the slide 3 agenda with observable learning goals.** Students should be able to predict scope and TDZ behavior, write a function that receives a callback, use `forEach` and `reduce`, and destructure objects in function parameters.
2. **Use a prediction, execution, explanation, and revision sequence.** For example, predict the final `i` in a `var` loop, run it, change only `var` to `let`, and explain the difference. Change one concept at a time.
3. **Introduce hoisting with short examples.** The discount functions on slides 9–10 combine arrays, loops, rounding, scope, and initialization. Start with three lines such as `console.log(x); var x = 1;`, compare with `let`, then return to the discount exercise.
4. **Explain arrow functions before the array methods.** Compare `x => x * 2` with `x => { return x * 2; }`. Explain the need for explicit `return` with a block body. Ordinary functions and arrow functions differ in their handling of `this`, so do not replace object methods mechanically.
5. **Provide separate, copyable starter files.** Each prompt should state inputs, exact outputs, empty-data behavior, and tie rules. Keep solutions separate so students can attempt the task first. Pastebin can remain an additional access option.
6. **Add a related combined exercise.** Reuse the student dataset to calculate the count, average, and highest-scoring student, composing the earlier functions. Keep the practice aligned with the three original slide exercises.
7. **Check common misunderstandings.** Include empty arrays for averages, `null` and `undefined` for defaults, and ties and negative scores for the maximum. These cases reveal whether students understand the rules.

A useful teaching order is variable declarations and scope, TDZ and function declarations, functions as values and arrow syntax, `forEach` and `reduce`, then array and object destructuring. Finish with the highest-score or score-summary task. The existing scope does not require adding Promises or a framework.

## Code presentation and layout

- **Slides 5–12 and 18–22: improve code readability.** The local renders show dark text against black code backgrounds, with small text in longer functions. Use a readable monospace font, increase contrast, and keep only the lines needed for the current explanation.
- **Slides 22–23: fix bottom spacing.** The last code or output line is close to or beyond the bottom edge in the local renders. Separate the two functions or move complete code into the accompanying files and show only the relevant part on the slide.
- **Slides 26–28: remove overlap.** The right-hand code region obscures the end of the title in the local renders. On slide 26 it also covers part of the prompt. Give the title its own space and put the prompt and code below it, or use separate full slides for the prompt and solution.
- **Use more specific titles.** The repeated `Object and Array Destructuring` title can become `Array rest`, `Default values`, `Renaming object properties`, and `Destructured parameters`, according to each slide's subject.
- **Annotate execution behavior.** Mark the exact line producing `undefined` or `ReferenceError` and identify code that is never reached. Supplement syntax colors with text labels. For `reduce`, use a small table showing the accumulator, current value, and returned value.
- **Keep code consistent and copyable.** Use lowercase keywords, straight quotes, and consistent indentation. The slide, starter file, and solution should all use the same code version.

Fix correctness on slides 4, 10, 12, 13, 18, and 19 first. Then address spacing and overlap on slides 22–28, followed by shorter examples and additional practice questions.
