document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.calculator button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === 'AC') {
                display.value = '';
            } else if (buttonText === '←') {
                display.value = display.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});
