
let step = 0;
const gameText = document.getElementById('game-text');
const bark = document.getElementById('bark-sound');
const messages = [
  "Hiya, Super Saver! I'm Dollar Dog — ready to fetch some savings?",
  "You found $5! Save it or buy ice cream?",
  "Great choice! You saved $5!",
  "Oops, you spent it on sprinkles. Maybe next time!",
  "Nice fetch! You're halfway there.",
  "Another chance: buy a toy or save for soccer?",
  "Saved again! Dollar Dog is proud!",
  "You're a budgeting superstar!",
  "Almost done! One last choice...",
  "Final step — make it count!",
  "🎉 You're a Super Saver! Print your badge and show it off! 🎉"
];

function nextStep() {
  if (step < messages.length) {
    gameText.innerText = messages[step];
    bark.play();
    step++;
  } else {
    gameText.innerHTML = "<h2>🏆 Super Saver Badge Unlocked! 🏆</h2><p><a href='badge.png' download>Click here to print your badge</a></p>";
  }
}
