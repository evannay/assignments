// let firstName = document.getElementById('firstName')
// let lastName = document.getElementById('lastName')
// let age = document.getElementById('age')
// let gender = document.getElementsByName('gender')
// let location = document.getElementsByName('location')
// let restrictions = document.getElementsByName('restrict')


let form = document.travel
let button = document.getElementById('submit')
button.addEventListener('click', function(e){
    e.preventDefault()
    let diet = form.restrict 
    console.log(form.firstName.value)
    console.log(form.lastName.value)
    console.log(form.gender.value)
    console.log(form.location.value)
    console.log(form.restrict)
    const dietResults = []
    for(let i = 0; i < diet.length; i++){
        if(diet[i].checked){
            dietResults.push(diet[i].value)
    }}
    alert(`First name: ${firstName.value}\n Last name: ${lastName.value}\n Age: ${age.value}\n Gender: ${form.gender.value}\n Flight Path: ${form.location.value}\n Dietary Restrictions include: ${dietResults}.`)
    
})

