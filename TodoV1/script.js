const todoList = document.getElementById('todo-list')
const submitButton = document.querySelector('button')


fetch('https://jsonplaceholder.typicode.com/todos').then(function(response){
    return response.json()
}).then(function(todoArray){
    const todoHTMLArray = todoArray.map((todoItem) => {
        if (todoItem.completed){
            let className = "completed"
            return `<input type= "checkbox" checked>
            <label class= "${className}">${todoItem.title}</label><br>`
        }
        else {
            let className = "incomplete"
            return `<input type= "checkbox">
            <label class= "${className}">${todoItem.title}</label><br>`
        }
    })
    todoList.insertAdjacentHTML('beforeend', todoHTMLArray.join(''))
})

// todoList.addEventListener('submit', (event) => {
//     if ()
// })