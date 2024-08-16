import form from "./form.js"
import renderTasks from "./renderTasks.js"
import deleteBtns from "./deleteBtn.js"
import checkedBtns from "./completedBtn.js"

window.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]))
    }
    form()
    renderTasks()

    
})