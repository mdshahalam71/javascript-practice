let num1=Math.floor(Math.random()*(1-9)+11);
let num2=Math.floor(Math.random()*(11-20)+21);
let num3=Math.floor(Math.random()*(1-9)+11);

const first=document.querySelector('.first').innerText=num1;
const second=document.querySelector('.second').innerText=num2;
const third=document.querySelector('.third').innerText=num3;
 

function result(x,y,z){
    return x+y+z;
}

const newResult=result(num1,num2,num3);

 document.querySelector('.result').innerText=newResult;

// right side here*************************************************

const display=document.querySelector('.display');
 
function apentToDisplay(input){
        display.innerText +=input;
}
 
function clearToDisplay(){
    const userInput = parseInt(display.innerText) || 0;
     if(userInput===newResult){
          alert("your are right")
     }else{
          alert("you are false")
     }
     display.innerText = '';
     window.location.reload()
}

function delateToDisplay(){
     display.innerText=display.innerText.slice(0,-1);
}


 
 