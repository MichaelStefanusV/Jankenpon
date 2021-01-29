const buttons = document.querySelectorAll('.button');



function resetAll(){
    let player = document.getElementById('web-user-score');  
    let comp = document.getElementById('npc-score');
    let victor= document.getElementById('victory-defeat-tie');
    player.innerHTML=0;
    comp.innerHTML=0;
    victor.innerHTML=``;
}

function winChecker(){
    let player = document.getElementById('web-user-score');  
    let comp = document.getElementById('npc-score');
    let playerScore=+(player.innerHTML);
    let compScore=+(comp.innerHTML);
    if(playerScore===5||compScore===5){
        if(playerScore>compScore){
            return true;
        }else{
            return false;
        }
    }
}

function removeTransition(e){
    console.log(e);
    if(e.propertyName!=='transform'){
        return;
    }else{
        e.target.classList.remove('klik');
    }
}

function pcGenerate(gen){
    if(gen===0){
        return 'rock';
    }else if(gen===1){
        return 'paper';
    }else{
        return 'scissor';
    }
}


function winLoseTie(user,pc){
    let victor= document.getElementById('victory-defeat-tie')
    let player = document.getElementById('web-user-score');  
    let comp = document.getElementById('npc-score');
    let playerScore=+(player.innerHTML);
    let compScore=+(comp.innerHTML);
    
    if(pc===user){
        victor.innerHTML='TIE';
    }else{
        if(user==='rock'){
            if(pc === 'paper'){
                compScore++;
                comp.innerHTML=compScore;
                victor.innerHTML='YOU LOSE';
                false;
            }else{
                playerScore++;
                player.innerHTML=playerScore;
                victor.innerHTML='YOU WIN';
                return true;
            }
        }else if(user==='paper'){
            if(pc === 'rock'){
                playerScore++;
                player.innerHTML=playerScore;
                victor.innerHTML='YOU WIN';
                return true;
            }else{
                compScore++;
                comp.innerHTML=compScore;
                victor.innerHTML='YOU LOSE';
                return false;
            }
        }else {
            if(pc === 'paper'){ 
                playerScore++;
                player.innerHTML=playerScore;
                victor.innerHTML='YOU WIN';
                return true;
            }else{
                compScore++;
                comp.innerHTML=compScore;
                victor.innerHTML='YOU LOSE';
                return false;
            }
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click',function(e){
        let id=button.getAttribute('id');
        button.classList.add('klik');
        console.log(id);
        let gen = Math.floor(Math.random() * Math.floor(3));
        winLoseTie(id,pcGenerate(gen));
        let winner = winChecker();
        if(winner===true){
            alert(`VICTORY`);
            resetAll();
        }else if(winner===false){
            alert('DEFEAT');
            resetAll();
        }
    });
});

buttons.forEach(button=>{
    button.addEventListener('transitionend',removeTransition);
});
