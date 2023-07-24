const btn = document.querySelector('[data-form-btn]');
    console.log(btn);
                       // Arrow functions o funciones anonimas =>
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

                    //el click es un listener
btn.addEventListener('click', createTask);

