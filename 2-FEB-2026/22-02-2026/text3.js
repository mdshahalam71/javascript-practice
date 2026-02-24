 async function getEmail(id=1){
    const apiUrl=`https://jsonplaceholder.typicode.com/users/${id}`
     const res= await fetch(apiUrl)
     const data=await res.json()
       return data
 }

    function getEmail2(id=1){
        const apiUrl=`https://jsonplaceholder.typicode.com/users/${id}`
        let email='';
        fetch(apiUrl)
         .then(res=>res.json())
         .then(data=>{
             
            console.log(data);
         } )
          
         return email;
   }

    console.log(getEmail2(3))

 
     