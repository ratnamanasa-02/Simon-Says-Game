let level=0;
let started=false;

let gameSeq=[];
let userSeq=[];
let btns=["A","B","C","D"];
let mx=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
    
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level} `;
    userSeq=[];

    //flash
    let random=Math.floor(Math.random()*4);
    let randomColor=btns[random];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    btnflash(randBtn);
    
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(mx<level){
            mx=level;
        }
        h2.innerHTML=`Game over your Score is <b>${level}</b><br> Your Max Score is ${mx} <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        level=0;
        gameSeq=[];
        userSeq=[];
        started=false;
    }
}

function btnPress(){
    let userColor=this.getAttribute("class");
    let btn=this;
    userflash(btn);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll("button");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
