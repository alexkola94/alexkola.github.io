var randomNumber1= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);

var player1= "images/dice" + randomNumber1 + ".png";
var player2= "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", player1);
document.querySelector(".dice .img2").setAttribute("src", player2);

// If loop to show after random dice toss who is the winner
if (randomNumber1 === randomNumber2){
  document.querySelector(".container h1").innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML="Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector(".container h1").innerHTML= "Player 2 Wins";

}
