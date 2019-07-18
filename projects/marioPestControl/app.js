let button = document.getElementById('butt')
button.addEventListener('click', function(e){
    e.preventDefault()
    let goombaP = Number(document.getElementById('goombah').value) * 5
    let bombP = Number(document.getElementById('bomb').value) * 7
    let cheepP = Number(document.getElementById('cheeps').value) * 11
    let total = goombaP + bombP + cheepP
    console.log(total)
    totalBoxx.innerHTML = total
})