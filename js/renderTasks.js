import checkedBtns from "./completedBtn.js"
import deleteBtns from "./deleteBtn.js"

const renderTasks = () => {
    const arrayTasks = JSON.parse(localStorage.getItem('tasks'))
    const listTask = document.querySelector('.tasks__list')
    listTask.innerHTML = ""

    for(let i = 0; i<arrayTasks.length; i++) {
        const itemTask = document.createElement('li').classList.add('tasks__list-item')

        listTask.innerHTML += `
             <li class="tasks__list-item">
                <p class="tasks__list-item-title">${arrayTasks[i].title}</p>
                <div class="tasks__list-item-btns">
                    <button class="trash__btn" id='${arrayTasks[i].title}'>
                        <img src="./assets/icons/trash.svg" alt="Удалить">
                    </button>
                       <input type="checkbox" id='${arrayTasks[i].title}' ${arrayTasks[i].completed ? `checked` : null} class="complete__btn"/>
                </div>
            </li>
        `
    }
    
    checkedBtns()
    deleteBtns()

}

export default renderTasks