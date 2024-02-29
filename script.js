
let currentInput = "";
let memory = [];
let memoryIndex = null;
/**
 * Sandini's implementation

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
 */

var display = document.getElementsByName('display')[0];

/**
 * Adds calculation to memory array
 * Resets memory index
 */
const addToMemory = (calculation) => {
    memory.push(calculation);
    memoryIndex = memory.length - 1;
    display.value = eval(calculation);
};

/**
 * returns previous calculation from memory array
 */
const getPreviousCalculation = () => {
    if (memoryIndex === null) {
        return null;
    }else if ((memoryIndex + 1) <= memory.length - 1) {
        memoryIndex += 1;
        return memory[memoryIndex];
    }else{
        return memory[memoryIndex];
    }
};

/**
 * returns next calculation from memory array
 */
const getNextCalculation = () => {
    if (memoryIndex === null) {
        return null;
    }else if ((memoryIndex - 1) >= 0) {
        memoryIndex -= 1;
        return memory[memoryIndex];
    }else{
        return memory[memoryIndex];
    }
};

/**
 * Clears memory array and reset memory index
*/
const clearMemory = () => {
    memory = [];
    memoryIndex = null;
    display.value = "";
};