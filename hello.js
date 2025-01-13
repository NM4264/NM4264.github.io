console.log("Hello world!");

// Grab the output paragraph, and fill it in
// with the text "hello world!"
document.getElementById("output").innerHTML = "Hello world!";

function myFunction() {
    let x = document.getElementById("blankfill").value;
    document.getElementById("demo").innerHTML = "Hello, " + x + "!";
}

function addNumber() {
    // Type 2 numbers together
    let x = document.getElementById("function").value;
    let y = document.getElementById("math").value;
    document.getElementById("minus").innerHTML = Number(x) + Number(y);
}


console.log("One");

doStuff();

console.log("Two");

function doStuff() {
    console.log("Three");
}

console.log("Four");

