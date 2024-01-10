const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let computscore=document.querySelector("#computer");
let usersscore=document.querySelector("#user");
let userscore=0;
let compscore=0;


const displaywinner=(userwin,computerchoice,userchoice)=>{
if(userwin){
    console.log("you win!");
    msg.innerText="you win!";
    msg.style.backgroundColor="blue";
    userscore++;
    usersscore.innerText=userscore;


}
else{
    console.log("you lose!");
    msg.innerText="you lose!"
    msg.style.backgroundColor="red";
    compscore++;
    computscore.innerText=compscore;
}
}


const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game draw,Play again!";
    msg.style.backgroundColor="green";
}


const gencompchoice=()=>{
    let choice=["Rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    return choice[index];
}

const playGame=(userchoice)=>{
console.log("userchoice is =",userchoice);
let computerchoice =gencompchoice();
console.log("computer choice =",computerchoice)

if(userchoice===computerchoice){
    drawGame();
}else{
    let userwin=true;
    if(userchoice=="rock"){
        //paper,scissor
 userwin=computerchoice=="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=computerchoice=="scissor"?false:true;
    }
    else{
        userwin=computerchoice=="rock"?false:true;
    }
    displaywinner(userwin,computerchoice,userchoice);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        const userchoice=choice.getAttribute("id");
        
        playGame(userchoice)
        
    })
    
})