# Study Tool

Multi-course interactive flashcard and quiz system. Built as a single HTML file with localStorage persistence — no backend, no build tools.

**🔗 [Launch Study Tool](https://fernandodiaz225.github.io/private-study-tool/)**

## Courses

| Course | Topics | Flashcards | T/F Questions |
|--------|--------|-----------|---------------|
| **CSE 450** — Design & Analysis of Algorithms | Stable Matching, Greedy Algorithms, Divide & Conquer | 154 | 116 |
| **CSE 478** — Intro to Machine Learning | *Coming soon* | — | — |
| **CSE 463** — Intro to Human Computer Interaction | *Coming soon* | — | — |

## Features

### 📇 Flashcard Mode
- **Space** to flip, **← →** to navigate
- Mark cards as **✓ Got it** or **★ Review**
- **Filter by status**: Unseen, Review, Got it — study new cards without repeats
- Shuffle mode for randomized practice

### ✅ True/False Quiz Mode
- **T / F** keys to answer, instant feedback with explanations
- Score tracking, retry missed questions

### 📊 Progress Tracking
- Visual progress bars: 🟢 Got it / Correct · 🟡 Review / Incorrect · ⬛ Unseen
- Per-module tracking for both flashcards and quizzes
- Progress shown on course selection screen

### 💾 Persistent Progress
- Saves automatically via localStorage
- Survives refreshes, browser restarts, closing/reopening
- Each course's progress is independent
- Reset button with confirmation dialog

### 📱 PWA Support
- Add to Home Screen for fullscreen app experience
- No browser chrome when launched from home screen

## Adding Content

See **[ADDING_CONTENT.md](ADDING_CONTENT.md)** for detailed instructions on:
- Adding flashcards and T/F questions
- Creating new modules within a course
- Adding entirely new courses
- Data format reference with examples

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Flip flashcard |
| `←` `→` | Previous / Next |
| `T` | Answer True |
| `F` | Answer False |

## Tech Stack

- React 18 (CDN)
- Vanilla CSS
- localStorage for persistence
- Single HTML file, zero build tools
