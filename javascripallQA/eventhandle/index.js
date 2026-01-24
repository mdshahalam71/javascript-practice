//Create a button element
const demo=document.getElementById('demo')
 const button=document.createElement('button');
 button.textContent='Click me';

 button.addEventListener('click',()=>{
     const click=demo.innerHTML='click me';
 })

 document.body.appendChild(button)