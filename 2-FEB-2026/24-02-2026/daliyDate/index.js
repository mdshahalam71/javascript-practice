 let today=new Date()
 let dd=today.getDate();
 let mm=today.getMonth()+1;
 let yyyy=today.getFullYear();
 let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 const monthsFull = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 let day=today.getDay()
 if(dd<10){
    dd='0'+dd;
 }
  

 today=dd+'-'+monthsFull[mm]+'-'+yyyy;
 let days=document.getElementById('result');
 days.innerHTML=today

 document.getElementById('day').innerHTML=daylist[day]

 

 