var randomNumber1 = Math.round(Math.random()*6);
if(randomNumber1===1){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice1.png");
}
else if(randomNumber1===2){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice2.png");
}
else if(randomNumber1===3){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice3.png");
}
else if(randomNumber1===4){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice4.png");
}
else if(randomNumber1===5){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice5.png");
}
else if(randomNumber1===6){
  document.querySelector(".dice .img1").setAttribute("src" , "images/dice6.png");
}

var randomNumber2 = Math.round(Math.random()*6);
if(randomNumber2===1){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice1.png");
}
else if(randomNumber2===2){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice2.png");
}
else if(randomNumber2===3){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice3.png");
}
else if(randomNumber2===4){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice4.png");
}
else if(randomNumber2===5){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice5.png");
}
else if(randomNumber2===6){
  document.querySelector(".dice .img2").setAttribute("src" , "images/dice6.png");
}


 if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").innerHTML=("player2 wins🚩")
}
else if (randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML=("🚩player1 wins")
}
else if (randomNumber1===randomNumber2) {
  document.querySelector(".container h1").innerHTML=("draw!")
}
