 const apiUrl="https://jsonplaceholder.typicode.com/users/3";

 fetch(apiUrl)
      .then(function(res){
        return res.json()
      })
      .then(function(data){
        console.log(data.website)
      })