let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    //rock,paper,scissors
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
        msg.style.color="White";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="White";
    }
};

const playGame = (userchoice) =>{
    
    //Generate the Computer's choice -> modular
    const compchoice = gencompchoice();
    

    if(userchoice === compchoice){
        //Draw case
       
        msg.innerText = "It's a Draw. Try Again";
        msg.style.backgroundColor="midnightblue";
        msg.style.color="White";
    }
    else{
        let userwin = true;
        if(userchoice ==="rock"){
           userwin = compchoice === "paper"?false:true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "rock"?true:false;
        }
        else{
            userwin = compchoice === "rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }   
}

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userchoice = option.getAttribute("id");
        playGame(userchoice);
    })
})