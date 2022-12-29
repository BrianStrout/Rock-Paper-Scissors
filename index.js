// import test from "./modules/first.js";
// import computerPlay from "./modules/computerplay.js";
// import battle from "./modules/battle";

//EXISTING
let hand = "";
const lastResult = document.querySelector(".lastResult");
const scoreBoard = document.querySelector(".score");
const roundBoard = document.querySelector(".round");
const declare = document.querySelector(".declare");

const dictateHeader = document.getElementById("dictateHeader");
const p1HealthBar = document.getElementById("p1HealthBar");
const compHealthBar = document.getElementById("compHealthBar");
const player1Avatar = document.getElementById("player1Avatar");
const computerAvatar = document.getElementById("computerAvatar");
const winnerDiv = document.getElementById("winnerDiv");
const loserDiv = document.getElementById("loserDiv");
const resetBut = document.getElementById("r");

let pScore = 0;
let pHealth = 100;
let cHealth = 100;
let cScore = 0;
let roundCount = 1;
let validThrow = true;
let ready = true;

function resetter() {
  // console.log("reset activated");
  roundBoard.textContent = `Back for more!`;
  p1HealthBar.style.width = "100%";
  compHealthBar.style.width = "100%";
  pHealth = 100;
  cHealth = 100;
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

  player1Avatar.style.backgroundImage = "url('images/temprock.jpg')";
  player1Avatar.classList.add("player1Attack");
}
function dressAndGoComputer(outfit) {
  // computerAvatar
  computerAvatar.style.backgroundImage = "url('images/tempcomr.jpg')";
  computerAvatar.classList.add("computerAttack");
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

  dictate(winner);
}
function dictate(winner) {
  setTimeout(() => {
    dictateHeader.classList.remove("dictateOFFSCREEN");
    dictateHeader.classList.add("dictateDance");
  }, 500);

  setTimeout(() => {
    japanimation(winner);
  }, 1000);
}

function japanimation(winner) {
  updateHealth(winner);

  // dictate();
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
      computerAvatar.classList.add("computerAvatarHurt");
      break;
    //  flash compueter

    case "comp":
      pHealth = pHealth - 25;
      console.log(pHealth);
      p1HealthBar.style.width = `${pHealth}%`;
      player1Avatar.classList.add("player1AvatarHurt");
      break;
    // flash player
  }

  setTimeout(() => {
    player1Avatar.classList.remove("player1Attack");
    computerAvatar.classList.remove("computerAttack");
    player1Avatar.classList.remove("player1AvatarHurt");
    computerAvatar.classList.remove("computerAvatarHurt");
  }, 1400);

  setTimeout(() => {
    goAgain();
    // player1Avatar.classList.remove("player1Attack");
    // computerAvatar.classList.remove("computerAttack");
  }, 3000);
}

function goAgain() {
  // player1Avatar.classList.remove("player1Attack");
  // computerAvatar.classList.remove("computerAttack");
  console.log("going again..");
  if (pHealth === 0 || cHealth === 0) {
    declareWinner();
  } else {
    ready = true;

    dictateHeader.classList.add("dictateOFFSCREEN");
    setTimeout(() => {
      dictateHeader.classList.remove("dictateDance");
    }, 50);
  }
}

function declareWinner() {
  ready = false;

  if (pHealth === 0) {
    loserDiv.classList.add("gameOverSlip");
  } else if (cHealth === 0) {
    winnerDiv.classList.add("gameOverSlip");
  } else {
    console.log("error");
    return;
  }
}

function preBattle(playerSelection, computerSelection) {
  ready = false;
  dressAndGoPlayer(playerSelection);
  setTimeout(() => {
    dressAndGoComputer(computerSelection);
  }, 500);
  setTimeout(() => {
    battle(playerSelection, computerSelection);
  }, 500);
}
function battle(playerSelection, computerSelection) {
  let verdict = "";
  roundBoard.textContent = `Round: ${roundCount}!`;
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

resetBut.addEventListener("click", () => {
  // console.log("c");
  resetter();
});
