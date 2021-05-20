var oneSquare = document.querySelectorAll(".oneSquare");
var resultsDiv = document.querySelector(".results-div");
var counter = 0;
var resetBtn = document.querySelector(".reset-btn");
var playerOne = document.querySelector(".side-player-one .players");
var playerTwo = document.querySelector(".side-player-two .players");
var numP1Wins = 0;
var numP2Wins = 0;
var scoreTally = document.querySelectorAll(".scoreTally"); 


function placeMark(event){
    var mark = event.target;
    

    if (counter % 2 === 0){
        mark.textContent = "X";
        mark.style.pointerEvents = 'none';

        playerTwo.classList.add("playerTurn");
        playerOne.classList.remove("playerTurn");
    } else {
        mark.textContent = "O";
        mark.style.pointerEvents = 'none';


        playerOne.classList.add("playerTurn");
        playerTwo.classList.remove("playerTurn");
    } 
    counter++;


    
    var isPlayer1Winner = isWinner("X");
    var isPlayer2Winner = isWinner("O");
    
    if(isTie()){
        resultsDiv.textContent = "Results are in: It's a tie. Play again?";
    };

    if(isPlayer1Winner){
        resultsDiv.textContent = "Results are in: Player 1 is the winner. Play again?";
        disableGrid();
        numP1Wins++;
        scoreTally[0].textContent = numP1Wins;

    } else if(isPlayer2Winner){
        resultsDiv.textContent = "Results are in: Player 2 is the winner. Play again?";
        disableGrid();
        numP2Wins++;
        scoreTally[1].textContent = numP2Wins;
    }
}

function isTie(){
    for(var i = 0; i < oneSquare.length; i++){
        //if all boxes has content (true) return false  
        if(oneSquare[i].textContent === ""){
            return false;
        }
    }
    return true;
}
function disableGrid(){
    for (var i = 0; i < oneSquare.length; i++){
        oneSquare[i].style.pointerEvents = 'none';
    }
}

//there are 8 cases
//left down to right down
//


// returns true if "input" is a winning line, false if not
function isWinner(input){
    var square1 = oneSquare[0].textContent;
    var square2 = oneSquare[1].textContent;
    var square3 = oneSquare[2].textContent;
    var square4 = oneSquare[3].textContent;
    var square5 = oneSquare[4].textContent;
    var square6 = oneSquare[5].textContent;
    var square7 = oneSquare[6].textContent;
    var square8 = oneSquare[7].textContent;
    var square9 = oneSquare[8].textContent;

        //Now checking columns
    if(square1 === input && square4 === input && square7 === input){
        return true;
    } else if(square2 === input && square5 === input && square8 === input){
        return true;
    } else if (square3 === input && square6 === input && square9 === input){
        return true;
        //Now checking for rows
    } else if (square1 === input && square2 === input && square3 === input){
        return true;
    } else if (square4 === input && square5 === input && square6 === input) {
        return true; 
    } else if (square7 === input && square8 === input && square9 === input) {
        return true;
        //Now checking for diagonals
    } else if(square1 === input && square5 === input && square9 === input){
        return true;
    } else if(square3 === input && square5 === input && square7 === input){
        return true;
    } else {
        return false;
    }
}

function reset(){
    for(var i = 0; i < oneSquare.length; i++){
        counter = 0;
        oneSquare[i].textContent = "";
        oneSquare[i].style.pointerEvents = "auto";
    }
    resultsDiv.textContent = "";
}


for(var i = 0; i < oneSquare.length; i++){
    oneSquare[i].addEventListener("click", placeMark);
}


resetBtn.addEventListener("click", reset);




//addclassList? data-num = "Player one" or refer to golf app "Player one wins instead of X wins"
//highlight player
//style .class::before cursor set to no click or something > addClassList 
// add a scoreCount / tally maybe draw it out
//when there is a winner make unclickable
