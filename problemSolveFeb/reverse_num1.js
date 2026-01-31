//reverse_numbers 1234 ===4321

const num=1234;
function reverse(num){
    reverse_num=0;
    while(num !==0){
        reverse_num=reverse_num*10+num%10;
        num=Math.floor(num/10);
    }
    return reverse_num;
}

console.log(reverse(num))