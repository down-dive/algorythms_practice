// Write code to return the 
// largest number in the given array

// var maxNum = function (arr) {
//     var max = arr[0];

//     for (i = 1; i < arr.lenght; i++) {
//         var currentNum = arr[i];

//         if (currentNum > max) {
//             max = currentNum;
//         }
//     }
//     return max;

// };


// var maxNum = function(arr) {
//     var max = arr[0];

//     for (var i = 0; i < arr.length; i++) {
//        var initialCount = arr[i];

//         if (initialCount > max) {
//             max = initialCount
//         } 
//     }
//     return max
// }

var maxNum = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var number = 0

        if (number < arr[i]) {
            number = arr[i]
        }
    }
    return number;
}
