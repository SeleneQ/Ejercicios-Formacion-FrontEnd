const btn = document.querySelector('[data-form-btn]');
    console.log(btn);
                       // Arrow functions o funciones anonimas =>
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
      //backticks son las comillas invertidas
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task"> ${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
};

                    //el click es un listener
btn.addEventListener('click', createTask);


/*<li class="card" data-task>
            <div>
              <i class="far fa-check-square icon"></i>
              <span class="task">Hacer curso de git</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
          </li>
          <li class="card">
          <div>
          <i class="far fa-check-square icon"></i>
          <span class="task">Hacer curso de linux</span>
          </div>
          <i class="fas fa-trash-alt trashIcon icon"></i>
          </li> */