 
 let input=document.querySelector('input');
 let display=document.querySelector('.display')
 function myButton(){
    let n=input.value;
    let num='';
     
    if(n>0 && n<=20){
        for(let i= 1; i<=10; i++){
          num +=`<div class="row"><span>${n}</span>*<span>${i}</span>= <span>${n*i}</span></div>`      
    }
    display.innerHTML=num

    }else{
         display.innerHTML="Enter a number 1-10"
    }
 
 }
 
  