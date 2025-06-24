# 🎮 Rock, Paper, Scissors Game

A browser-based implementation of the classic game built with **HTML5, CSS3, and JavaScript**.  
Try it live: [Demo Link](https://saicharan45v.github.io/Rock-Paper-Scissor/)

  

## Technologies Used
- **Frontend**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript  
- **Version Control**: Git, GitHub  

## How to Run Locally
1. Clone the repo:
   ```bash
   git clone [https://github.com/your-username/rock-paper-scissors.git](https://saicharan45v.github.io/Rock-Paper-Scissor/)

# 🎮 Rock Paper Scissors Game
![Live Demo](https://saicharan45v.github.io/Rock-Paper-Scissor/)


A browser-based implementation of the classic game built with **HTML5, CSS3, and Vanilla JavaScript**.

![Game Screenshot](https://saicharan45v.github.io/Rock-Paper-Scissor/screenshot.png)

## Features
✨ **Responsive design** works on mobile & desktop 
🎨 **CSS animations** for smooth gameplay  
📊 **Score tracking** to compete against the computer  
🔄 **Dynamic updates** using DOM manipulation

## 🛠️ Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Hosting**: GitHub Pages
- **Version Control**: Git & GitHub

## 🚀 Live Demo
Experience the game:  
https://saicharan45v.github.io/Rock-Paper-Scissor/

## 💻 How to Run Locally
```bash
git clone https://github.com/Saicharan45V/Rock-Paper-Scissor.git
cd Rock-Paper-Scissor
open index.html  # Or double-click the file
```

## ⚙️ Code Highlights
- **Game logic**:
  ```javascript
  function checkWinner(player, computer) {
    if (player === computer) return "Draw!";
    if ((player === "ROCK" && computer === "SCISSORS") || 
        (player === "PAPER" && computer === "ROCK") || 
        (player === "SCISSORS" && computer === "PAPER")) {
      return "You Win!";
    }
    return "Computer Wins!";
  }
  ```
- **DOM updates**:
  ```javascript
  function updateScore() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  }
  ```

## 📜 License
MIT © [Sai Charan](https://github.com/Saicharan45V)
