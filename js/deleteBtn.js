import renderTasks from "./renderTasks.js"

const deleteBtns = () => {
    const btnArray = document.querySelectorAll('.trash__btn')

    btnArray.forEach(btn => {
        btn.addEventListener('click', (e) => {

            let tasksArray = JSON.parse(localStorage.getItem('tasks')) 

            tasksArray = tasksArray.filter(item => {
                return item.title !== btn.id
            })
            
            localStorage.setItem('tasks', JSON.stringify(tasksArray))
            renderTasks()
        })
    })
    
}

export default deleteBtns