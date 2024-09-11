var number1 = Number(prompt("Enter First Number : "));
var number2 = Number(prompt("Enter Second Number : "));
var number3 = Number(prompt("Enter Third Number : "));


if(number1 > number2 && number1 > number3){
    document.write("First Number " + number1 + " is the largest Number");
}else if(number2 > number3 && number2 > number1){
    document.write("Second Number " + number2 + " is the largest Number");
}else if(number3 > number1 && number3 > number2){
    document.write("Third Number " + number3 + " is the largest Number");
}
