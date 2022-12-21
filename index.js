let hand = "";
const lastResult = document.querySelector(".lastResult");
const scoreBoard = document.querySelector(".score");
const roundBoard = document.querySelector(".round");
const declare = document.querySelector(".declare");
const reset = document.querySelector(".reset");
let pScore = 0;
let cScore = 0;
let roundCount = 1;
let validThrow = true;

function resetter() {
  console.log("reset activated");
  pScore = 0;
  cScore = 0;
  roundCount = 1;
  lastResult.textContent = "";
  lastResult.style.backgroundColor = "white";
  scoreBoard.textContent = ``;
  scoreBoard.style.backgroundColor = "white";
  roundBoard.textContent = ``;
  guessField.value = "";
}

function shoot() {
  var test = document.getElementById("guessField").value;
  adjust(test);
  hand = test;
  console.log("hand is now:" + hand);
  console.log(validThrow);
}

function adjust(raw) {
  let adjusted;
  let uncased = raw;
  let cased = uncased.toLowerCase();
  switch (cased) {
    case "rock":
      adjusted = "rock";
      validThrow = true;
      return adjusted;

      break;
    case "paper":
      adjusted = "paper";
      validThrow = true;
      return adjusted;
      break;
    case "scissors":
      adjusted = "scissors";
      validThrow = true;
      return adjusted;
      break;
    default:
      alert("incorrect input!");
      validThrow = false;
      break;
  }
}
// we have standarded accepted answers

function computerPlay() {
  const roll = Math.floor(Math.random() * 3 + 1);
  let compHand = "";

  if (roll === 1) {
    compHand = "rock";
  } else if (roll === 2) {
    compHand = "paper";
  } else if (roll === 3) {
    compHand = "scissors";
  }
  return compHand;
}
//computer has decided what to throw

//fight time
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

function round() {
  shoot();
  if (validThrow === true) {
    battle(hand, computerPlay());
  }
}
