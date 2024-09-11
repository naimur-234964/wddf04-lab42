let number1 = Number(prompt("Enter First Number : "));
let number2 = Number(prompt("Enter Second Number : "));
let number3 = Number(prompt("Enter Third Number : "));


if (number1 > number2) {
    if (number1 > number3) {
        document.write("First Number " + number1 + " is the largest Number");
    } else {
        document.write("Third Number " + number3 + " is the largest Number");
    }
} else {
    if (number2 > number1) {
        document.write("Second Number " + number2 + " is the largest Number");
    } else {
        document.write("Third Number " + number3 + " is the largest Number");
    }
}
