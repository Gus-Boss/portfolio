
const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === 'x') {
            updateDisplay('*');
        } else if (buttonText === 'C') {
            clearDisplay();
        } else if (buttonText === '<') {
            backspace();
        } else if (buttonText === '=') {
            calculate();
        } else {
            updateDisplay(buttonText);
        }
    });
});
