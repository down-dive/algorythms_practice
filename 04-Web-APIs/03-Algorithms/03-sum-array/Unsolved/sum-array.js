// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let number = 0
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            continue
        } 
        number += arr[i];
    }
    console.log(number)
};


// var sumArray = function(arr) {
//     arr.reduce(function(a, b) {
//    console.log(a + b)
// }, 0)
// }

