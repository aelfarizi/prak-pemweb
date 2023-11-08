let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
}
