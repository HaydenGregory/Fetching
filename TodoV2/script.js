const todoList = document.getElementById('todo-list')
const submitButton = document.querySelector('button')
const userSelector = document.getElementById('user-selector')
const nameOfUser = document.getElementById('name-of-user')
const addressOfUser = document.getElementById('ad-of-user')


// fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
// .then(todoArray => {
//     const todoHTMLArray = todoArray.map((todoItem) => {
//         if (todoItem.completed) {
//             let className = "completed"
//             return `<input type= "checkbox" checked>
//             <label class= "${className}">${todoItem.title}</label><br>`
//         }
//         else {
//             let className = "incomplete"
//             return `<input type= "checkbox">
//             <label class= "${className}">${todoItem.title}</label><br>`
//         }
//     })
//     todoList.insertAdjacentHTML('beforebegin', todoHTMLArray.join(''))
// })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()).then(userArray => {
        const userIdHTML = userArray.map(names =>
            `<option value= "${names.id}">${names.name}</option>`)
        userSelector.innerHTML = (userIdHTML.join(''))
        const option = document.createElement('option')
        option.setAttribute('selected','selected')
        option.setAttribute('disabled','disabled')
        option.textContent = 'Please Select a Name'
        userSelector.appendChild(option)
    })

userSelector.addEventListener('change', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userSelector.value}`)
        .then(res => res.json()).then(userInfo => {
            const userAddressHTML = `Address: ${Object.values(userInfo.address).join(', ')}`
            const userNameHTML =
                `Name: ${userInfo.name}`
            nameOfUser.textContent = (userNameHTML)
            addressOfUser.innerHTML = (userAddressHTML)
            console.log(userSelector.value)
            fetch(`https://jsonplaceholder.typicode.com/users/${userSelector.value}/todos`).then(res => res.json())
            .then(todoArray => {
                const todoHTMLArray = todoArray.map((todoItem) => {
                    if (todoItem.completed) {
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
                    todoList.innerHTML= todoHTMLArray.join('')
                })
        })
})

// submitButton.addEventListener('submit', fetch(`https://jsonplaceholder.typicode.com/users/${userSelector.value}/todos`).then(res => res.json())
//     .then(userTodos => {
//         console.log(userTodos)
//     }))

