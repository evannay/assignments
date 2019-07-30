
// axios.get('https://api.vschool.io/evan/todo/').then((response)=>{
//     response.data.forEach(toDo =>{
//         let li = document.createElement('li')
//         li.textContent = toDo.title;
//         document.getElementById('list').appendChild(li)

//     })
// })

document.addTodo.addEventListener('submit', function(e){
    e.preventDefault()
    let newTodo = {
        title: document.addTodo.title.value,
        price: document.addTodo.price.value,
        description: document.addTodo.description.value,
        image: document.addTodo.imgUrl.value
    }
    posting(newTodo)
})

axios.get('https://api.vschool.io/evan/todo/').then(response =>{
    displayTodos(response.data)
})

function displayTodos (todos){
    todos.forEach(toDo =>{
        let li = document.createElement('li');
        li.textContent = toDo.title;
        let markOff = document.createElement("input")
        markOff.setAttribute('type', 'checkbox')
        let p = document.createElement("p")
        p.textContent = toDo.description
        let showPrice = document.createElement("p")
        showPrice.textContent = `Price: ${document.addTodo.price.value}`
        markOff.addEventListener('click', function (e) {  
            axios.put(`https://api.vschoo.io/evan/todo/${editedTodo_id}`).then(response =>{
                toDo.complete = true
            })
            //put request to change the value of completed to true
        })
        if(toDo.completed === true){
            li.style.textDecoration = 'line-through'
        }
        li.appendChild(markOff)
        document.getElementById('list').appendChild(li);
        li.appendChild(p)
        li.appendChild(showPrice)
    })
}

function posting(newPost){
    axios.post('https://api.vschool.io/evan/todo/', newPost).then(response => {
       displayTodos([response.data])
    })
}

// axios.get('https://api.vschool.io/evan/todo/').then(response =>{
//     response.data.forEach(todo => {
//         let li = document.createElement('li')
//         li.textContent = todo.title
//         document.getElementById('title').appendChild(li)
//     })
// })