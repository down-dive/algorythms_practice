// Write code to create a function that returns the factorial of `num`

// var factorial = function(num) {
//     var startValue = 1;
    
//     for (var i = 1; i <= num; i++) {
//       startValue = startValue * i;
//     }
//     return startValue
//   }

// var factorial = function(num) {
//     var result = 1;

//     for ( var i = num; i > 1; i--) {
//         result = result * i;
//     }
//     return result;
// }
var factorial = function(num) {
var firstElement = 1;

for (var i = 1; i <= num; i++) {
    firstElement = firstElement * i
}
return firstElement
}