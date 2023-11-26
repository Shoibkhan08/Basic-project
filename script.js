let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function operate(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    display.value = eval(display.value) / 100;
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculateSquare() {
    display.value = Math.pow(eval(display.value), 2);
}

function addToMemory() {
    memory += parseFloat(display.value) || 0;
}

function subtractFromMemory() {
    memory -= parseFloat(display.value) || 0;
}

function recallMemory() {
    display.value = memory;
}

function clearMemory() {
    memory = 0;
}
