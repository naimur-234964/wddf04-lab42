alert(`Please choose an option from below : 
a. Option 1
b. Option 2
c. Option 3`);

let input = prompt();

var text;

if (input == "a") {
    text = "Option 1 is selected."
}
else if (input == "b") {
    text = "Option 2 is selected."
}
else if (input == "c") {
    text = "Option 3 is selected."
}
else {
    text = "Selected an invalid option."
}

document.write(text);