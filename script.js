function calculate() {
    var firstNumber = parseFloat(document.getElementById("firstNumber").value);
    var operation = document.getElementById("operation").value;
    var secondNumber = parseFloat(document.getElementById("secondNumber").value);
    var result;

    var symbol;
    switch (operation) {
        case "addition":
            symbol = "+";
            break;
        case "subtraction":
            symbol = "-";
            break;
        case "multiplication":
            symbol = "*";
            break;
        case "division":
            symbol = "/";
            break;
        default:
            symbol = "whoops, idk what happened.";
    }

    if (operation === "addition") {
        result = firstNumber + secondNumber;
    } else if (operation === "subtraction") {
        result = firstNumber - secondNumber;
    } else if (operation === "multiplication") {
        result = firstNumber * secondNumber;
    } else if (operation === "division") {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            result = "Cannot divide by zero";
        }
    } else {
        result = "please try again you did something wrong, it is definetly your fault not mine.";
    }

    document.getElementById("result").innerHTML = "Input: " + firstNumber + ", " + secondNumber + " and " + symbol +"<div/> Result: " + firstNumber + symbol + secondNumber + "=" + result;
}
