var seat = document.querySelector('.seat')

seat.addEventListener('click', poop)

var button = document.querySelector('.flush-btn')

button.addEventListener('click', flush)

function flush() {
    seat.style.backgroundColor = "mintcream"
}


function poop() {
    seat.style.backgroundColor = 'darkolivegreen'
}