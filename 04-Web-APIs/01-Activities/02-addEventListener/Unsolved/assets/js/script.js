// TODO: Create a variable to hold the count
var count = document.getElementById('count')
var currentCount = 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.

var decrementCount = document.getElementById('decrement')
var incrementCount = document.getElementById('increment')


// TODO: Create a function that displays the current count on the page

var displayCurrentCount = function() {
    count.innerHTML = currentCount
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count

decrementCount.addEventListener('click', function() {
    if (currentCount <= 0) {
        alert("Can't go lower than 0")
    } else {
    currentCount--
    displayCurrentCount()
    }
})

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count

incrementCount.addEventListener('click', function() {
    currentCount++
    displayCurrentCount()
})
