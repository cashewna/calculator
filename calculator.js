function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '/':
            return divide(a, b);
        case '*':
            return multiply(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0 || b === '0') {
        return 'Cannot divide by zero.';
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

/**
 * Evaluates a given expression.
 * @param {String} expression - The expression to evaluate.
 * return {Number} result - The result of the expression.
 */
function evaluateExpression(expression) {
    expression = expression.split('');
    let result = 0;
    let operator = '';
    let a = 0;
    let b = 0;

    // Evaluate multiplication and division first.
    for (let i = 0; i < expression.length; i++) {
        console.log(expression[i]);
        if (expression[i] === '/' || expression[i] === '*') {
            operator = expression[i];
            a = Number(expression[i - 1]);
            b = expression[i + 1];
            result = operate(operator, a, b);
            if (result === 'Cannot divide by zero.') {
                return result;
            }
            expression.splice(i - 1, 3, result);
            i = 0;
        }
    }
    
    // Evaluate addition and subtraction.
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-') {
            operator = expression[i];
            a = Number(expression[i - 1]);
            b = Number(expression[i + 1]);
            result = operate(operator, a, b);
            expression.splice(i - 1, 3, result);
            i = 0;
        }
    }
    return result;
}
const populateDisplay = (e) => {
    const button = e.target;
    const displayResult = document.querySelector('.display-result');
    switch (button.id) {
        case 'clear':
            displayResult.textContent = '0';
            break;
        case '=':
            let expression = displayResult.textContent;
            let result = evaluateExpression(expression);
            displayResult.textContent = result;
            break;
        case 'del':
            if (displayResult.textContent.length === 1) {
                displayResult.textContent = '0';
            } else {
                displayResult.textContent = displayResult.textContent.slice(0, -1);
            }
            break;
        default:
            console.log(button.id);
            if (displayResult.textContent === '0') {
                displayResult.textContent = e.target.textContent;
            } else {
                displayResult.textContent += e.target.textContent;
            }
            break;
    }
}

let buttons = document.querySelectorAll('.buttons__row--btn');
buttons.forEach(button => button.addEventListener('click', populateDisplay));

module.exports = {
    add,
    subtract,
    divide,
    multiply,
    operate
}