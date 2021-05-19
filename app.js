var oneSquare = document.querySelectorAll(".oneSquare");
var resultsDiv = document.querySelector(".results-div");
var counter = 0;

function placeMark(event){
    // console.log("MEOW, I'M TRAPPED");
    var mark = event.target;
    counter++;
    if (counter % 2 === 0){
        mark.textContent = "MEOW, I'M TRAPPED";
        mark.style.pointerEvents = 'none'; 
    } else {
        mark.textContent = "WTF KITTY";
        mark.style.pointerEvents = 'none';
    } 

    if(isTie()){
        resultsDiv.textContent = "It's a tie"
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

for(var i = 0; i < oneSquare.length; i++){
    oneSquare[i].addEventListener("click", placeMark);
}

