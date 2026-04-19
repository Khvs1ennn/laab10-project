const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Үгээ оруулна уу: ", (word) => {
    const reversedWord = word.split("").reverse().join("");
    console.log(word.split(""))
    console.log(word.split("").reverse())
    console.log(reversedWord)
    if (word === reversedWord) {
        console.log("yes")
    } else {
        console.log("no")
    }
    rl.close();
});