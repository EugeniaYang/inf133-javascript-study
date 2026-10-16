# INF133 JavaScript: Original Slide Examples

[Open the study page](https://eugeniayang.github.io/inf133-javascript-study/)

A small JavaScript study companion based on the original INF133 discussion slides. It includes runnable examples, the three original exercises, solutions, and explanations you can open when needed.

Use the link above to study online. To work offline, [download the files](https://github.com/EugeniaYang/inf133-javascript-study/archive/refs/heads/main.zip), extract the ZIP, and open **index.html** in your browser. Keep the files together in the extracted folder. No installation is needed.

The page now uses the original slide examples, with corrections for syntax errors and incorrect output comments. Each example is shown as a small, independent script. Detailed explanations remain behind the clickable **Why?** buttons.

## Examples

Choose an example from the dropdown. The code uses the slide's original names and data:

- `discountPrices([100, 200, 300], .5)` for var, let, and hoisting
- `const PI = 3.142` for reassignment
- `catName("Chloe")` for function declarations
- `student.printName()` and `addTwoNumbers(10, 15, printResults)`
- `['a', 'b', 'c']` with forEach and `[1, 2, 3, 4]` with reduce
- Array destructuring, defaults, swapping variables, and the student object
- The original average, book, and highest-score solutions

Click **Run example** to see its output. Some examples intentionally produce TypeError or ReferenceError, just as in the slides. The page catches those errors; the lesson code does not need error-handling helpers.

Use **Download .js** for the selected snippet. Every snippet also has its own file in `examples/`.

## Original exercises

Practice contains only the three exercises from the slides:

1. Average of `[6, 2, 8, 1, 2, 5, 3]`, first using forEach and then reduce
2. A description of The Fellowship of the Ring and its publisher
3. The highest score and name in the Peter student list

The average has two versions in the dropdown. Each exercise has a small starter script and its original solution. Edit one exercise at a time, run it, and compare its output with the slide's sample. **Check output** checks only that sample output.

Use **Download answers** to save your code. Existing browser drafts from the earlier version have not been deleted.

Practice drafts are saved only in the browser you use. They are not uploaded to GitHub or shared with other visitors. Download your answers to move them between devices or between the local and online versions.

## Files

- `index.html`, `style.css`, and `app.js`: the study page
- `study-data.js`: the original snippets and explanation text shown on the page
- `examples/`: each slide example as an ordinary .js file
- `exercises/`: the original starter scripts and solutions
- `examples.js`: the first discountPrices example
- `practice.js`: the forEach average starter
- `solutions.js`: the forEach average solution
- `slide-review.md`: the earlier content review

To run a file with Node.js:

```sh
node examples.js
node solutions.js
```

No import, export, module configuration, extra helper functions, or combined course-summary exercise is required in the lesson code.

## Updating the shared page

GitHub Pages serves this repository's `main` branch. Changes pushed to `main` appear on the shared page after GitHub finishes publishing them.
