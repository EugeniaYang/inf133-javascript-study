// Examples from the original slides, with content errors corrected.
window.STUDY_DATA = {
  "summaryHtml": "<h3>Variables and scope</h3><p>The slides compare the same discountPrices function using var and let. var is scoped to the function; let and const are block-scoped. const prevents reassignment, while object properties and array contents can still change.</p><h3>Hoisting</h3><p>The var version logs undefined before assigning discounted. The let version raises ReferenceError before initialization. The catName function declaration can be called before its definition; a function expression must be assigned before it can be called.</p><h3>Callbacks and array methods</h3><p>addTwoNumbers passes a, b, and their sum to printResults. forEach runs a callback for each item and returns undefined. reduce uses the callback return value as the next accumulator.</p><h3>Destructuring</h3><p>Arrays are unpacked by position; objects by property name. The slides show rest values, defaults, swapping a and b, and destructuring function parameters. The exercises use the book object and Peter's scores.</p>",
  "predictionsHtml": "",
  "reviewHtml": "<p>Source: <a href=\"https://docs.google.com/presentation/d/10jaMm8s-_tPpA5ALKdsAW674cofOVfaz/edit\" target=\"_blank\" rel=\"noopener noreferrer\">original deck</a>, 28 slides, counting the cover as slide 1. This review uses the complete text, original PPTX structure, and local renders of every slide. Layout observations refer to those local renders; fonts and line breaks may differ slightly in Google Slides.</p>\n<p>The scope fits a JavaScript discussion session. The average and highest-score exercises usefully connect callbacks with destructuring. Prioritize conceptual accuracy and execution results, then improve code presentation and the exercise sequence.</p>\n<h2>Priority corrections</h2>\n<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Slide</th><th scope=\"col\">Original issue</th><th scope=\"col\">Suggested correction and reason</th></tr></thead><tbody>\n<tr><td>4</td><td>Calling <code>var</code>, <code>let</code>, and <code>const</code> variable “types” can be confused with data types. “const: can&#x27;t change value” is too broad</td><td>Rename the slide <code>Variable declarations and scope</code>. Compare scope, reassignment, and access before declaration. Explain that <code>const</code> prevents reassignment but allows changes to object properties and array contents</td></tr>\n<tr><td>4</td><td>Saying that anything outside a function is global ignores module environments</td><td>Limit the statement to the usual top-level behavior in ordinary browser scripts. Note the module boundaries in ES modules and Node files</td></tr>\n<tr><td>6</td><td>The reassignment error is annotated beside <code>console.log(PI)</code></td><td>Put the error annotation on <code>PI = 22 / 7</code>. That assignment throws, so the subsequent log does not execute</td></tr>\n<tr><td>7</td><td>The three question marks may suggest that all three logs produce output</td><td>State that the first <code>console.log(i)</code> interrupts execution. To compare all three accesses, run them separately or catch each error separately</td></tr>\n<tr><td>8</td><td>“Move declaration to beginning” can imply that source code is literally moved</td><td>Explain binding creation, initialization, and assignment in a simplified execution sequence. Compare <code>var</code>&#x27;s initial <code>undefined</code> with the TDZ for <code>let</code> and <code>const</code>. Use lowercase <code>var</code> and straight quotation marks in code</td></tr>\n<tr><td>10</td><td>The later comments still say <code>// 3</code>, <code>// 150</code>, and <code>// 150</code></td><td>Reading <code>discounted</code> at the top already throws <code>ReferenceError</code> because of the TDZ. Nothing later executes. Even if that first log is removed, the three loop variables are outside their scopes at the later logs. Split TDZ and block scope into two short examples</td></tr>\n<tr><td>11–12</td><td>“Functions are hoisted / Function expressions are not hoisted” lacks precision</td><td>Distinguish a function declaration from a variable holding a function value. The <code>var expression</code> binding initially holds <code>undefined</code>; the function value arrives at assignment. Add a <code>const</code> expression example to show the different error type on early access</td></tr>\n<tr><td>12</td><td>The first line throws, so <code>catName(&#x27;Chloe&#x27;) // works</code> does not actually run in this snippet</td><td>Run the examples separately. Explain that the function declaration permits early calls while acknowledging that this particular execution never reaches that call</td></tr>\n<tr><td>13</td><td>“All functions are object methods” is incorrect</td><td>Explain that functions are callable objects that can be passed as values, and functions stored as object properties can be used as methods. Distinguish standalone functions from object methods</td></tr>\n<tr><td>13</td><td>The example uses curly quotation marks, and “Parameters are optional” needs context</td><td>Use straight quotes in code. A function may declare no parameters, and a call may omit arguments. An ordinary missing parameter becomes <code>undefined</code>, but that does not mean every function remains useful without its expected arguments</td></tr>\n<tr><td>15–16</td><td>The return values of the two array methods are not compared explicitly</td><td>Show that <code>forEach</code> returns <code>undefined</code> and ignores callback return values. Explain that a <code>reduce</code> callback must return the next accumulator. Show the initial value and each accumulation step</td></tr>\n<tr><td>18</td><td>The second solution uses <code>Var total</code></td><td>JavaScript is case-sensitive. Use lowercase <code>var</code>, or <code>const total</code> when reassignment is unnecessary. <code>Var total</code> causes a syntax error here</td></tr>\n<tr><td>19</td><td>The second example uses <code>Let [a, b, ...rest]</code></td><td>Use lowercase <code>let</code>. If both examples share a scope, the earlier <code>var a, b, rest</code> also conflicts with the later <code>let</code> declaration. Present them as independent examples or keep only one</td></tr>\n<tr><td>22–23</td><td>The <code>fullName</code> output comment omits <code>Fullname is </code></td><td>The actual output is <code>Fullname is Peter Anteater</code>. Correct the comment or change the function to return only the name</td></tr>\n<tr><td>23</td><td>Property defaults are shown without a default for the entire argument</td><td>Add <code>function studentID({ id = 11111111 } = {})</code>. Compare <code>{}</code>, an omitted argument, <code>{id:null}</code>, and <code>null</code></td></tr>\n<tr><td>24–25</td><td>The sentence requested in the exercise differs from the solution&#x27;s <code>title + &#x27;, published by &#x27; + publisher</code></td><td>Align the prompt and solution. Have the function return <code>${title} was published by ${publisher}.</code>, print it with an external <code>console.log</code>, and state the exact expected output</td></tr>\n<tr><td>26–28</td><td>Empty-data and tie behavior are unspecified</td><td>Define an empty array as returning <code>null</code> and ties as selecting the first student. Add negative scores to explain why initializing the maximum to <code>0</code> can be incorrect</td></tr>\n</tbody></table></div>\n<p>Reference documentation: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const\" target=\"_blank\" rel=\"noopener noreferrer\">MDN const</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let\" target=\"_blank\" rel=\"noopener noreferrer\">let and TDZ</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var\" target=\"_blank\" rel=\"noopener noreferrer\">var</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Glossary/Hoisting\" target=\"_blank\" rel=\"noopener noreferrer\">Hoisting</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions\" target=\"_blank\" rel=\"noopener noreferrer\">Functions</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach\" target=\"_blank\" rel=\"noopener noreferrer\">forEach</a>, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce\" target=\"_blank\" rel=\"noopener noreferrer\">reduce</a>, and <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring\" target=\"_blank\" rel=\"noopener noreferrer\">Destructuring</a>.</p>\n<h2>Teaching structure and practice</h2>\n<ol>\n<li><strong>Replace the slide 2 agenda with observable learning goals.</strong> Students should be able to predict scope and TDZ behavior, write a function that receives a callback, use <code>forEach</code> and <code>reduce</code>, and destructure objects in function parameters.</li>\n<li><strong>Use a prediction, execution, explanation, and revision sequence.</strong> For example, predict the final <code>i</code> in a <code>var</code> loop, run it, change only <code>var</code> to <code>let</code>, and explain the difference. Change one concept at a time.</li>\n<li><strong>Introduce hoisting with short examples.</strong> The discount functions on slides 8–9 combine arrays, loops, rounding, scope, and initialization. Start with three lines such as <code>console.log(x); var x = 1;</code>, compare with <code>let</code>, then return to the discount exercise.</li>\n<li><strong>Explain arrow functions before the array methods.</strong> Compare <code>x =&gt; x * 2</code> with <code>x =&gt; { return x * 2; }</code>. Explain the need for explicit <code>return</code> with a block body. Ordinary functions and arrow functions differ in their handling of <code>this</code>, so do not replace object methods mechanically.</li>\n<li><strong>Provide separate, copyable starter files.</strong> Each prompt should state inputs, exact outputs, empty-data behavior, and tie rules. Keep solutions separate so students can attempt the task first. Pastebin can remain an additional access option.</li>\n<li><strong>Add a related combined exercise.</strong> Reuse the student dataset to calculate the count, average, and highest-scoring student, composing the earlier functions. Keep the practice aligned with the three original slide exercises.</li>\n<li><strong>Check common misunderstandings.</strong> Include empty arrays for averages, <code>null</code> and <code>undefined</code> for defaults, and ties and negative scores for the maximum. These cases reveal whether students understand the rules.</li>\n</ol>\n<p>A useful teaching order is variable declarations and scope, TDZ and function declarations, functions as values and arrow syntax, <code>forEach</code> and <code>reduce</code>, then array and object destructuring. Finish with the highest-score or score-summary task. The existing scope does not require adding Promises or a framework.</p>\n<h2>Code presentation and layout</h2>\n<ul>\n<li><strong>Slides 4–11 and 17–22: improve code readability.</strong> The local renders show dark text against black code backgrounds, with small text in longer functions. Use a readable monospace font, increase contrast, and keep only the lines needed for the current explanation.</li>\n<li><strong>Slides 21–22: fix bottom spacing.</strong> The last code or output line is close to or beyond the bottom edge in the local renders. Separate the two functions or move complete code into the accompanying files and show only the relevant part on the slide.</li>\n<li><strong>Slides 25–27: remove overlap.</strong> The right-hand code region obscures the end of the title in the local renders. On slide 25 it also covers part of the prompt. Give the title its own space and put the prompt and code below it, or use separate full slides for the prompt and solution.</li>\n<li><strong>Use more specific titles.</strong> The repeated <code>Object and Array Destructuring</code> title can become <code>Array rest</code>, <code>Default values</code>, <code>Renaming object properties</code>, and <code>Destructured parameters</code>, according to each slide&#x27;s subject.</li>\n<li><strong>Annotate execution behavior.</strong> Mark the exact line producing <code>undefined</code> or <code>ReferenceError</code> and identify code that is never reached. Supplement syntax colors with text labels. For <code>reduce</code>, use a small table showing the accumulator, current value, and returned value.</li>\n<li><strong>Keep code consistent and copyable.</strong> Use lowercase keywords, straight quotes, and consistent indentation. The slide, starter file, and solution should all use the same code version.</li>\n</ul>\n<p>Fix correctness on slides 3, 9, 11, 12, 17, and 18 first. Then address spacing and overlap on slides 21–27, followed by shorter examples and additional practice questions.</p>",
  "examples": [
    {
      "title": "Discount prices: var",
      "shortTitle": "Discount prices: var",
      "group": "Variables",
      "slides": "SLIDE 5",
      "description": "Variables declared with var remain accessible throughout the function.",
      "code": "function discountPrices (prices, discount) {\n    var discounted = []\n    for (var i = 0; i < prices.length; i++) {\n      var discountedPrice = prices[i] * (1 - discount)\n      var finalPrice = Math.round(discountedPrice * 100) / 100\n      discounted.push(finalPrice)\n    }\n    console.log(i) // 3\n    console.log(discountedPrice) // 150\n    console.log(finalPrice) // 150\n    return discounted\n  }\ndiscountPrices([100, 200, 300], .5)",
      "expected": "3\n150\n150",
      "error": null,
      "file": "examples/01-var-loop-scope.js"
    },
    {
      "title": "const PI",
      "shortTitle": "const PI",
      "group": "Variables",
      "slides": "SLIDE 6",
      "description": "Reassigning PI throws TypeError. The following log is never reached.",
      "code": "const PI = 3.142;\n\nPI = 22 / 7; // TypeError: constant reassignment\n\nconsole.log(PI); // Not reached",
      "expected": "TypeError",
      "error": "TypeError",
      "file": "examples/02-const-reassignment.js"
    },
    {
      "title": "Discount prices: let",
      "shortTitle": "Discount prices: let",
      "group": "Variables",
      "slides": "SLIDE 7",
      "description": "The loop variable i belongs to the loop. Reading it outside the loop throws ReferenceError.",
      "code": "function discountPrices (prices, discount) {\n  let discounted = []\n\n  for (let i = 0; i < prices.length; i++) {\n    let discountedPrice = prices[i] * (1 - discount)\n    let finalPrice = Math.round(discountedPrice * 100) / 100\n    discounted.push(finalPrice)\n  }\n console.log(i) // ReferenceError; stops here\n console.log(discountedPrice) // Not reached\n console.log(finalPrice) // Not reached\n  return discounted\n}\n\ndiscountPrices([100, 200, 300], .5) // Error at i",
      "expected": "ReferenceError",
      "error": "ReferenceError",
      "file": "examples/03-let-block-scope.js"
    },
    {
      "title": "Hoisting: var",
      "shortTitle": "Hoisting: var",
      "group": "Hoisting",
      "slides": "SLIDE 9",
      "description": "The var binding starts as undefined. The array is assigned when execution reaches its declaration line.",
      "code": "function discountPrices (prices, discount) {\n    console.log(discounted) // undefined before assignment\n     var discounted = []\n     for (var i = 0; i < prices.length; i++) {\n       var discountedPrice = prices[i] * (1 - discount)\n       var finalPrice = Math.round(discountedPrice * 100) / 100\n       discounted.push(finalPrice)\n     }\n     console.log(i) // 3\n     console.log(discountedPrice) // 150\n     console.log(finalPrice) // 150\n\n     return discounted\n   }\n   \n\ndiscountPrices([100, 200, 300], .5);",
      "expected": "undefined\n3\n150\n150",
      "error": null,
      "file": "examples/04-var-before-assignment.js"
    },
    {
      "title": "Hoisting: let",
      "shortTitle": "Hoisting: let",
      "group": "Hoisting",
      "slides": "SLIDE 10",
      "description": "Reading discounted before its let declaration throws ReferenceError.",
      "code": "function discountPrices (prices, discount) {\n    console.log(discounted) // ReferenceError: TDZ\n    let discounted = []\n    for (let i = 0; i < prices.length; i++) {\n      let discountedPrice = prices[i] * (1 - discount)\n      let finalPrice = Math.round(discountedPrice * 100) / 100\n      discounted.push(finalPrice)\n    }\n   console.log(i) // Not reached; i is out of scope\n   console.log(discountedPrice) // Not reached\n   console.log(finalPrice) // Not reached\n    return discounted\n  }\n  \n\n\ndiscountPrices([100, 200, 300], .5);",
      "expected": "ReferenceError",
      "error": "ReferenceError",
      "file": "examples/05-let-.js"
    },
    {
      "title": "catName: declaration",
      "shortTitle": "catName: declaration",
      "group": "Hoisting",
      "slides": "SLIDE 11",
      "description": "A function declaration can be called before its definition.",
      "code": "catName(\"Chloe\"); \nfunction catName(name){ \nconsole.log(\"My cat's name is \" + name); \n} \n/* The result of the code above is: \"My cat's name is Chloe\" */",
      "expected": "My cat's name is Chloe",
      "error": null,
      "file": "examples/06-function-declaration.js"
    },
    {
      "title": "Function expression",
      "shortTitle": "Function expression",
      "group": "Hoisting",
      "slides": "SLIDE 12",
      "description": "expression is undefined before its assignment. Calling it throws TypeError.",
      "code": "expression(); // TypeError: expression is undefined\ncatName(\"Chloe\"); // Not reached after the error\nfunction catName(name){ \n    console.log(\"My cat's name is \" + name); \n}\nvar expression = catName; // Assigned here",
      "expected": "TypeError",
      "error": "TypeError",
      "file": "examples/07-function-expression.js"
    },
    {
      "title": "student.printName()",
      "shortTitle": "student.printName()",
      "group": "Callbacks",
      "slides": "SLIDE 13",
      "description": "printName is a method on student. It reads the firstName and lastName properties using this.",
      "code": "function name(param1, param2) {\n}\nvar student = {\n\tfirstName: \"Peter\",\n\tlastName: \"Anteater\",\n\tprintName: function() {\t\n\t\tconsole.log(this.firstName + \" \" + this.lastName);\n\t}\n}\nstudent.printName();\t\t// Invokes the function",
      "expected": "Peter Anteater",
      "error": null,
      "file": "examples/08-function-and-method.js"
    },
    {
      "title": "addTwoNumbers",
      "shortTitle": "addTwoNumbers",
      "group": "Callbacks",
      "slides": "SLIDE 14",
      "description": "addTwoNumbers receives printResults as a callback, then calls it with the two numbers and their sum.",
      "code": "function addTwoNumbers(a, b, callback) {\n    console.log(\"Adding two numbers..\");\n    var result = a + b;\n    callback(a,b,result);\n}\nfunction printResults(x,y,z) {\n    console.log(x + \" + \" + y + \" = \" + z);\n}\naddTwoNumbers(10,15,printResults);",
      "expected": "Adding two numbers..\n10 + 15 = 25",
      "error": null,
      "file": "examples/09-callback.js"
    },
    {
      "title": "forEach: a, b, c",
      "shortTitle": "forEach: a, b, c",
      "group": "Arrays",
      "slides": "SLIDE 15",
      "description": "forEach calls the callback once for each array item.",
      "code": "const array1 = ['a', 'b', 'c'];\n\narray1.forEach(element => console.log(element));\n\n// expected output: \"a\"\n// expected output: \"b\"\n// expected output: \"c\"",
      "expected": "a\nb\nc",
      "error": null,
      "file": "examples/10-for-ach.js"
    },
    {
      "title": "reduce: 1 + 2 + 3 + 4",
      "shortTitle": "reduce: 1 + 2 + 3 + 4",
      "group": "Arrays",
      "slides": "SLIDE 16",
      "description": "The accumulator starts at 0. Each callback returns the new total.",
      "code": "const array1 = [1, 2, 3, 4];\n\n// 1 + 2 + 3 + 4\nvar total = array1.reduce((accumulator, currentValue) => {\n   return accumulator + currentValue;\n }, 0)\n\nconsole.log(total)// expected output: 10",
      "expected": "10",
      "error": null,
      "file": "examples/11-reduce.js"
    },
    {
      "title": "Average with forEach",
      "shortTitle": "Average with forEach",
      "group": "Original exercises",
      "slides": "SLIDE 18",
      "description": "Add each item to total, then divide by myArray.length.",
      "code": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\nvar total = 0;\nmyArray.forEach(function(item) {\n    total += item;\n});\n\nvar avg = total / myArray.length;\nconsole.log(\"Avg: \" + avg);",
      "expected": "Array is 6,2,8,1,2,5,3\nAvg: 3.857142857142857",
      "error": null,
      "file": "examples/12-average-for-ach.js"
    },
    {
      "title": "Average with reduce",
      "shortTitle": "Average with reduce",
      "group": "Original exercises",
      "slides": "SLIDE 18",
      "description": "Use reduce to find the sum, then divide by myArray.length.",
      "code": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\nvar total = myArray.reduce(function(sum, current) {\n    return sum + current;\n}, 0);\n\nvar avg = total / myArray.length;\nconsole.log(\"Avg: \" + avg);",
      "expected": "Array is 6,2,8,1,2,5,3\nAvg: 3.857142857142857",
      "error": null,
      "file": "examples/13-average-reduce.js"
    },
    {
      "title": "Array destructuring and rest",
      "shortTitle": "Array destructuring and rest",
      "group": "Destructuring",
      "slides": "SLIDE 19",
      "description": "Array values are unpacked by position. rest receives the remaining values.",
      "code": "var a, b, rest;\n[a, b] = [10, 20];\nconsole.log(a); // 10\nconsole.log(b); // 20\n\n[a, b, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(a); // 10\nconsole.log(b); // 20\nconsole.log(rest); // [30, 40, 50]",
      "expected": "10\n20\n10\n20\n[30,40,50]",
      "error": null,
      "file": "examples/14-array-rest.js"
    },
    {
      "title": "Array default values",
      "shortTitle": "Array default values",
      "group": "Destructuring",
      "slides": "SLIDE 20",
      "description": "There is no second item, so b uses its default value of 7.",
      "code": "var a, b;\n\n[a=5, b=7] = [1];\nconsole.log(a); // 1\nconsole.log(b); // 7",
      "expected": "1\n7",
      "error": null,
      "file": "examples/15-array-defaults.js"
    },
    {
      "title": "Swap a and b",
      "shortTitle": "Swap a and b",
      "group": "Destructuring",
      "slides": "SLIDE 20",
      "description": "The right side reads both values before assigning them to the left side.",
      "code": "var a = 1;\nvar b = 3;\n\n[a, b] = [b, a];\nconsole.log(a); // 3\nconsole.log(b); // 1",
      "expected": "3\n1",
      "error": null,
      "file": "examples/16-swap-variables.js"
    },
    {
      "title": "Object destructuring",
      "shortTitle": "Object destructuring",
      "group": "Destructuring",
      "slides": "SLIDE 21",
      "description": "id, firstName, and lastName are property names. a, b, and c are the new variables.",
      "code": "var student = {id: 88888888, firstName: \"Peter\", lastName: \"Anteater\"};\nvar {id: a, firstName: b, lastName: c} = student;\n\nconsole.log(a); // 88888888\nconsole.log(b); // Peter \nconsole.log(c); // Anteater",
      "expected": "88888888\nPeter\nAnteater",
      "error": null,
      "file": "examples/17-object-aliases.js"
    },
    {
      "title": "studentID and fullName",
      "shortTitle": "studentID and fullName",
      "group": "Destructuring",
      "slides": "SLIDE 22",
      "description": "The function parameters unpack the named properties from student.",
      "code": "var student = { id: 88888888, firstName: \"Peter\", lastName: \"Anteater\" };\n\nfunction studentID({ id }) {\n    return id;\n}\n\nfunction fullName({ firstName, lastName }) {\n    return \"Fullname is \" + firstName + \" \" + lastName;\n}\n\nconsole.log(studentID(student)); // 88888888\nconsole.log(fullName(student)); // \"Fullname is Peter Anteater\"",
      "expected": "88888888\nFullname is Peter Anteater",
      "error": null,
      "file": "examples/18-destructured-parameters.js"
    },
    {
      "title": "Parameter default values",
      "shortTitle": "Parameter default values",
      "group": "Destructuring",
      "slides": "SLIDE 23",
      "description": "The student object has no id, so the destructured id uses 11111111.",
      "code": "var student = { firstName: \"Peter\", lastName: \"Anteater\" };\n\nfunction studentID({ id = 11111111 } = {}) {\n    return id;\n}\n\nfunction fullName({ firstName = \"default\", lastName = \"default\" }) {\n    return \"Fullname is \" + firstName + \" \" + lastName;\n}\n\nconsole.log(studentID(student)); // 11111111\nconsole.log(fullName(student)); // \"Fullname is Peter Anteater\"",
      "expected": "11111111\nFullname is Peter Anteater",
      "error": null,
      "file": "examples/19-parameter-defaults.js"
    },
    {
      "title": "Book and publisher",
      "shortTitle": "Book and publisher",
      "group": "Original exercises",
      "slides": "SLIDE 25",
      "description": "Destructure title and publisher in the function parameter, return the sentence, and print it.",
      "code": "let book = {\n    title: 'The Fellowship of the Ring',\n    publisher: 'Allen & Unwin'\n};\n\nfunction print({title, publisher}){\n    return title + ' was published by ' + publisher + '.';\n}\n\nconsole.log(print(book));",
      "expected": "The Fellowship of the Ring was published by Allen & Unwin.",
      "error": null,
      "file": "examples/20-book-sentence.js"
    },
    {
      "title": "Highest score: function",
      "shortTitle": "Highest score: function",
      "group": "Original exercises",
      "slides": "SLIDE 27",
      "description": "Start max at negative infinity, then update max and maxName whenever a larger score is found.",
      "code": "var myList = [\n    {name: \"Peter 1\", score: 79},\n    {name: \"Peter 2\", score: 91},\n    {name: \"Peter 3\", score: 66},\n    {name: \"Peter 4\", score: 99},\n    {name: \"Peter 5\", score: 55}\n];\n\nvar max = Number.NEGATIVE_INFINITY;\nvar maxName = \"None\"\n\nmyList.forEach(function({name, score}) {\n    if (score > max) {\n        max = score;\n        maxName = name;\n    }\n});\n\nconsole.log(maxName + \" has the highest score: \" + max);",
      "expected": "Peter 4 has the highest score: 99",
      "error": null,
      "file": "examples/21-highest-score.js"
    },
    {
      "title": "Highest score: arrow",
      "shortTitle": "Highest score: arrow",
      "group": "Original exercises",
      "slides": "SLIDE 28",
      "description": "This is the same highest-score example with the arrow function from the last slide.",
      "code": "var myList = [\n    {name: \"Peter 1\", score: 79},\n    {name: \"Peter 2\", score: 91},\n    {name: \"Peter 3\", score: 66},\n    {name: \"Peter 4\", score: 99},\n    {name: \"Peter 5\", score: 55}\n];\n\nvar max = Number.NEGATIVE_INFINITY;\nvar maxName = \"None\"\n\nmyList.forEach(({name, score}) => {\n    if (score > max) {\n        max = score;\n        maxName = name;\n    }\n});\n\nconsole.log(maxName + \" has the highest score: \" + max);",
      "expected": "Peter 4 has the highest score: 99",
      "error": null,
      "file": "examples/22-highest-score-arrow.js"
    }
  ],
  "exercises": [
    {
      "title": "1A. Average with forEach",
      "slides": "SLIDE 18",
      "prompt": "Use forEach() to calculate the average of myArray.",
      "expected": "Array is 6,2,8,1,2,5,3\nAvg: 3.857142857142857",
      "starter": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\n// TODO: Use forEach() to calculate the average.\n// Print the result with console.log(\"Avg: \" + avg);",
      "solution": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\nvar total = 0;\nmyArray.forEach(function(item) {\n    total += item;\n});\n\nvar avg = total / myArray.length;\nconsole.log(\"Avg: \" + avg);",
      "file": "exercises/01-average-for-ach.js",
      "solutionFile": "exercises/01-average-for-ach-solution.js"
    },
    {
      "title": "1B. Average with reduce",
      "slides": "SLIDE 18",
      "prompt": "Use reduce() to calculate the average of the same array.",
      "expected": "Array is 6,2,8,1,2,5,3\nAvg: 3.857142857142857",
      "starter": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\n// TODO: Use reduce() to calculate the average.\n// Print the result with console.log(\"Avg: \" + avg);",
      "solution": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\nvar total = myArray.reduce(function(sum, current) {\n    return sum + current;\n}, 0);\n\nvar avg = total / myArray.length;\nconsole.log(\"Avg: \" + avg);",
      "file": "exercises/02-average-reduce.js",
      "solutionFile": "exercises/02-average-reduce-solution.js"
    },
    {
      "title": "2. Book and publisher",
      "slides": "SLIDE 25",
      "prompt": "Write print({title, publisher}) to return the book and publisher sentence.",
      "expected": "The Fellowship of the Ring was published by Allen & Unwin.",
      "starter": "let book = {\n    title: 'The Fellowship of the Ring',\n    publisher: 'Allen & Unwin'\n};\n\nfunction print({title, publisher}) {\n    // TODO: Return a sentence with the title and publisher.\n}\n\nconsole.log(print(book));",
      "solution": "let book = {\n    title: 'The Fellowship of the Ring',\n    publisher: 'Allen & Unwin'\n};\n\nfunction print({title, publisher}){\n    return title + ' was published by ' + publisher + '.';\n}\n\nconsole.log(print(book));",
      "file": "exercises/03-book-sentence.js",
      "solutionFile": "exercises/03-book-sentence-solution.js"
    },
    {
      "title": "3. Highest score",
      "slides": "SLIDE 27",
      "prompt": "Use forEach() to find the highest score and the student's name.",
      "expected": "Peter 4 has the highest score: 99",
      "starter": "var myList = [\n    {name: \"Peter 1\", score: 79},\n    {name: \"Peter 2\", score: 91},\n    {name: \"Peter 3\", score: 66},\n    {name: \"Peter 4\", score: 99},\n    {name: \"Peter 5\", score: 55}\n];\n\nvar maxName;\nvar max;\n\n// TODO: Use forEach() and destructure {name, score} to find the highest score.\n\nconsole.log(maxName + \" has the highest score: \" + max);",
      "solution": "var myList = [\n    {name: \"Peter 1\", score: 79},\n    {name: \"Peter 2\", score: 91},\n    {name: \"Peter 3\", score: 66},\n    {name: \"Peter 4\", score: 99},\n    {name: \"Peter 5\", score: 55}\n];\n\nvar max = Number.NEGATIVE_INFINITY;\nvar maxName = \"None\"\n\nmyList.forEach(function({name, score}) {\n    if (score > max) {\n        max = score;\n        maxName = name;\n    }\n});\n\nconsole.log(maxName + \" has the highest score: \" + max);",
      "file": "exercises/04-highest-score.js",
      "solutionFile": "exercises/04-highest-score-solution.js"
    }
  ],
  "practice": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\n// TODO: Use forEach() to calculate the average.\n// Print the result with console.log(\"Avg: \" + avg);",
  "solutions": "var myArray = [6, 2, 8, 1, 2, 5, 3];\nconsole.log('Array is ' + myArray);\n\nvar total = 0;\nmyArray.forEach(function(item) {\n    total += item;\n});\n\nvar avg = total / myArray.length;\nconsole.log(\"Avg: \" + avg);"
};
