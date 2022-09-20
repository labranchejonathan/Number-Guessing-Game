const answer = Math.floor(Math.random() * 10 + 1);
const submitBtn = document.getElementById("guessbtn");
let guesses = 0;
const guessField = document.getElementById("guessfield");

submitBtn.addEventListener("click", guessGame);

function guessGame() {
  let guess = guessField.value;
  guesses++;
  if (guessField.value === "") return;
  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too small");
  } else {
    alert("Too big");
  }
}
