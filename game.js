// Iteration 2: Generate 2 random number and display it on the screen
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
let randomnumber1= Math.round(Math.random()*100);
let randomnumber2= Math.round(Math.random()*100);
number1.textContent=randomnumber1
number2.innerHTML=randomnumber2

// Iteration 3: Make the options button functional
const greaterthan=document.getElementById("greater-than")
const equalsto=document.getElementById("equal-to")
const lesserthan=document.getElementById("lesser-than")

let score=0
// greaterthan.addEventListener("click",e=>{if(number1>number2){score++; resettime(timerid)}else{location.href="gameover.html"}})


greaterthan.onclick=()=>{
    if(randomnumber1>randomnumber2){
        score++;
        resettime(timerid)}
    else{
        location.href="gameover.html"
    }
    randomnumber1=Math.round(Math.random()*100);
    number1.innerHTML=randomnumber1;
    randomnumber2=Math.round(Math.random()*100);
    number2.innerHTML=randomnumber2;
}

equalsto.onclick=()=>{
    if(randomnumber1==randomnumber2){
        score++;
    resettime(timerid)}
    else{
        location.href="gameover.html"
    }
    randomnumber1=Math.round(Math.random()*100);
    number1.innerHTML=randomnumber1;
    randomnumber2=Math.round(Math.random()*100);
    number2.innerHTML=randomnumber2;
}

lesserthan.onclick=()=>{
    if(randomnumber1<randomnumber2){
        score++;
    resettime(timerid)}
    else{
        location.href="gameover.html"
    }
    randomnumber1=Math.round(Math.random()*100);
    number1.innerHTML=randomnumber1;
    randomnumber2=Math.round(Math.random()*100);
    number2.innerHTML=randomnumber2;
}

// Iteration 4: Build a timer for the game
var time=5
var  timer=document.getElementById("timer");
var timerid;
function starttimer(){
    time=5;
    timer.innerHTML=time;
    timerid=setInterval(()=>{
        time--;
        if(time==0){
            location.href="gameover.html";
        }
        timer.innerHTML=time;
    },1000)
    localStorage.setItem("score",score)
}

function resettime(intervalid){
    clearInterval(intervalid);
    starttimer();
}
starttimer();