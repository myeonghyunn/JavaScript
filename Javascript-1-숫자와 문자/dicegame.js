var a = Math.floor(Math.random()*6+1);
var b = Math.floor(Math.random()*6+1);

alert("Your number is " + a);
alert("Computer's number is " + b);

if (a > b) {
  alert("You won the dice game!");
}

if (b > a) {
  alert("Computer won the dice game!");
}

if (a == b) {
  alert("The game ended in draw")
}