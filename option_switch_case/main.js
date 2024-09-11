alert(`Please choose an option from below : 
a. Option 1
b. Option 2
c. Option 3`);

let input = prompt();

var text;
switch (input) {
    case "a":
        text = "Option 1 is Selected.";
        break;
    case "b":
        text = "Option 2 is Selected.";
        break;
    case "c":
        text = "Option 3 is Selected.";
        break;
    default:
        text = "You've selected an invalid option.";
        break;
}

document.write(text);