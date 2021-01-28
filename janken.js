function computerPlay(){
    let result = Math.random()*100%3;
    return result;
}

let countPC=0;
let countUser=0;

function playRound(){
    let playerSelection=this;
    let computerSelection=computerPlay();
    if(playerSelection===computerSelection){
        document.getElementById("victory-defeat-tie").innerHTML="TIE";
    }else{
        if(playerSelection===0){
            if(computerSelection===1){
                document.getElementById("victory-defeat-tie").innerHTML="VICTORY";
                countUser++;
                document.getElementById("web-user-score").innerHTML=countUser;
            }else{
                document.getElementById("victory-defeat-tie").innerHTML="DEFEAT";
                countPC++;
                document.getElementById("npc-score").innerHTML=countUser;
            }
        }
        else if(playerSelection===1){
            if(computerSelection===2){
                document.getElementById("victory-defeat-tie").innerHTML="VICTORY";
                countUser++;
                document.getElementById("web-user-score").innerHTML=countUser;
            }else{
                document.getElementById("victory-defeat-tie").innerHTML="DEFEAT";
                countPC++;
                document.getElementById("npc-score").innerHTML=countUser;
            }
        }
        else{
            if(computerSelection===0){
                document.getElementById("victory-defeat-tie").innerHTML="VICTORY";
                countUser++;
                document.getElementById("web-user-score").innerHTML=countUser;
            }else{
                document.getElementById("victory-defeat-tie").innerHTML="DEFEAT";
                countPC++;
                document.getElementById("npc-score").innerHTML=countUser;
            }
        }
    }
}

document.getElementById("paper").addEventListener("click",playRound);
document.getElementById("rock").addEventListener("click",playRound);
document.getElementById("scissor").addEventListener("click",playRound);

