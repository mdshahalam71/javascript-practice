function clear(){
    document.querySelector('input').value="";
}

function reverse(){
   
    let num=document.querySelector('input').value;
    let num1=document.querySelector('input').value;
    if(!num){
        alert("Please Inter Your Number")
        clear()
        return
    }
    if(num<11){
        alert("Pleae Inter 11<Number")
        clear()
        return
    }
    
    let reverse_num=0;
    while(num !==0){
        reverse_num=reverse_num*10+num%10;
        num=Math.floor(num/10);
    }
     document.querySelector('#result').innerHTML=`Result:<span>${num1}</span><span>=</span> <span>${reverse_num}</span>`
    clear()
}

function autoRefresh(){
    window.location.reload()
}

