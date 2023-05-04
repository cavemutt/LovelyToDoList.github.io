const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const listLength = document.querySelector('.length-p')
const filterOption = document.querySelector('.filter-todos')
const title = document.querySelector('h1')
const userNameModal = document.querySelector('#user-name-modal')
const userName = document.querySelector('#name-input')
const nameSubmitBtn = document.querySelector('.name-button')
const resetStorage = document.querySelector('#reset-button')
const resetModal = document.querySelector('#reset-modal')
const resetYes = document.querySelector('#reset-yes')
const resetNo = document.querySelector('#reset-no')

// const logo = document.querySelector('.logo')

window.addEventListener('load', () => {
    filterOption.value = 'all'
    getTodos()
    firstName()
})

resetStorage.addEventListener('click', resetUser);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function resetUser() {
    console.log('reset')
    resetModal.showModal()
    resetYes.addEventListener('click', (e) => {
        // e.preventDefault()
        alert('Current User Data will be reset')
        localStorage.clear()
        document.location.reload()
    })
    resetNo.addEventListener('click', () => {
        resetModal.close()
    })
}

function firstName() {
    // check if name in storage already
    let name
    if(localStorage.getItem('name') === null) {
        name = []
        userNameModal.showModal()
        userName.value = ''
        nameSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault()
            let user = userName.value || 'Anonymous'
            userNameModal.close()
            title.innerText = `${user}'s To Do List`
            name.push(user)
            localStorage.setItem('name', JSON.stringify(name))
        })
    } else {
        name = JSON.parse(localStorage.getItem('name'))
        title.innerText = `${name}'s To Do List`

    }

}


function addTodo(e) {
    e.preventDefault()

    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-div")

    const defaultInputs = ["Pet the Cat", "Feed the Cat", "Play with Cat", "Cuddle with Cat", "Clean Litterbox", "Give Treats to Cat"]
    let defaultInput = defaultInputs[Math.floor(Math.random()*(defaultInputs.length))]
    
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value || defaultInput
    
    // check for duplicates
    let noDupes = Array.from(lines)
    noDupes.forEach(noDupe => {
        if(noDupe.innerText === newTodo.innerText) {         
            newTodo.innerText = `${newTodo.innerText} again`
        }
    })

    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)

    // local storage when new todo added
    saveLocalTodos(newTodo.innerText)
    
    const completeBtn = document.createElement('button')
    completeBtn.classList.add("complete-btn")
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completeBtn)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(deleteBtn)

    todoList.appendChild(todoDiv)

    todoInput.value = ''
    updateNum()
}

let lines = todoList.children 
function updateNum() {
    // console.log(lines.length)
    let todoNum = lines.length 
    if(todoNum < 1) {
        listLength.innerText = `You've done it all, you are amazing!`
        listLength.style.background = 'radial-gradient(rgb(255 255 255 / 0.5), transparent, transparent)'
    } else if(todoNum === 1) {
        listLength.innerHTML = `You have <span>${todoNum}</span> thing on your list.`
    } else {
        listLength.innerHTML = `You have <span>${todoNum}</span> things on your list.`
    }
}

function deleteCheck(e) {
    const thing = e.target

    if(thing.classList[0] === 'delete-btn') {
        const todo = thing.parentElement
        todo.classList.add("fall")

        removeLocalTodos(todo)
        remComp = todo.innerText
        removeCompTodos(remComp)
        
        const effects = [
            './Sound Effects/breaking-glass.mp3',
            './Sound Effects/crash.mp3',
            './Sound Effects/large-crash-cat.mp3',
        ]
        let effect = effects[Math.floor(Math.random()*(effects.length))]
        const sound = new Audio(effect);
        sound.volume = 0.3;
        setTimeout(function() {
            sound.play()
        }, 2100)

        setTimeout(() => {
            todo.remove()
            lines.length-1
            updateNum()
        }, 3001)
    }
    
    if(thing.classList[0] === 'complete-btn') {
        const todo = thing.parentElement
        
        thing.classList.toggle('compd')
        todo.classList.toggle('completed')

        if (todo.classList[1] === 'completed') {
            // console.log(todo.innerText, " is completed")
            saveCompTodos(todo.innerText)
        } else if(!todo.classList.contains('completed')) {
            remComp = todo.innerText
            // console.log(remComp, " is not completed")
            removeCompTodos(remComp)
        }
    }
}

function filterTodo(e) {
    let todos = Array.from(lines)
    todos.forEach(todo => {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if(todo.classList.contains('completed')) {
                    todo.style.display = "none"
                } else {
                    todo.style.display = "flex"
                }
                break;
        }
    })
}


function saveLocalTodos(todo) {
    // check if there are any todos in storage already
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos))
}

function saveCompTodos(comp) {
    // check if there are any comps in storage already
    let comps;
    if(localStorage.getItem('comps') === null) {
        comps = []
    } else {
        comps = JSON.parse(localStorage.getItem('comps'))
    }
    comps.push(comp)

    localStorage.setItem('comps', JSON.stringify(comps))
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(todo => {

        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todo-div")
    
        const newTodo = document.createElement("li")
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
    
        todoDiv.appendChild(newTodo)
    
        const completeBtn = document.createElement('button')
        completeBtn.classList.add("complete-btn")
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'
        todoDiv.appendChild(completeBtn)
    
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
        todoDiv.appendChild(deleteBtn)
    
        todoList.appendChild(todoDiv)
        todoInput.value = ''
        updateNum()
        const text = todoDiv.innerText
        getComps(text, todoDiv)
    })
}

function getComps(text, tdiv) {
    let comps;
    if(localStorage.getItem('comps') === null) {
        comps = []
    } else {
        comps = JSON.parse(localStorage.getItem('comps'))
    }

    comps.forEach(comp => {
        if(comp === text) {
            tdiv.classList.add('completed')
        }
    })
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function removeCompTodos(remComp) {
    let comps;
    if(localStorage.getItem('comps') === null) {
        comps = []
    } else {
        comps = JSON.parse(localStorage.getItem('comps'))
    }

    comps.forEach(comp => {
        if(comp === remComp) {
            comps.splice(comps.indexOf(comp), 1)
        }
    })

    localStorage.setItem("comps", JSON.stringify(comps))
}

