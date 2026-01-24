//3 account cutomer, mix cutomer value out of this
const accounts=[[2,4,5],[1,8,4],[3,2,9]]

function maximumValue(accounts){
    return Math.max(...accounts.map(customer=>
        customer.reduce((sum,amount)=>sum+amount,0)
    ))
}

console.log(maximumValue(accounts))  

//how to use reduce method
const sumArray=[2,6,7];

const total=sumArray.reduce((acc,cur)=>acc+cur,0)
console.log(total)

//how to use Math.max
  const maxNumber=Math.max(...sumArray);
  console.log(maxNumber);

//maxNum out of one line
  const maxNum=Math.max(...accounts.map(customer=>
    customer.reduce((sum,amount)=>sum+amount,0)
  ))

  console.log(maxNum)

//minNum out of one line
  const minNum=Math.min(...accounts.map(customer=>
    customer.reduce((sum,amount)=>sum+amount,0)
  ))

  console.log(minNum)