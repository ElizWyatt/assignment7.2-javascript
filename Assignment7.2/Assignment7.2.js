var secretNumber = 21;
var number = prompt("Guess a number.");


if (number == secretNumber) {
    alert("You got it right.");
} else if (number > secretNumber) {
    alert("Your number is too high, guess again.");
} else {
    alert("Your number is too low, guess again.");
}