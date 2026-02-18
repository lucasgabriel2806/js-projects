let display = document.querySelector(".display");
let currentInput = "";
let currentOperator = "";

function appendNumber(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if(currentInput === "" && operator !== ".") return;
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if(!Number.isInteger(result)) {
            result = result.toFixed(2);
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch(error) {
        display.textContent = "Error";
        currentInput = "";
    }
}

function clearAll() {
    currentInput = "";
    display.textContent = currentInput;
}

function clearOne() {
    currentInput = currentInput.toString().slice(0, -1);
    display.textContent = currentInput;
}