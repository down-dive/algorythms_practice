// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1

var sectionText = document.createElement("section")
body.appendChild(sectionText)


var hello = document.createElement("h1");
hello.textContent = "hello there!";
sectionText.appendChild(hello);
hello.setAttribute('style', 'text-align:center');



// TODO: Add a centered h2

var secondLine = document.createElement("h2");
secondLine.textContent = "this is my second line";
sectionText.appendChild(secondLine);
secondLine.setAttribute('style', 'text-align:center');



// TODO: Add a centered image with a centered caption under it

var imageSection = document.createElement("div")
body.appendChild(imageSection);
imageSection.setAttribute('style', 'text-align:center;')


var image = document.createElement("img");
image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
imageSection.appendChild(image);

// caption underneath the image
var caption = document.createElement("p");
caption.textContent = 'I am caption underneath the image';
imageSection.appendChild(caption)

// TODO: Add a list of your favorite foods (or other favorites)
var unorderedList = document.createElement("ul")
body.appendChild(unorderedList)

var itemOne = document.createElement("li")
itemOne.textContent = "Orange";
unorderedList.appendChild(itemOne)

var itemTwo = document.createElement("li")
itemTwo.textContent = "Peach";
unorderedList.appendChild(itemTwo)

var itemThree = document.createElement("li")
itemThree.textContent = "Pizza";
unorderedList.appendChild(itemThree)

