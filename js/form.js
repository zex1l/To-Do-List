 import renderTasks from "./renderTasks.js"
 
 
 const form = () => {
    const form = document.querySelector('.form')
    const inputForm = document.querySelector('.form__input')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if(inputForm.value === '') {
            alert('Введите задачу')
            return
        }
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        const taskObj = {
            title: inputForm.value,
            completed: false
        }

        tasks.push(taskObj)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        alert('Задача добавлена')
        inputForm.value = ''

        renderTasks()
    })
    
}

export default form