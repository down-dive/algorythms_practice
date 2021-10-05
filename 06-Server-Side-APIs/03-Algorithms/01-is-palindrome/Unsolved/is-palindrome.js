// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
//     var reverse = str.split("").reverse().join("")

//     if ( reverse === str) {
//         return true;
//     } else {
//         return false;
//     }
// };

var isPalindrome = function(str) {
    var reversed = str.split('').reverse().join('')
    
    if (str === reversed) {
      console.log("It worked!")
      return true
      
  } else {
    console.log("It is not palindrome")
    return false
    
  }
  }
