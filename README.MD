# 🐍 Snake Game

A classic Snake game built with **HTML, CSS and vanilla JavaScript**. The snake moves around the board, eats apples and other fruits, grows longer, and your score goes up. No libraries or frameworks are used, and the board is not a `<canvas>`: every cell is a real `<div>` that JavaScript updates through the **DOM**.

**Author:** Sunny

---

## ✨ Features

- Snake moves smoothly on a 20 x 20 grid
- Eat fruits (🍎 🍌 🍇 🍓) to **grow longer** and **increase your score**
- Different fruits give different points
- Game gets **faster** as you eat more
- Live **score**, **snake length** and **high score** (saved in the browser)
- Pause / Resume and Restart
- Game Over screen with final score
- Works with **keyboard** (Arrow keys / WASD) and **on-screen buttons** for mobile
- Responsive design

---

## 📁 Folder Structure

```
snake-game/
│
├── index.html     # Page structure (board, scoreboard, buttons)
├── style.css      # Styling and grid layout
├── script.js      # Game logic (DOM manipulation + event listeners)
└── README.md      # Project documentation
```

---

## 🚀 How to Run

1. Download or clone the project folder.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
3. Click **Start Game** or press **Space**.

No installation or server needed.

---

## 🎮 Controls

| Action          | Keyboard              | Mobile / Mouse        |
|-----------------|-----------------------|-----------------------|
| Move Up         | `↑` or `W`            | ▲ button              |
| Move Down       | `↓` or `S`            | ▼ button              |
| Move Left       | `←` or `A`            | ◀ button              |
| Move Right      | `→` or `D`            | ▶ button              |
| Start / Pause   | `Space`               | Start / Pause button  |
| Restart         | -                     | Restart button        |

---

## 🧠 What I Learned (DOM & Events)

### DOM Manipulation
- Selecting elements: `document.getElementById()`, `document.querySelectorAll()`
- Creating elements: `document.createElement("div")`
- Adding elements to the page: `appendChild()`
- Changing text: `textContent`
- Changing styles with classes: `classList.add()`, `classList.remove()`
- Reading custom attributes: `data-dir` with `dataset`

### Event Listeners
- `keydown` event to control the snake with the keyboard
- `click` event for Start, Pause, Restart and on-screen arrow buttons
- `event.key` and `event.preventDefault()` to read keys and stop page scrolling

### JavaScript Concepts
- Arrays (the snake is an array of `{x, y}` positions)
- Objects, functions and arrow functions
- `setInterval` / `clearInterval` for the game loop
- `Math.random()` for random food placement
- `localStorage` to save the high score

---

## ⚙️ How the Game Works

1. The board is a CSS grid. JavaScript creates 400 `div` cells and stores them in an array.
2. The snake is an array of coordinates. Every tick, a new head is added in the current direction.
3. If the head lands on food, the tail is **kept** (snake grows) and the score increases.
4. Otherwise the tail is removed, so the snake just moves.
5. If the head hits a wall or its own body, the game ends.
6. `draw()` updates cell classes (`snake`, `head`) and puts the fruit emoji in the food cell.

---

## 🔧 Ideas to Improve

- Add sound effects
- Add difficulty levels (easy / medium / hard)
- Add obstacles or walls inside the board
- Let the snake pass through walls
- Add a leaderboard

---

## 👨‍💻 Author

**Sunny KUMAR **
Made as a practice project to learn JavaScript DOM manipulation and event listeners.

---

## 📄 License

Free to use for learning and practice.