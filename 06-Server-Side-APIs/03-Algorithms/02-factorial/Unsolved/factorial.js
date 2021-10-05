// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    var startValue = 1;
    
    for (var i = 1; i <= num; i++) {
      startValue = startValue * i;
    }
    return startValue
  }
