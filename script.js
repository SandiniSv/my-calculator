let currentInput = "";
let memory = [];
const display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
        saveToMemory(currentInput, result);
    } catch (error) {
        display.value = "Error";
    }
}

function storeInMemory() {
    try {
        const result = eval(currentInput);
        saveToMemory(currentInput, result);
    } catch (error) {
        display.value = "Error";
    }
}

function recallMemory() {
    if (memory.length > 0) {
        const lastCalculation = memory[memory.length - 1];
        display.value = `${lastCalculation.input} = ${lastCalculation.result}`;
        currentInput = lastCalculation.input;
    }
}

function saveToMemory(input, result) {
    memory.push({ input, result });
}


