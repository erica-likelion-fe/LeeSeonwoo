const answer = Math.floor(Math.random() * 100) + 1;
let chances = 10;
let isCorrect = false;

function isValidNumber(value) {
    const num = parseInt(value);
    return num === num && num >= 1 && num <= 100;
}

function playGame(){
    while (chances > 0){
        let input = prompt(`1부터 100 사이 숫자를 입력하세요. (남은 기회: ${chances})`);

        if (input === null) {
            alert("게임이 취소되었습니다.");
            return;
        }

        if (!isValidNumber(input)){
            alert(" 1부터 100 사이의 숫자만 입력해주세요.");
            continue;
        }

        const guess = parseInt(input);
        chances--;

        if (guess === answer) {
            alert("축하합니다! 맞추셨습니다!");
            isCorrect = true;
            break;
        } else if (guess < answer){
            alert(`UP! (남은 기회: ${chances})`);
        } else{
            alert(`DOWN! (남은 기회: ${chances})`);
        }
    }
    if (!isCorrect && chances === 0){
        alert(` 실패! 정답은 ${answer}였습니다`);
    }
}

playGame();