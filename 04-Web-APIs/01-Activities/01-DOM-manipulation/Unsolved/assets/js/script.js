// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1

var hello = document.createElement("h1");
hello.setAttribute("id","hello");
document.getElementById('hello').align = 'center';
hello.textContent = "hello there!";
body.appendChild(hello);



// TODO: Add a centered h2

var secondLine = document.createElement("h2");
secondLine.setAttribute("id", "secondLine");
document.getElementById("secondLine").align = 'center';
secondLine.textContent = "this is my second line";
hello.appendChild(secondLine);


// TODO: Add a centered image with a centered caption under it

// TODO: Add a list of your favorite foods (or other favorites)
