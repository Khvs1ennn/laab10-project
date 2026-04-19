const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout  
});

rl.question("Текст оруулна уу: ", function(text) {
  let newText = text.replace(/a/g, "z");
  console.log("Шинэ текст:", newText);
  rl.close();
});