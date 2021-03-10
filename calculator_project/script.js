console.log("running...")

class Calculator {
    constructor(displayText) {
        this.displayText = displayText;
    }

    clear() {
        isOperationChosen = false;
        this.displayText = display;
        this.displayText.innerText = '';
    }

    delete() {
        if (!computed) {
            this.displayText = display;
            this.displayText.innerText = this.displayText.innerText.slice(0, -1);
        }
    }

    appendNumber(number) {
        this.displayText = display;
        this.displayText.innerText = this.displayText.innerText.concat(number.toString());
    }

    updateDisplay() {
        this.displayText = this.display;
    }

    compute() {
        this.displayText = display;
        let ans;
        if (isOperationChosen) {
            switch (selectedOperation) {
                case '+':
                    ans = parseFloat(firstTerm) + parseFloat(secondTerm);
                    console.log(ans);
                    break;
                case '-':
                    ans = parseFloat(firstTerm) - parseFloat(secondTerm);
                    console.log(ans);
                    break;
                case '*':
                    ans = parseFloat(firstTerm) * parseFloat(secondTerm);
                    console.log(ans);
                    break;
                case '/':
                    ans = parseFloat(firstTerm) / parseFloat(secondTerm);
                    console.log(ans);
                    break;
            }
        }
        isOperationChosen = false;
        this.displayText.innerText = ans;
        computed = true;
        firstTerm = ans;
        secondTerm = '';
        console.log('first term: ' + firstTerm);
        console.log('second term: '  + secondTerm);
    }

    chooseOperation(operation) {
        if (!isOperationChosen) {
            isOperationChosen = true;
        }
        selectedOperation = operation;
        console.log("chosen operation: " + selectedOperation);
    }

}

const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operation");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("del");
const equalButton = document.getElementById("equal");
const display = document.getElementById("display");
let firstTerm, secondTerm;
let isOperationChosen = false;
let selectedOperation;
let computed = false;

const calc = new Calculator(display);

// add eventListeners to each button in the numberButtons NodeList
function addEventListenerNumbers(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            if (display.innerHTML == '/' || display.innerHTML == '*' || display.innerHTML == '+' || display.innerHTML == '-') {
                calc.delete();
            }
            if (isOperationChosen) {
                calc.appendNumber(list[i].innerText);
                calc.updateDisplay();
                secondTerm = display.innerHTML;
                console.log("second term: " + secondTerm);
            } else {
                if (computed) {
                    calc.clear();
                    computed = false;
                }
                calc.appendNumber(list[i].innerText);
                calc.updateDisplay();
                firstTerm = display.innerHTML;
                console.log("first term: " + firstTerm);
            }
        })
    }
}
addEventListenerNumbers(numberButtons);
// add eventListeners to each button in operationButton NodeList
function addEventListenerOperations(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            if (!isOperationChosen) {
                if (computed) {
                    calc.clear();
                    computed = false;
                }
                calc.clear();
                calc.appendNumber(list[i].innerText);
                calc.chooseOperation(list[i].innerText);
                calc.updateDisplay();
            }
            //console.log(list[i].innerHTML);
        })
    }
}
addEventListenerOperations(operationButtons);
// add event to clear button
clearButton.addEventListener('click', () => {
    console.log("cleared");
    calc.clear();
});
// add event to delete button 
deleteButton.addEventListener('click', () => {
    console.log("delete");
    calc.delete();
})
// add event to equal button
equalButton.addEventListener('click', () => {
    console.log('computed');
    calc.compute();
})





// DEBUG
for (let i in numberButtons) {
    console.log(numberButtons[i]);
}

for (let i in operationButtons) {
    console.log(operationButtons[i]);
}
console.log(clearButton);
console.log(deleteButton);
console.log(equalButton);
console.log(display);