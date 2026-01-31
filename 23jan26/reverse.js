// let num=430;
 
// let text= num.toString().split('').reverse()
// let reverse=Number(text.join(''))
// console.log(reverse)
// console.log(text)
let x=-120;

 let text= x.toString().split('').reverse()
 let reNumber=Number(text.join(''));
 console.log(reNumber)

 function reverseInteger(x) {
    // ধাপ ১: চিহ্ন আলাদা রাখো
    const sign = x < 0 ? -1 : 1;
    
    // ধাপ ২: সংখ্যাটি ধনাত্মক বানাও এবং রিভার্স করো
    let reversed = parseInt(
        Math.abs(x).toString().split('').reverse().join('')
    ) * sign;
    
    // ধাপ ৩: 32-bit সইনড ইন্টিজার রেঞ্জ চেক করো
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return reversed;
}

// টেস্ট
console.log(reverseInteger(-120)); // 21