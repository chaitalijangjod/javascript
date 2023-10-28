document.addEventListener('DOMContentLoaded', function() {
    let inputField = document.querySelector('.input');
    let buttons = document.querySelectorAll('.button');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonValue = this.textContent;

            if (buttonValue === 'C') {
                inputField.value = ''; 
                expression = ''; 
            } else if (buttonValue === '=') {
                try {
                    expression = expression.replace(/%/g, '*0.01');
                    const result = eval(expression);
                    inputField.value = result;
                    expression = String(result);
                } catch (error) {
                    inputField.value = 'Error';
                    expression = '';
                }
            } else {
                expression += buttonValue;
                inputField.value = expression;
            }
        });
    });
});
