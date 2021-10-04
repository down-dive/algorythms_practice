// Write code to return the the number of vowels in `str`

// var vowelCount = function (str) {
//     var count = 0;
//     var vowels = ["a", "e", "i", "o", "u"];

//     for (var i = 0; i < str.lenght; i++) {
//         var letter = str[i].toLowerCase();

//         if (vowels.indexOf(letter) !== -1) {
//             count += 1;
//         }
//     }

//     return count;
// };

// var vowelCount = function (str) {
//     str.toLowerCase()
//     var vowels = ["a", "e", "i", "o", "u"];
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         var letter = str[i].toLowerCase()

//         if (letter === 0) {
//             return count
//         } else if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             count++
//         }
//     }
//     return count
// }

// var vowelCount = function(str) {
//     var vowels = ["a", "e", "i", "o", "u"];
//     var  count = 0;

//     for (var i = 0; i < str.length; i++) {
//         var letter = str[i].toLowerCase()

//       for (var j = 0; j < vowels.length; j++) {
//         if (letter === vowels[j]) {
//           count++
//         }
//       }
//     }
//   return count
// }

var vowelCount = function(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var  count = 0;

    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase()
      
        if (vowels.indexOf(letter) !== -1) {
          count += 1
        }
    }
 return count

}

