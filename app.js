// Browser behavior for the local study page. Loaded by a standard script tag.
(function () {
  'use strict';
  const data = window.STUDY_DATA;
  const byId = (id) => document.getElementById(id);
  const titles = {
    summary: ['JavaScript fundamentals', 'The key ideas from your slides, with code you can run and exercises you can check.'],
    examples: ['Explore the examples', 'Read the code, predict the output, and run it. Change a value to test your understanding.'],
    practice: ['Write it yourself', 'The three exercises from the slides: average, book description, and highest score.'],
    solutions: ['Reference solutions', 'Compare approaches and understand why each implementation works.'],
    review: ['A closer look at the slides', 'Specific corrections and suggestions for improving the original discussion deck.'],
    files: ['Everything in one folder', 'Use the page in your browser, or work directly with the JavaScript files.'],
  };
  let exampleIndex = 0;
  let running = false;
  let draftTimer;

  let explanationTrigger = null;
  function openExplanation(trigger, title, content) {
    explanationTrigger = trigger;
    const popover = byId('explanation-popover');
    byId('explanation-title').textContent = title;
    byId('explanation-body').innerHTML = content;
    const width = Math.min(680, window.innerWidth - 32);
    const height = Math.min(620, window.innerHeight - 32);
    const rect = trigger.getBoundingClientRect();
    popover.style.width = width + 'px';
    popover.style.maxHeight = height + 'px';
    popover.style.left = Math.max(16, Math.min(rect.left, window.innerWidth - width - 16)) + 'px';
    popover.style.top = Math.max(16, Math.min(rect.bottom + 8, window.innerHeight - height - 16)) + 'px';
    popover.showPopover();
    trigger.setAttribute('aria-expanded', 'true');
    byId('close-explanation').focus();
  }
  function helpButton(label, title, content) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'help-trigger';
    button.textContent = label;
    button.setAttribute('aria-label', 'Read explanation: ' + title);
    button.setAttribute('aria-controls', 'explanation-popover');
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => openExplanation(button, title, content));
    return button;
  }
  byId('explanation-popover').addEventListener('toggle', (event) => {
    if (event.newState === 'closed' && explanationTrigger) {
      explanationTrigger.setAttribute('aria-expanded', 'false');
      explanationTrigger.focus({ preventScroll: true });
    }
  });
  const summarySource = document.createElement('div');
  summarySource.innerHTML = data.summaryHtml;
  const concepts = [
    ['Variables & scope', 'Use const by default. Use let when you need to reassign.', 0],
    ['Hoisting & TDZ', 'A var binding starts as undefined. Early let or const access throws.', 3],
    ['Callbacks & arrays', 'forEach performs an operation. reduce accumulates a result.', 8],
    ['Destructuring', 'Arrays use positions. Objects use property names.', 13],
  ];
  const groups = [];
  Array.from(summarySource.children).forEach((node) => {
    if (node.tagName === 'H3') groups.push({ heading: node.textContent, nodes: [] });
    else if (groups.length) groups[groups.length - 1].nodes.push(node.outerHTML);
  });
  groups.forEach((group, index) => {
    const concept = concepts[index];
    if (!concept) return;
    const article = document.createElement('article');
    article.className = 'concept-row';
    const number = document.createElement('span');
    number.className = 'concept-number';
    number.textContent = String(index + 1).padStart(2, '0');
    const body = document.createElement('div');
    const heading = document.createElement('h2');
    heading.textContent = concept[0];
    const takeaway = document.createElement('p');
    takeaway.textContent = concept[1];
    body.append(heading, takeaway);
    const actions = document.createElement('div');
    actions.className = 'concept-actions';
    actions.append(helpButton('Why?', concept[0], group.nodes.join('\n')));
    const link = document.createElement('a');
    link.href = '#examples';
    link.className = 'concept-example';
    link.textContent = 'Try example →';
    link.addEventListener('click', () => selectExample(concept[2]));
    actions.append(link);
    article.append(number, body, actions);
    byId('summary-content').append(article);
  });
  const reviewSource = document.createElement('div');
  reviewSource.innerHTML = data.reviewHtml;
  const reviewTable = document.createElement('table');
  reviewTable.className = 'review-table';
  reviewTable.innerHTML = '<thead><tr><th scope="col">Slide</th><th scope="col">Issue</th><th scope="col">Details</th></tr></thead>';
  const reviewBody = document.createElement('tbody');
  const issueLabels = ['Variable declarations and const', 'Global scope and modules', 'Constant reassignment error', 'Unreachable log statements', 'Hoisting terminology', 'TDZ and block scope', 'Declarations vs expressions', 'Unreachable function call', 'Functions vs methods', 'Parameters and quotation marks', 'Array callback return values', 'Uppercase Var', 'Uppercase Let and redeclaration', 'Incorrect fullName output', 'Defaults for an omitted argument', 'Book exercise output', 'Empty input and tied scores'];
  reviewSource.querySelectorAll('tbody tr').forEach((sourceRow, index) => {
    const cells = sourceRow.querySelectorAll('td');
    if (cells.length !== 3) return;
    const row = document.createElement('tr');
    const slide = document.createElement('td');
    slide.textContent = cells[0].textContent;
    const issue = document.createElement('td');
    issue.textContent = issueLabels[index] || cells[1].textContent;
    const action = document.createElement('td');
    action.append(helpButton('See correction', issue.textContent, '<h3>Original issue</h3><p>' + cells[1].innerHTML + '</p><h3>Suggested correction</h3><p>' + cells[2].innerHTML + '</p>'));
    row.append(slide, issue, action);
    reviewBody.append(row);
  });
  reviewTable.append(reviewBody);
  const reviewWrap = document.createElement('div');
  reviewWrap.className = 'table-wrap';
  reviewWrap.append(reviewTable);
  byId('review-content').append(reviewWrap);
  const reviewNotes = [];
  Array.from(reviewSource.children).forEach((node) => {
    if (node.tagName === 'H2') reviewNotes.push({ title: node.textContent, nodes: [] });
    else if (reviewNotes.length) reviewNotes[reviewNotes.length - 1].nodes.push(node.outerHTML);
  });
  const reviewActions = document.createElement('div');
  reviewActions.className = 'action-row';
  reviewNotes.slice(1).forEach((note) => reviewActions.append(helpButton(note.title + ' ?', note.title, note.nodes.join('\n'))));
  byId('review-content').append(reviewActions);
  const fileInstructions = document.querySelectorAll('#view-files > .prose');
  fileInstructions.forEach((section, index) => {
    const content = section.innerHTML;
    const label = index === 0 ? 'How do these files connect?' : 'How do I run this with Node.js?';
    section.replaceChildren();
    if (index === 0) {
      const instruction = document.createElement('p');
      instruction.textContent = 'Keep the files together and open index.html in your browser.';
      section.append(instruction);
    }
    section.append(helpButton(label, label, content));
  });
  let exerciseIndex = 0;
  let solutionIndex = 0;
  const draftKey = () => 'inf133-slide-exercise-v2-' + exerciseIndex;

  function showView() {
    const requested = window.location.hash.slice(1);
    const view = Object.hasOwn(titles, requested) ? requested : 'summary';
    if (byId('explanation-popover').matches(':popover-open')) byId('explanation-popover').hidePopover();
    document.querySelectorAll('.view').forEach((section) => { section.hidden = section.id !== 'view-' + view; });
    document.querySelectorAll('.main-nav a').forEach((link) => {
      if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    byId('page-title').textContent = titles[view][0];
    byId('page-description').textContent = titles[view][1];
    document.title = titles[view][0] + ' · INF133';
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', showView);
  showView();

  const exampleGroups = new Map();
  data.examples.forEach((example, index) => {
    let group = exampleGroups.get(example.group);
    if (!group) {
      group = document.createElement('optgroup');
      group.label = example.group;
      exampleGroups.set(example.group, group);
      byId('example-select').append(group);
    }
    const option = document.createElement('option');
    option.value = index;
    option.textContent = example.title + ' · ' + example.slides.toLowerCase();
    group.append(option);
  });
  function fitEditor(editor) {
    const lines = editor.value.split('\n').length;
    editor.style.height = Math.min(560, Math.max(200, lines * 23 + 44)) + 'px';
  }
  function selectExample(index) {
    exampleIndex = index;
    const example = data.examples[index];
    byId('example-select').value = index;
    byId('example-title').textContent = example.title;
    byId('example-slides').textContent = example.slides;
    byId('example-description').textContent = example.description;
    byId('example-editor').value = example.code;
    byId('example-expected').textContent = example.expected;
    byId('download-example').href = example.file;
    byId('example-output').textContent = 'Run the example to see its output.';
    byId('example-status').textContent = '';
    fitEditor(byId('example-editor'));
  }
  byId('example-select').addEventListener('change', () => selectExample(Number(byId('example-select').value)));
  selectExample(0);
  byId('reset-example').addEventListener('click', () => selectExample(exampleIndex));
  byId('example-help').addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = data.examples[exampleIndex].description;
    openExplanation(byId('example-help'), data.examples[exampleIndex].title, p.outerHTML);
  });
  byId('practice-help').addEventListener('click', () => openExplanation(byId('practice-help'), 'Practice the slide exercises', '<p>Choose an exercise, complete its TODO, and run the code. Check output compares your result with the original sample.</p><p>Use Show solution if you need the answer. Download answers to save your code as a .js file.</p><p>Press Ctrl/⌘ + Enter to run. Press Escape, then Tab to leave the editor.</p>'));

  function runCode(code) {
    // The runner is separate from the lesson snippets.
    return new Promise((resolve, reject) => {
      const workerSource = `self.onmessage = function(event) {
        const logs = [];
        const format = (value) => value === undefined ? 'undefined' : typeof value === 'object' ? JSON.stringify(value) : String(value);
        const output = { log: (...values) => logs.push(values.map(format).join(' ')) };
        try {
          new Function('console', '"use strict";\\n' + event.data)(output);
          self.postMessage({ logs });
        } catch (error) {
          self.postMessage({ logs, error: error.name, message: error.message });
        }
      };`;
      const url = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
      let worker;
      try { worker = new Worker(url); }
      catch (error) { URL.revokeObjectURL(url); reject(error); return; }
      const cleanUp = () => { clearTimeout(timer); worker.terminate(); URL.revokeObjectURL(url); };
      const timer = setTimeout(() => { cleanUp(); reject(new Error('Execution stopped. Check for a loop that never ends.')); }, 2000);
      worker.onmessage = (event) => { cleanUp(); resolve(event.data); };
      worker.onerror = (event) => { cleanUp(); reject(new Error(event.message || 'Could not run this code.')); };
      worker.postMessage(code);
    });
  }
  function setRunning(value) {
    running = value;
    ['run-example', 'run-practice', 'check-exercise'].forEach((id) => { byId(id).disabled = value; });
  }
  byId('run-example').addEventListener('click', async () => {
    if (running) return;
    setRunning(true);
    byId('example-status').textContent = 'Running…';
    try {
      const result = await runCode(byId('example-editor').value);
      byId('example-output').textContent = [...result.logs, ...(result.error ? [result.error] : [])].join('\n') || '(No output)';
      byId('example-status').textContent = result.error === data.examples[exampleIndex].error && result.error ? 'Expected ' + result.error : result.error ? result.message : 'Finished';
    } catch (error) { byId('example-output').textContent = error.message; byId('example-status').textContent = 'Stopped'; }
    finally { setRunning(false); }
  });

  data.exercises.forEach((exercise, index) => {
    for (const id of ['exercise-select', 'solution-select']) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = exercise.title;
      byId(id).append(option);
    }
  });
  function saveDraft() {
    try {
      localStorage.setItem(draftKey(), byId('practice-editor').value);
      byId('draft-status').textContent = 'Draft saved in this browser';
    } catch (error) { byId('draft-status').textContent = 'Download your answers to save them'; }
  }
  function selectExercise(index, initial) {
    if (!initial) saveDraft();
    clearTimeout(draftTimer);
    exerciseIndex = index;
    const exercise = data.exercises[index];
    byId('exercise-select').value = index;
    byId('exercise-title').textContent = exercise.title;
    byId('exercise-slides').textContent = exercise.slides;
    byId('exercise-prompt').textContent = exercise.prompt;
    byId('exercise-expected').textContent = exercise.expected;
    byId('exercise-solution').textContent = exercise.solution;
    byId('practice-editor').value = exercise.starter;
    byId('draft-status').textContent = '';
    try {
      const saved = localStorage.getItem(draftKey());
      if (saved !== null) {
        byId('practice-editor').value = saved;
        byId('draft-status').textContent = 'Your saved draft is loaded';
      }
    } catch (error) { /* Download remains available when browser storage is unavailable. */ }
    document.querySelector('.solution-reveal').open = false;
    byId('check-results').textContent = 'Complete the TODO, then run your code.';
    byId('reset-confirmation').hidden = true;
    fitEditor(byId('practice-editor'));
  }
  byId('exercise-select').addEventListener('change', () => selectExercise(Number(byId('exercise-select').value), false));
  selectExercise(0, true);
  async function runPractice(compare) {
    if (running) return;
    setRunning(true);
    byId('check-results').textContent = 'Running…';
    try {
      const result = await runCode(byId('practice-editor').value);
      const output = [...result.logs, ...(result.error ? [result.error + ': ' + result.message] : [])].join('\n');
      byId('check-results').replaceChildren();
      if (compare) {
        const status = document.createElement('p');
        status.className = 'check-summary ' + (!result.error && output.trim() === data.exercises[exerciseIndex].expected.trim() ? 'success' : 'failure');
        status.textContent = !result.error && output.trim() === data.exercises[exerciseIndex].expected.trim() ? 'Matches the slide’s sample output.' : 'Output differs from the slide’s sample. Compare with the expected output above.';
        byId('check-results').append(status);
      }
      const pre = document.createElement('pre');
      pre.className = 'output';
      pre.textContent = output || '(No output)';
      byId('check-results').append(pre);
    } catch (error) { byId('check-results').textContent = error.message; }
    finally { setRunning(false); }
  }
  byId('run-practice').addEventListener('click', () => runPractice(false));
  byId('check-exercise').addEventListener('click', () => runPractice(true));
  byId('practice-editor').addEventListener('input', () => {
    clearTimeout(draftTimer);
    draftTimer = setTimeout(saveDraft, 300);
  });
  function selectSolution(index) {
    solutionIndex = index;
    byId('solutions-code').textContent = data.exercises[index].solution;
    byId('download-solution').href = data.exercises[index].solutionFile;
    byId('solution-status').textContent = '';
  }
  byId('solution-select').addEventListener('change', () => selectSolution(Number(byId('solution-select').value)));
  selectSolution(0);
  document.querySelectorAll('.code-editor').forEach((editor) => {
    editor.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { editor.dataset.allowTab = 'true'; return; }
      if (event.key === 'Tab' && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
        if (editor.dataset.allowTab === 'true') { delete editor.dataset.allowTab; return; }
        event.preventDefault();
        editor.setRangeText('  ', editor.selectionStart, editor.selectionEnd, 'end');
        editor.dispatchEvent(new Event('input'));
      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        byId(editor.id === 'example-editor' ? 'run-example' : 'run-practice').click();
      }
    });
  });
  byId('download-practice').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([byId('practice-editor').value], { type: 'text/javascript' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = data.exercises[exerciseIndex].file.split('/').pop();
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    byId('draft-status').textContent = 'Answers downloaded';
  });
  byId('load-practice').addEventListener('click', () => byId('practice-file').click());
  byId('practice-file').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    byId('practice-editor').value = await file.text();
    fitEditor(byId('practice-editor'));
    saveDraft();
    event.target.value = '';
  });
  byId('reset-practice').addEventListener('click', () => { byId('reset-confirmation').hidden = false; });
  byId('cancel-reset').addEventListener('click', () => { byId('reset-confirmation').hidden = true; });
  byId('confirm-reset').addEventListener('click', () => {
    clearTimeout(draftTimer);
    byId('practice-editor').value = data.exercises[exerciseIndex].starter;
    saveDraft();
    byId('reset-confirmation').hidden = true;
    byId('check-results').textContent = 'Starter code restored.';
    fitEditor(byId('practice-editor'));
  });
  async function copyCode(text, statusId) {
    try {
      await navigator.clipboard.writeText(text);
      byId(statusId).textContent = 'Code copied';
    } catch (error) {
      const field = document.createElement('textarea');
      field.value = text;
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      byId(statusId).textContent = copied ? 'Code copied' : 'Select the code and copy it manually';
    }
  }
  byId('copy-example').addEventListener('click', () => copyCode(byId('example-editor').value, 'example-status'));
  byId('copy-solutions').addEventListener('click', () => copyCode(data.exercises[solutionIndex].solution, 'solution-status'));
})();
