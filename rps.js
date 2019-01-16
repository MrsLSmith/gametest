function playRPS() {
    var user = document.getElementById("userInput");
    user = user.value.toLowerCase();
    document.getElementById("userOutput").innerHTML = "User chose " + user;
    var computer = compInput();
    document.getElementById("computerOutput").innerHTML = "Computer chose " + computer;
  
   //rps game plays here  
  if (user == computer) {
          document.getElementById("rpsOutput").innerHTML = "It's a tie";      
     } else if (user == 'rock' && computer == 'scissors'||user=='scissors'&&computer=='paper'||user=='paper'&&computer=='rock') {
          document.getElementById("rpsOutput").innerHTML = "You win!";
        } else {
            document.getElementById("rpsOutput").innerHTML = "You lose!"
        }
}
    
  // random function to create the computer's input
  function compInput(){
    var computer = Math.floor(Math.random() * 3) + 1;
    if (computer==1) {
      computer="rock";
    } else if (computer==2) {
      computer="paper";
    } else {
      computer="scissors";
    }
    return computer;
  }
