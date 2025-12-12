 const deadlineDate='6 June 2026';

 function deadline(){
    const deadlineEndDate=new Date(deadlineDate);
    const currentDate=new Date();
    const totalSeconds=(deadlineEndDate-currentDate)/1000;

    const month=Math.floor(totalSeconds/(3600*24*30));
    const days=Math.floor((totalSeconds%(3600*24*30))/(3600*24));
    const hours=Math.floor((totalSeconds%(3600*24))/3600);
    const minutes=Math.floor((totalSeconds%(3600))/60);
    const seconds=Math.floor(totalSeconds%60);


    document.getElementById('month').innerText=formateTime(month);
    document.getElementById('days').innerText=formateTime(days);
    document.getElementById('hours').innerText=formateTime(hours);
    document.getElementById('minutes').innerText=formateTime(minutes);
    document.getElementById('seconds').innerText=formateTime(seconds);


    function formateTime(time){
        return time <10 ? `0${time}`: time;
    }
     
 }

 deadline()
 setInterval(deadline,1000)
 