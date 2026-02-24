const apiUrl="https://jsonplaceholder.typicode.com/users/1";

const response=await fetch(apiUrl);
const data=await response.json();
console.log(data)