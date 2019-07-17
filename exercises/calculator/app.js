let button = document.getElementById('calc')
button.addEventListener('click', function(e){
    e.preventDefault()
    let firstValue = Number(document.getElementById('n1').value)
    let secondValue = Number(document.getElementById('n2').value)
    let total = firstValue + secondValue 
    // document.getElementById('answer')
    answer.innerHTML = total
    console.log(total)
    
})
let mButton = document.getElementById('multiplies')
mButton.addEventListener('click', function(e){
    e.preventDefault()
    let firstValue = Number(document.getElementById('m1').value)
    let secondValue = Number(document.getElementById('m2').value)
    let total = firstValue * secondValue
    document.getElementById('mAnswer')
    mAnswer.innerHTML = total
    console.log(total)

})

let sButton = document.getElementById('subtracts')
sButton.addEventListener('click', function(e){
    e.preventDefault()
    let firstValue = Number(document.getElementById('s1').value)
    let secondValue = Number(document.getElementById('s2').value)
    let total = firstValue - secondValue
    sAnswer.innerHTML = total 
})