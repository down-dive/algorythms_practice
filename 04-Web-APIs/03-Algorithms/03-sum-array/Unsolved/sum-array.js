// Write code to add all the numbers in `arr` and return the total

// let arr = [1,3,5]
// let number = 0
// var sumArray = function(arr) {
//     for(let i = 0; i < arr.length; i++){
//         number += arr[i];
//     }
// };
// console.log(number)

var sumArray = function(arr) {
    arr.reduce(function(a, b) {

   console.log(a + b)
}, 0)
}

