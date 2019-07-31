// axios.get('https://api.vschool.io/evan/todo/').then((response)=>{
//     response.data.forEach(toDo =>{
//         let li = document.createElement('li')
//         li.textContent = toDo.title;
//         document.getElementById('list').appendChild(li)

//     })
// })




// function displayToDo(){
//     axios.get('https://api.vschool.io/evan/todo/').then(response =>{
//     response.data.forEach(toDo =>{
//         let li = document.createElement('li')
//         li.textContent = toDo.title
//         let markOff = document.createElement("input")
//         markOff.setAttribute('type', 'checkbox')
//         let eraseButton = document.createElement('button')
//         eraseButton.textContent = 'X'
//         eraseButton.addEventListener('click', e =>{
//             console.log('fired')
//             eraseToDo(toDo, li)
//         })
//         if(toDo.completed === true){
//             li.style.textDecoration = 'line-through'
//         }
//         let picture = document.createElement('img')
//         picture.setAttribute('class', 'pic')
//         picture.src = toDo.imgUrl
//         li.appendChild(markOff)
//         document.getElementById('list').appendChild(li)
//         li.appendChild(picture)
//         li.appendChild(eraseButton)
//     })
// })
// }
// displayToDo()















































































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

function start (updated){
    axios.get('https://api.vschool.io/evan/todo/').then(response =>{
        displayTodos(response.data, updated)
    })
}
start()

function displayTodos (todos, updated){
    if(updated){
        document.getElementById('list').innerHTML = ''
    }
    todos.forEach(toDo =>{
        let li = document.createElement('li');
        li.textContent = toDo.title;
        let markOff = document.createElement("input")
        markOff.setAttribute('type', 'checkbox')
        let eraseButton = document.createElement('button')
        eraseButton.textContent = 'X'
        eraseButton.addEventListener('click', e =>{
            eraseToDo(toDo, li)
        })
        let p = document.createElement("p")
        p.textContent = toDo.description
        let showPrice = document.createElement("p")
        showPrice.textContent = `Price: ${document.addTodo.price.value}`
        let picture = document.createElement('img')
        picture.setAttribute('class', 'pic')
        picture.src = toDo.imgUrl
        markOff.addEventListener('click', function (e) {  
            updating(toDo)
        })
        if(toDo.completed === true){
            markOff.checked = true
            li.style.textDecoration = 'line-through'
        }
        li.appendChild(markOff)
        document.getElementById('list').appendChild(li);
        li.appendChild(p)
        li.appendChild(showPrice)
        li.appendChild(picture)
        li.appendChild(eraseButton)
    })
    
}

function posting(newPost){
    axios.post('https://api.vschool.io/evan/todo/', newPost).then(response => {
       displayTodos([response.data])
    })
}

function updating(toDo){
    axios.put(`https://api.vschool.io/evan/todo/${toDo._id}`, {completed: !toDo.completed}).then(response =>{
        start(true)
        console.log(toDo)
    })
}

function eraseToDo(toDo, li){
    axios.delete(`https://api.vschool.io/evan/todo/${toDo._id}`)
    document.getElementById('list').removeChild(li)
}