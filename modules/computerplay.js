export default function computerPlay() {
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
