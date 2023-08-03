import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]'); 
                       // Arrow functions o funciones anonimas =>
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
          //backticks son las comillas invertidas ``
    
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
