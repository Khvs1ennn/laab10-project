function comare () {
    var temp = []; // temp гэдэг массив үүсгэж байна

    for(var i=0; i<3; i++){
        temp.push(function(el) {
            return function() {
                console.log(el);
            }
        }(i))
         }
    return temp;     
}
var tempC = compare();

tempC[0]();
tempC[1]();
tempC[2]();