var oneSquare = document.querySelectorAll(".oneSquare");
var resultsDiv = document.querySelector(".results-div");
var counter = 0;
var resetBtn = document.querySelector(".reset-btn");

function placeMark(event){
    // console.log("MEOW, I'M TRAPPED");
    var mark = event.target;
    
    if (counter % 2 === 0){
        mark.textContent = "MEOW, I'M TRAPPED";
        mark.style.pointerEvents = 'none'; 
    } else {
        mark.textContent = "WTF KITTY";
        mark.style.pointerEvents = 'none';
    } 
    counter++;
    if(isTie()){
        resultsDiv.textContent = "Results are in: It's a tie"
    };
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


//there are 8 cases
//left down to right down
//
function isMeowWinner(){
    if(oneSquare[0].textcontent === "MEOW, I'M TRAPPED" && oneSquare[0].textContent === oneSquare[3].textContent && oneSquare[0].textContent === oneSquare[6].textContent){
        console.log("CAT");
    } else if(oneSquare[0].textcontent === "MEOW, I'M TRAPPED" && oneSquare[1].textContent === oneSquare[4].textContent && oneSquare[1].textContent === oneSquare[7].textContent){
        console.log("LOG");
    } else if(oneSquare[0].textcontent === "MEOW, I'M TRAPPED" && oneSquare[2].textContent === oneSquare[5].textContent && oneSquare[2].textContent === oneSquare[8].textContent){
        console.log("FEED ME");
    } else if(oneSquare[0].textcontent === "MEOW, I'M TRAPPED" && oneSquare[0].textContent === oneSquare[1] && oneSquare[0] === oneSquare[2]){
        console.log("PIE");
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


resetBtn.addEventListener("click", reset)



//if (x === y === z) to check conditions or if(x === y && x === z)
//addclassList? data-num = "Player one" or refer to golf app "Player one wins instead of X wins"
//highlight player
//style .class::before cursor set to no click or something > addClassList 
// add a scoreCount / tally maybe draw it out
//when there is a winner make unclickable
