function find(words, target) {
  return words.some(word => word.toLowerCase() === target.toLowerCase());
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let words = ['Apple', 'Banana', 'Orange', 'Grape'];

readline.question('Та хайх үгээ оруулна уу: ', input => {
  console.log(find(words, input)); 
  // OUTPUT: true эсвэл false  
  readline.close();
});