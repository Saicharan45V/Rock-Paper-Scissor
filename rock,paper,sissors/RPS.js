const roc = document.getElementById("rock");
const pap = document.getElementById("paper");
const sis = document.getElementById("scissor");
const playerch = document.getElementById("player-choice");
const computerch = document.getElementById("computer-choice");
const outcome = document.getElementById("outcome");
const score = document.getElementById("score");
const p = document.getElementById("p");
const q = document.getElementById("q");

let playerscore = 0;
let computerscore = 0;


roc.addEventListener("click", () => playgame("✊"));
pap.addEventListener("click", () => playgame("✋"));
sis.addEventListener("click", () => playgame("✌"));

function playgame(player) {
    if (computerscore < 5 && playerscore < 5) {
        const choices = ["✊", "✋", "✌"];
        const computer = choices[Math.floor(Math.random() * choices.length)];

        playerch.textContent = `You: ${player}`;
        computerch.textContent = `Computer: ${computer}`;

        let result;
        if (player === computer) {
            result = "It's a tie!";
        } else if (
            (player === "✊" && computer === "✌") ||
            (player === "✋" && computer === "✊") ||
            (player === "✌" && computer === "✋")
        ) {
            result = "You win!";
            playerscore++;
        } else {
            result = "Computer wins!";
            computerscore++;
        }


        outcome.textContent = `Result: ${result}`;
        score.textContent = `Score: You ${playerscore}-${computerscore} Computer`;
        if (playerscore > computerscore && playerscore === 5) {
            p.textContent = "You Won!";
            p.style.backgroundColor = "aqua";
            q.textContent = "Reload the site to Re-start Game";
        }
        else if (computerscore > playerscore && computerscore === 5) {
            p.textContent = "Computer Won!";
            p.style.backgroundColor = "aqua";
            q.textContent = "Reload the site to Re-start Game";
        }
    }
}
