var input1 = prompt("Please, type a number.");
var bottomNumber = parseInt (input1);
var input = prompt("Please type another number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<h2>" + randomNumber + " is a random number between " + bottomNumber + " and " + topNumber + ".</h2>";
document.write(message);