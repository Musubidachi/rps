//npm install 
//npm install --save packagename (prompt-save or jsbeautify)
//npm install -g packagename

var prompt = require('prompt-sync')();

//var UserSelection = prompt('Enter your choice \n\t Rock(0) \n\t Paper(1) \n\t Scissor(2)\n\n\n');
var UserSelection = prompt('Enter your choice - Rock - Paper - Scissors');

/* Solution 1*/

var UserSelection = prompt('Rock(0) , Paper(1), Scissor(2)');
UserSelection = Number.parseInt(UserSelection);
//console.log("resp " , UserSelection);


while(true){
    if(!isNaN(UserSelection) && UserSelection >=0 && UserSelection <=2){
        break;
    }
    console.log("Please enter a valid choice");
    UserSelection = prompt('Rock(0) , Paper(1), Scissor(2)');
}
var rock = 0;
var paper = 1;
var scissor = 2;
var compChoice = Math.floor(100*Math.random()%3);

if(UserSelection === compChoice){
    //tie
    console.log("Tie!");
}else if((UserSelection === 0 && compChoice === 1)||
        (UserSelection === 1 && compChoice ===2)||
        (UserSelection === 2 && compChoice ===0)){
    //loss
    console.log("You lose!");
}else if((UserSelection === 0 && compChoice === 2)||
        (UserSelection ===1 && compChoice === 0 )||
        (UserSelection===2 && compChoice ===1)){
    //win
    console.log("You win!");
}

console.log("You chose " , UserSelection , " computer chose " , compChoice);