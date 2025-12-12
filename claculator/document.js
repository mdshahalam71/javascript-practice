 

const display=document.getElementById('display');


function apendToDisplay(input){
    display.innerText +=input;
}

function clearToDisplay(input){
    display.innerText='';
}

function calculateToDisplay(){
        try{
            display.innerText=eval(display.innerText);
        }
        catch(error){
            display.innerText='type error'
        }
}