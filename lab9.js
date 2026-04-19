const prompt = require('prompt-sync')();
function swap(x) {
    const str = x.toString();
   
    if (str.length % 2 !== 0) return false;
   
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        result += str[i + 1] + str[i];
    }
    return Number(result);  
}
const input = prompt("Тоог оруулна уу: ");
console.log("Үр дүн:", swap(input));
console.log("Үр дүн:", swap(1234));
console.log("Үр дүн:", swap(1234567890));
console.log("Үр дүн:", swap(123));