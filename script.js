$(document).ready(function() {
    // We write all jQuery related code inside this function
    let currentInput = "";
    let memory = [];
    let memoryIndex = null;
    let display = $('#displayField');
    
    // This is how you execute a function when a html element with the id=addMemory is clicked
    $('#addMemory').on('click', () => {
        // .val() is the value of the input field
        var calculation = display.val();
        memory.push(calculation);
        memoryIndex = memory.length - 1;
        // Set the display field to the result of the calculation
        display.val(eval(calculation));
    });

    //Note: () => {} is same as function() {}

    $('#getNextCalculation').on('click', () => {

        if (memoryIndex === null) {
                    display.val('');
                } else if ((memoryIndex - 1) >= 0) {
                    memoryIndex--;
                    display.val(memory[memoryIndex]);
                 } else {
                    display.val(memory[memoryIndex]);
                }
    });

        
    $('#getPreviousCalculation').on('click', () => {


        if (memoryIndex === null) {
                    display.val('');
                } else if ((memoryIndex + 1) <= memory.length - 1) {
                    memoryIndex++;
                    display.val(memory[memoryIndex]);
                } else {
                    display.val(memory[memoryIndex]);
      }
    });

    $('#clearMemory').on('click', () => {
        memory = [];
        memoryIndex = null;
        display.val("");

    });
       

});

