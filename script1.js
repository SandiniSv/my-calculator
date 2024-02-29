$(document).ready(function() {
    let currentInput = "";
    let memory = [];
    let memoryIndex = null;
});

    var display = $('input[name="display"]').eq(0);

    const addToMemory = (calculation) => {
        memory.push(calculation);
        memoryIndex = memory.length - 1;
        display.value = eval(calculation);
    };
    

    
        
    const getPreviousCalculation = () => {
        if (memoryIndex === null) {
            return null;
        } else if ((memoryIndex + 1) <= memory.length - 1) {
            return memory[++memoryIndex];
        } else {
            return memory[memoryIndex];
        }
    };
    

    const getNextCalculation = () => {
        if (memoryIndex === null) {
            return null;
        } else if ((memoryIndex - 1) >= 0) {
            return memory[--memoryIndex];
        } else {
            return memory[memoryIndex];
        }
    };
    


    const clearMemory = () => {
        memory = [];
        memoryIndex = null;
        display.value = "";
    };
    



