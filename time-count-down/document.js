 const deadlineDate='31 December 2025';

 function deadline(){
    const deadlineEndDate=new Date(deadlineDate);
    const currentDate=new Date();
    const totalSeconds=(deadlineEndDate-currentDate)/1000
    
    
   const days=Math.floor(totalSeconds/(3600*24));
   const hours=Math.floor((totalSeconds%(3600*24))/3600)
   const minutes=Math.floor((totalSeconds%3600)/60);
   const secondes=Math.floor(totalSeconds%60);
   


   document.getElementById('days').innerText=formateTime(days);
   document.getElementById('hours').innerText=formateTime(hours);
   document.getElementById('minutes').innerText=formateTime(minutes);
   document.getElementById('seconds').innerText=formateTime(secondes);
    


   function formateTime(time){
    return time <10 ? `0${time}`:time;
   }
 }

 deadline()
 setInterval(deadline,1000)