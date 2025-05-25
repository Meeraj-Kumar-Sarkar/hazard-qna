# ProLang Slayer 🧠🔥

**ProLang Slayer** is a powerful command-line quiz application designed to challenge and improve your knowledge of popular programming languages including **JavaScript**, **Python**, and **C**.

Engage in a vibrant terminal interface, test your coding wits, and survive a thrilling code-slaying experience — but beware: **one wrong answer and it’s Game Over**!

---

## 🚀 Features

- **Language Selection**: Choose between JavaScript, Python, or C.
- **Randomized Questions**: Shuffled using the Fisher-Yates algorithm for a unique experience every time.
- **Interactive CLI**: Built with `inquirer`, styled using `chalk`, `chalk-animation`, and `gradient-string`.
- **Scoring System**: Earn a point for each correct answer.
- **Sudden Death**: A single incorrect answer ends the game.
- **Victory Screen**: Celebrate with styled ASCII art and final score display.
- **Multiple Choice Format**: Consistent and beginner-friendly.
- **Cross-Language Support**: 10 curated questions per language, covering basic to advanced concepts.

---

## 🛠 Prerequisites

- **Node.js**: Version 14 or higher
- **npm**: To install and manage dependencies

---

## ⚡ Installation

### Run Instantly (Recommended)

Use `npx` to run without installing:

```bash
npx hazard-qna
```

### Local Installation (For Developers)

```bash
git clone <repository-url>
cd prolang-slayer
npm install chalk inquirer gradient-string chalk-animation figlet nanospinner console-clear
```

Optional global installation:

```bash
npm install -g hazard-qna
```

---

## 📁 Project Structure

```
prolang-slayer/
├── index.js          # Main application logic
├── javascript.js     # JavaScript question set
├── python.js         # Python question set
├── C.js              # C language question set
```

---

## 🎮 Usage

You can run the app in three different ways:

### 1. Instantly via `npx` (most convenient):

```bash
npx hazard-qna
```

### 2. Locally:

```bash
node index.js
```

### 3. Globally (if installed with `-g`):

```bash
hazard-qna
```

---

## 🧑‍💻 How to Play

1. Launch the app.
2. Select a programming language: `C`, `JavaScript`, or `Python`.
3. Enter your name (optional).
4. Answer each question correctly to proceed.
5. One wrong answer = **Game Over**.

---

## 📸 Example Output

```bash
Welcome to ProLang Slayer
🔥 Code Quiz Challenge 🔥
Welcome! I'm a vibrant process ready to test your JavaScript or Python prowess. 💻
Choose your language and answer the question with precision — one error, and it's GAME OVER! 😎
Unleash your inner code ninja, let your dev spirit shine!
Ready for the epic start? Let’s dive in! 🚀

? Choose the language you want to slay >>> JavaScript
? What is your name? Alice
? JavaScript was created in 10 days then released on
✔ Checking answer... Wo-ooh!! Nice work Alice. That's a legit answer
```

---

## 📦 Dependencies

- [`chalk`](https://www.npmjs.com/package/chalk) – For colorful terminal text.
- [`inquirer`](https://www.npmjs.com/package/inquirer) – Interactive prompts.
- [`gradient-string`](https://www.npmjs.com/package/gradient-string) – Gradient terminal text.
- [`chalk-animation`](https://www.npmjs.com/package/chalk-animation) – Animated terminal messages.
- [`figlet`](https://www.npmjs.com/package/figlet) – ASCII text generation.
- [`nanospinner`](https://www.npmjs.com/package/nanospinner) – Loading animations.
- [`console-clear`](https://www.npmjs.com/package/console-clear) – Clears the terminal screen.

---

## 📝 Notes

- Built on Node.js’s non-blocking event loop.
- Covers both beginner and intermediate-level programming knowledge.
- Exits with:
  - Code `0` on success.
  - Code `1` on game over.
- No score history is saved — fresh start every time.

---

## 🤝 Contributing

We welcome all contributions!

1. Fork the repository.
2. Create a feature branch.
3. Add your changes (e.g., new questions, improvements).
4. Submit a Pull Request with a clear description.

---

## 👨‍🎨 Credits

Crafted by **simon_riley.sas141**  
Inspired by the passion for coding and interactive CLI experiences.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
