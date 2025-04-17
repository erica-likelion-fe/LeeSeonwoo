let answer = Math.floor(Math.random() * 100) + 1;
let chances = 10;
let gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("guessInput");
  const result = document.getElementById("resultText");
  const chanceDisplay = document.getElementById("chances");
  const button = document.getElementById("submitBtn");

  button.addEventListener("click", () => {
    if (gameOver) return;

    const guess = input.value;

    if (!isNumeric(guess)) {
      result.textContent = "숫자를 입력해주세요!";
      return;
    }

    const num = parseInt(guess);

    if (num < 1 || num > 100) {
      result.textContent = "1부터 100 사이의 숫자를 입력해주세요.";
      return;
    }

    chances--;
    chanceDisplay.textContent = chances;

    if (num === answer) {
      result.textContent = `정답입니다! ${answer}`;
      endGame();
    } else if (num < answer) {
      result.textContent = `${num} 🔼 UP!`;
    } else {
      result.textContent = `${num} 🔽 DOWN!`;
    }

    if (chances <= 0 && num !== answer) {
      result.textContent = `기회를 모두 사용했습니다! 정답은 ${answer}였습니다.`;
      endGame();
    }

    input.value = "";
  });

  function endGame() {
    gameOver = true;
    input.disabled = true;
    button.disabled = true;
  }

  function isNumeric(value) {
    return value.trim() !== "" && !isNaN(value);
  }
});