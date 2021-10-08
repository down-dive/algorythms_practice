// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1

var hello = document.createElement("h1");
hello.textContent = "hello there!";
body.appendChild(hello);
hello.setAttribute("id","hello");
document.getElementById('hello').align = 'center';



// TODO: Add a centered h2

var secondLine = document.createElement("h2");
secondLine.textContent = "this is my second line";
hello.appendChild(secondLine);
secondLine.setAttribute("id", "secondLine");
document.getElementById("secondLine").align = 'center';



// TODO: Add a centered image with a centered caption under it
var image = document.createElement("img");
image.src = "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
secondLine.appendChild(image);
image.setAttribute("id", "image");
document.getElementById("image").align = 'center';

// TODO: Add a list of your favorite foods (or other favorites)
