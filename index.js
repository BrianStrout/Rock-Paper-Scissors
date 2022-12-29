// import test from "./modules/first.js";
// import computerPlay from "./modules/computerplay.js";
// import battle from "./modules/battle";

//EXISTING
let hand = "";
const lastResult = document.querySelector(".lastResult");
const scoreBoard = document.querySelector(".score");
const roundBoard = document.querySelector(".round");
const declare = document.querySelector(".declare");
const reset = document.querySelector(".reset");
const dictateHeader = document.getElementById("dictateHeader");
const p1HealthBar = document.getElementById("p1HealthBar");
const compHealthBar = document.getElementById("compHealthBar");
let pScore = 0;
let pHealth = 100;
let cHealth = 100;
let cScore = 0;
let roundCount = 1;
let validThrow = true;
let ready = true;

function resetter() {
  console.log("reset activated");
  pScore = 0;
  cScore = 0;
  roundCount = 1;
  lastResult.textContent = "";
  lastResult.style.backgroundColor = "transparent";
  scoreBoard.textContent = ``;
  scoreBoard.style.backgroundColor = "white";
  roundBoard.textContent = ``;
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

// Computer selects move
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
function dressAndGoPlayer(outfit) {
  console.log("dressed up as" + outfit);
}
function dressAndGoComputer(outfit) {
  return;
}
function delegateDamage(winner) {
  setDictate(winner);
}
function setDictate(winner) {
  console.log(winner + "..settibng dictations");
  switch (winner) {
    case "tie":
      dictateHeader.textContent = "tie..";
      break;

    case "player":
      dictateHeader.textContent = "HIT!";
      break;

    case "comp":
      dictateHeader.textContent = "OOF!";
      break;
  }

  japanimation(winner);
}
function dictate() {
  dictateHeader.classList.remove("dictateOFFSCREEN");
  dictateHeader.classList.add("dictateDance");
}

function japanimation(winner) {
  updateHealth(winner);

  dictate();
}
function updateHealth(winner) {
  switch (winner) {
    case "tie":
      break;
    // FLASHBOTH

    case "player":
      cHealth = cHealth - 25;
      console.log(cHealth);
      compHealthBar.style.width = `${cHealth}%`;
      break;
    //  flash compueter

    case "comp":
      pHealth = pHealth - 25;
      console.log(pHealth);
      p1HealthBar.style.width = `${pHealth}%`;
      break;
    // flash player
  }

  setTimeout(() => {
    goAgain();
  }, 2000);
}

function goAgain() {
  console.log("going again..");

  dictateHeader.classList.add("dictateOFFSCREEN");
  dictateHeader.classList.remove("dictateDance");
  ready = true;
}

function preBattle(playerSelection, computerSelection) {
  ready = false;
  dressAndGoPlayer(playerSelection);
  dressAndGoComputer(computerSelection);
  battle(playerSelection, computerSelection);
}
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
  //rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    delegateDamage("tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    delegateDamage("comp");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    delegateDamage("player");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    delegateDamage("tie");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    delegateDamage("comp");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    delegateDamage("player");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    delegateDamage("tie");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    delegateDamage("comp");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    delegateDamage("player");
  }
}
function round() {
  // shoot();
  if (validThrow === true) {
    preBattle(hand, computerPlay());
  }
}

// Player selects move

rock.addEventListener("click", function () {
  if (ready) {
    hand = "rock";
    console.log(hand + " was thrown");
    round();
  } else {
    return;
  }
});

paper.addEventListener("click", function () {
  if (ready) {
    hand = "paper";
    console.log(hand + " was thrown");
    round();
  } else {
    return;
  }
});

scissors.addEventListener("click", function () {
  if (ready) {
    hand = "scissors";
    console.log(hand + " was thrown");
    round();
  } else {
    return;
  }
});

// if (playerSelection === "rock" && computerSelection === "rock") {
//   verdict = "TIE! Try again!";
//   console.log(verdict);
//   lastResult.textContent = "TIE! Try again!";
//   lastResult.style.backgroundColor = "orange";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "rock" && computerSelection === "paper") {
//   verdict = "You lose! You threw rock and the computer threw paper";
//   console.log(verdict);
//   cScore++;
//   lastResult.textContent =
//     "You lose! You threw rock and the computer threw paper";
//   lastResult.style.backgroundColor = "red";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "rock" && computerSelection === "scissors") {
//   verdict = "You win! You threw rock and the computer threw scissors";
//   console.log(verdict);
//   pScore++;
//   lastResult.textContent =
//     "You win! You threw rock and the computer threw scissors";
//   lastResult.style.backgroundColor = "green";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }

//   //paper
// } else if (playerSelection === "paper" && computerSelection === "paper") {
//   verdict = "TIE! Try again!";
//   console.log(verdict);
//   lastResult.textContent = "TIE! Try again!";
//   lastResult.style.backgroundColor = "orange";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "paper" && computerSelection === "scissors") {
//   verdict = "You lose! You threw paper and the computer threw scissors";
//   console.log(verdict);
//   cScore++;
//   lastResult.textContent =
//     "You lose! You threw paper and the computer threw scissors";
//   lastResult.style.backgroundColor = "red";
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "paper" && computerSelection === "rock") {
//   verdict = "You win! You threw paper and the computer threw rock";
//   console.log(verdict);
//   pScore++;
//   lastResult.textContent =
//     "You win! You threw paper and the computer threw rock";
//   lastResult.style.backgroundColor = "green";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }

//   //scissors
// } else if ( playerSelection === "scissors" && computerSelection === "scissors") {
//   verdict = "TIE! Try again!";
//   console.log(verdict);
//   lastResult.textContent = "TIE! Try again!";
//   lastResult.style.backgroundColor = "orange";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "scissors" && computerSelection === "rock") {
//   verdict = "You lose! You threw scissors and the computer threw rock";
//   console.log(verdict);
//   cScore++;
//   lastResult.textContent =
//     "You lose! You threw scissors and the computer threw rock";
//   lastResult.style.backgroundColor = "red";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// } else if (playerSelection === "scissors" && computerSelection === "paper") {
//   verdict = "You win! You threw rock and the computer threw scissors";
//   console.log(verdict);
//   pScore++;
//   lastResult.textContent =
//     "You win! You threw rock and the computer threw scissors";
//   lastResult.style.backgroundColor = "green";
//   scoreBoard.textContent = `The score is PLAYER : ${pScore} & COMPUTER: ${cScore}`;
//   if (pScore === cScore) {
//     scoreBoard.style.backgroundColor = "orange";
//   }
//   if (pScore > cScore) {
//     scoreBoard.style.backgroundColor = "green";
//   }
//   if (pScore < cScore) {
//     scoreBoard.style.backgroundColor = "red";
//   }
// }
