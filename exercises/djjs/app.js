let box = document.getElementById('box')
box.addEventListener('mouseover', function(e){
    console.log('working')
    box.style.background = 'blue'
})
box.addEventListener('mousedown', function(e){
    box.style.background ='red'
    console.log('yeet')
})
box.addEventListener('mouseup', function(e){
    box.style.background = 'yellow'
    console.log('up')
})
box.addEventListener('dblclick', function(e){
    box.style.background = 'green'
})
window.addEventListener('scroll', function(e){
    box.style.background = 'orange'
})
box.addEventListener('keypress', function(e){
    box.style.background
})