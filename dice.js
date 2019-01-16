function diceRoll() {
  
  var die1 = Math.floor(Math.random() * 6)+1;
  var die2 = Math.floor(Math.random() * 6)+1;
  var roll = die1+die2;

  console.log("In diceRoll");
  
  
  if(roll==7 || roll==11){
    document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". You win!";
    } else if (roll==2 || roll==3 || roll==12) {
      document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". You lose!";
    } else {
      document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". Better luck next time!";
    }
}
