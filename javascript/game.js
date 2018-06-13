
//Initial Global variables 
var randomNum = 0;
var randomCrystalOne = 0;
var randomCrystalTwo = 0;
var randomCrystalThree = 0;
var randomCrystalFour = 0;
var result = 0;  
var arrNum = [];
var win = 0;
var loss = 0;
   
//Start the game
// When the game begins again, the player should see a new random number between 19 and 120 
//all the crystals will have four new hidden values between 1 and 12 everytime the game starts
//score counter will reset to zero initially then updates if page not refreshed
//GENERATING ALL THE ABOVE STEPS HERE

function startGame(){
    console.log("win: " + win + " and loss: " + loss);

    // Generate random number between 19 and 120 everytime the game starts
    randomNum = Math.floor(Math.random()*101 + 20);
    $("#randomNumber").text(randomNum);
    console.log("random number " + randomNum);

    //all the crystals will have four new hidden values between 1 and 12 everytime the game starts
    arrNum = [];
    console.log(arrNum);
    for (var i = 0; i <= 3; i++){
        arrNum[i] = Math.floor(Math.random()*12 + 1);
    } 
    
    //New values of the crystals everytime the game starts
    randomCrystalOne = arrNum[0];
    randomCrystalTwo = arrNum[1];
    randomCrystalThree = arrNum[2];
    randomCrystalFour = arrNum[3];

    console.log(randomCrystalOne, randomCrystalTwo, randomCrystalThree, randomCrystalFour);

    ////total score counter will set to zero everytime the game starts. (local variable)
    result = 0;
    $("#totalScore").text(result);
    
    //Win and loss tracker initial value shown on global variable 
    $("#win").text(win);
    $("#loss").text(loss);
}
 
//On click ADD the value to result and COMPARE the result with random Number 
$("#crystal1").on("click", function(){
    result = result + randomCrystalOne;
    compareNum();
    console.log(result, randomCrystalOne, randomNum);
    //total score to be shown on HTML
    $("#totalScore").text(result);
})

$("#crystal2").on("click", function(){
    result = result + randomCrystalTwo;
    compareNum();
    console.log(result, randomCrystalTwo, randomNum);
    //total score to be shown on HTML  
    $("#totalScore").text(result);
})

$("#crystal3").on("click", function(){
    result = result + randomCrystalThree;
    compareNum();
    console.log(result, randomCrystalThree, randomNum);
    //total score to be shown on HTML  
    $("#totalScore").text(result);
})

$("#crystal4").on("click", function(){
    result = result + randomCrystalFour;
    compareNum();    
    console.log(result, randomCrystalFour, randomNum);
    //total score to be shown on HTML  
    $("#totalScore").text(result);
})

//function to compare win and loss 
//Track win and loss
function compareNum(){
    if (result === randomNum){
        //add win to win total
        win++;        
        startGame();
    }
    else if (result > randomNum){
        //add loss to loss total
        loss++;
        startGame();
    }
}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame()

// The app should show the number of games the player wins and loses. To that end, 
//do not refresh the page as a means to restart the game.
//USE TO TRACK WINNING AND LOSSING 


