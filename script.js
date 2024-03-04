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
        var memoryIndex = memoryIndex.val();

        if (memoryIndex === null) {
                    return null;
                } else if ((memoryIndex - 1) >= 0) {
                    return memory[--memoryIndex];
                 } else {
                    return memory[memoryIndex];
                }
    });

        
       $('#getPreviousCalculation').on('click', () => {


            if (memoryIndex === null) {
                return null;
                 } else if ((memoryIndex + 1) <= memory.length - 1) {
                    return memory[++memoryIndex];
            } else {
                    return memory[memoryIndex];
      }
    });

    $('#clearMemory').on('click', () => {
        memory = [];
        memoryIndex = null;
        display.val("");

    });
       

});

    // var display = $('input[name="display"]').eq(0);

    // const addToMemory = (calculation) => {
    //     memory.push(calculation);
    //     memoryIndex = memory.length - 1;
    //     display.value = eval(calculation);
    // };
    

    
        
    // const getPreviousCalculation = () => {
    //   if (memoryIndex === null) {
    //         return null;
    //     } else if ((memoryIndex + 1) <= memory.length - 1) {
    //         return memory[++memoryIndex];
    //     } else {
    //         return memory[memoryIndex];
    //     }
    // };  
    

    // const getNextCalculation = () => {
    //     if (memoryIndex === null) {
    //         return null;
    //     } else if ((memoryIndex - 1) >= 0) {
    //         return memory[--memoryIndex];
    //     } else {
    //         return memory[memoryIndex];
    //     }
    // };
    


    // const clearMemory = () => {
    //     memory = [];
    //     memoryIndex = null;
    //     display.value = "";
    // };
    



