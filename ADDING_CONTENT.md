# Adding Content to the Study Tool

This guide explains how to add flashcards and T/F questions for new courses or new modules within existing courses.

## File Structure

Everything lives in `index.html`. The data is in a JavaScript object called `COURSES` near the top of the `<script>` tag.

```
COURSES = {
  cse450: { ... },     ← existing, fully loaded
  cse478: { ... },     ← placeholder, ready for your content
  cse463: { ... },     ← placeholder, ready for your content
}
```

## Course Structure

Each course follows this format:

```javascript
courseid: {
  code: "CSE 478",              // Displayed on the card and header
  name: "Intro to Machine Learning",  // Subtitle
  prof: "Prof. Smith",          // Optional, leave "" if not needed
  color: "#c084fc",             // Accent color (hex)
  storagePrefix: "cse478_",    // MUST be unique per course (used for localStorage keys)
  modules: [ ... ]              // Array of modules (see below)
}
```

### Picking Colors
Some good options that work on the dark background:
- Blue: `#93c5fd`
- Purple: `#c084fc`
- Orange: `#fb923c`
- Green: `#6ee7b7`
- Pink: `#fca5a5`
- Teal: `#5eead4`
- Yellow: `#fde047`

## Module Structure

Each module inside `modules: [...]` looks like this:

```javascript
{
  id: "m1",                        // Must be unique WITHIN this course (m1, m2, m3, etc.)
  label: "Module 1",              // Tab label
  subtitle: "Linear Regression",  // Tab subtitle
  color: "#c084fc",               // Module accent color (can match course or vary)
  flashcards: [ ... ],            // Array of flashcard objects
  trueFalse: [ ... ],             // Array of T/F objects (can be empty [])
}
```

## Flashcard Format

Each flashcard is:

```javascript
{ q: "What is gradient descent?", a: "An optimization algorithm that iteratively moves toward the minimum of a function by following the negative gradient." }
```

- `q` = question (front of card)
- `a` = answer (back of card)

### Example: Adding 3 flashcards

```javascript
flashcards: [
  { q: "What is overfitting?", a: "When a model learns the training data too well, including noise, and performs poorly on unseen data." },
  { q: "What is the bias-variance tradeoff?", a: "Bias = error from wrong assumptions. Variance = error from sensitivity to training data. Reducing one often increases the other." },
  { q: "What is cross-validation?", a: "A technique that splits data into k folds, trains on k-1 and tests on 1, rotating through all folds to estimate generalization performance." },
],
```

## True/False Format

Each T/F question is:

```javascript
{ s: "Linear regression assumes the target variable is categorical.", ans: false, e: "Linear regression assumes a continuous target variable. Logistic regression is used for categorical targets." }
```

- `s` = statement to evaluate
- `ans` = `true` or `false` (the correct answer)
- `e` = explanation shown after answering

### Example: Adding 3 T/F questions

```javascript
trueFalse: [
  { s: "Ridge regression adds an L1 penalty to the loss function.", ans: false, e: "Ridge uses L2 (squared weights). Lasso uses L1 (absolute weights)." },
  { s: "A decision tree with no max depth will always overfit the training data.", ans: true, e: "Without constraints, it will create a leaf for every training point, perfectly memorizing the data." },
  { s: "PCA preserves the original feature interpretability.", ans: false, e: "PCA creates new axes (principal components) that are linear combinations of originals, losing direct interpretability." },
],
```

If you don't have T/F questions for a module yet, just use an empty array:

```javascript
trueFalse: [],
```

## Adding a New Course (Step by Step)

1. Open `index.html` in a text editor
2. Find the `COURSES` object (search for `const COURSES`)
3. Before the closing `};`, add a new course:

```javascript
  newcourse: {
    code: "CSE 999",
    name: "Advanced Basket Weaving",
    prof: "Prof. Weaver",
    color: "#5eead4",
    storagePrefix: "cse999_",
    modules: [
      {
        id: "m1", label: "Module 1", subtitle: "Basic Patterns", color: "#5eead4",
        flashcards: [
          { q: "Your question here", a: "Your answer here" },
        ],
        trueFalse: [
          { s: "Your statement here", ans: true, e: "Your explanation here" },
        ],
      },
    ],
  },
```

4. Save and push to GitHub

## Adding a New Module to an Existing Course

1. Find the course in `COURSES`
2. Inside its `modules: [...]` array, add a new object after the last module:

```javascript
      {
        id: "m4", label: "Module 4", subtitle: "New Topic", color: "#c084fc",
        flashcards: [
          { q: "Question", a: "Answer" },
        ],
        trueFalse: [],
      },
```

3. Make sure the `id` is unique within that course (m1, m2, m3, m4...)

## Important Rules

1. **storagePrefix must be unique per course** — this is how localStorage keeps courses separate
2. **Module id must be unique within a course** — but can repeat across courses (both can have "m1")
3. **Watch your commas** — every object in an array needs a comma after it except the last one
4. **Use single quotes for strings** OR escape double quotes inside double-quoted strings
5. **Special characters**: Use Unicode escapes for math symbols:
   - `\u2264` = ≤
   - `\u2265` = ≥
   - `\u00b2` = ² (superscript 2)
   - `\u00b3` = ³
   - `\u2208` = ∈
   - `\u2192` = →
   - `\u2014` = — (em dash)
   - Or just paste the Unicode character directly — modern browsers handle it fine

## Testing Locally

Just open `index.html` in your browser — double-click the file. No server needed. Check the browser console (F12 → Console) for any JavaScript errors if something looks wrong.

## localStorage Keys

Progress is stored with this pattern:
```
{storagePrefix}{moduleId}_fc_status   → flashcard got/review marks
{storagePrefix}{moduleId}_tf_answers  → T/F quiz answers
```

Example: `cse478_m2_fc_status` stores Module 2 flashcard progress for CSE 478.

Each course's data is completely independent — resetting CSE 450 won't touch CSE 478.
