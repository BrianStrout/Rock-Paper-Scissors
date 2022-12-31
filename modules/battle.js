function battle(playerSelection, computerSelection) {
  let verdict = "";

  roundBoard.textContent = `the round is ${roundCount}`;
  if (roundCount >= 15) {
    if (pScore > cScore) {
      declare.textContent = `you win!`;
    } else if (cScore > pScore) {
      declare.textContent = `you lose!`;
    }
    if (pScore !== cScore) {
      return;
    }
  }

  roundCount++;

  //could have put scorboard uphere :/

  //rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    verdict = "TIE! Try again!";
    console.log(verdict);
    lastResult.textContent = "TIE! Try again!";
    lastResult.style.backgroundColor = "orange";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    verdict = "You lose! You threw rock and the computer threw paper";
    console.log(verdict);
    cScore++;
    lastResult.textContent =
      "You lose! You threw rock and the computer threw paper";
    lastResult.style.backgroundColor = "red";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    verdict = "You win! You threw rock and the computer threw scissors";
    console.log(verdict);
    pScore++;
    lastResult.textContent =
      "You win! You threw rock and the computer threw scissors";
    lastResult.style.backgroundColor = "green";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }

    //paper
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    verdict = "TIE! Try again!";
    console.log(verdict);
    lastResult.textContent = "TIE! Try again!";
    lastResult.style.backgroundColor = "orange";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    verdict = "You lose! You threw paper and the computer threw scissors";
    console.log(verdict);
    cScore++;
    lastResult.textContent =
      "You lose! You threw paper and the computer threw scissors";
    lastResult.style.backgroundColor = "red";
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    verdict = "You win! You threw paper and the computer threw rock";
    console.log(verdict);
    pScore++;
    lastResult.textContent =
      "You win! You threw paper and the computer threw rock";
    lastResult.style.backgroundColor = "green";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }

    //scissors
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    verdict = "TIE! Try again!";
    console.log(verdict);
    lastResult.textContent = "TIE! Try again!";
    lastResult.style.backgroundColor = "orange";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    verdict = "You lose! You threw scissors and the computer threw rock";
    console.log(verdict);
    cScore++;
    lastResult.textContent =
      "You lose! You threw scissors and the computer threw rock";
    lastResult.style.backgroundColor = "red";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    verdict = "You win! You threw rock and the computer threw scissors";
    console.log(verdict);
    pScore++;
    lastResult.textContent =
      "You win! You threw rock and the computer threw scissors";
    lastResult.style.backgroundColor = "green";
    scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
    if (pScore === cScore) {
      scoreBoard.style.backgroundColor = "orange";
    }
    if (pScore > cScore) {
      scoreBoard.style.backgroundColor = "green";
    }
    if (pScore < cScore) {
      scoreBoard.style.backgroundColor = "red";
    }
  }

  // return verdict;
}

export default battle;
