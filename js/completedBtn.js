import renderTasks from "./renderTasks.js"

const checkedBtns = () => {
    const arrayBtns = document.querySelectorAll('.complete__btn')

    arrayBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            let tasksList = JSON.parse(localStorage.getItem('tasks'))

            tasksList = tasksList.map((item) => {
                if(btn.id === item.title) item.completed = btn.checked
                
                return item
            })

            localStorage.setItem('tasks', JSON.stringify(tasksList))

            
        })
    })
}

export default checkedBtns