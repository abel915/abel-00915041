/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelname = "XZY";
let duration = 0;



/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE



function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let modelName = "XYZ"; // Example value; replace with actual value
    let duration = 5; // Example value; replace with actual value

    let totalCost;

    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    } else {
        totalCost = 0;
    }

    if (costLabel) {
        costLabel.innerHTML = totalCost;
    } else {
        console.error("Element with ID 'calculated-cost' not found.");
    }
}



/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// Get the "Switch Model" pseudo-button element
let modelButton = document.getElementById("switch-model");

// Function to change the model and recalculate the cost
function changeModel() {
    let modelText = document.getElementById("model-text");
    
    if (modelName === "XYZ") {
        modelName = "CPRG";
        if (modelText) {
            modelText.innerHTML = "Model CPRG";
        }
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        if (modelText) {
            modelText.innerHTML = "Model XYZ";
        }
    }

    recalculate();
}

// Add event listener to the pseudo-button
if (modelButton) {
    modelButton.addEventListener("click", changeModel);
}








/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/
let changeDurationButton = document.getElementById("change-duration");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter the new duration:");
    
    if (newDuration !== null) {
        duration = parseFloat(newDuration);
        if (durationText) {
            durationText.innerHTML = newDuration;
        }
        recalculate();
    }
}

if (changeDurationButton) {
    changeDurationButton.addEventListener("click", changeDuration);
}

// INSERT YOUR CODE HERE



