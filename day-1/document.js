 let hr=document.getElementById('hour');
 let min=document.getElementById('min');
 let sec=document.getElementById('sec');

 function displayTime(){
    let date=new Date();

    // Getting hour,min,sec from date
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    // console.log(hour)

    let hRotation= 30*hour;
    let mRotation=6*minute;
    let sRotation=6*second;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;
 }


 setInterval(displayTime,1000);