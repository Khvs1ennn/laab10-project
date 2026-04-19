const prompt = require('prompt-sync')(); //Имфорт хийх
var n; //хувьсагч зарлах --
n=parseInt(prompt("N iig oruul:")); //n гараас утга авах
for(i=1;i<=n;i){ //давталт
    if(i%2==1){
        console.log(i);// output буюу хэвлэх
    }
}
