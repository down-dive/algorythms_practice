// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var reverse = str.split("").reverse().join("")

    if ( reverse === str) {
        return true;
    } else {
        return false;
    }
};
