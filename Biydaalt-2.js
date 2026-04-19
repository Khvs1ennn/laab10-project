function change(word) {
  let vowels = ['а','э','и','о','у','ө','ү']; 

  return word.split('').map(ch => {
    let code = ch.charCodeAt(0);
    if (vowels.includes(ch)) {
      return ch.toUpperCase(); 
    }
    return ch;                  
  }).join('');
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Та нэг үг оруулна уу: ', word => {
  console.log(change(word));
  readline.close();
});