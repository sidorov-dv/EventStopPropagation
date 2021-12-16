let outDiv = document.getElementById('out');
let inDiv = document.getElementById('in');

outDiv.addEventListener('click', function(e) {
    console.log(`Event target is #${e.target.id}; Handler is #${this.id}`)
    outDiv.style.background = 'red'
    setTimeout (() => {
        outDiv.style.background = '';
    }, 2000)
})

inDiv.addEventListener('click', function(e) {
    console.log(`Event target is #${e.target.id}; Handler is #${this.id}`)
    inDiv.style.background = 'blue';
    setTimeout(() => {
        inDiv.style.background = '';
    }, 2000)
})

let outDivStop = document.getElementById('outStop');
let inDivStop = document.getElementById('inStop');

outDivStop.addEventListener('click', function(e) {
    console.log(`Event target is #${e.target.id}; Handler is #${this.id}`)
    outDivStop.style.background = 'red'
    setTimeout (() => {
        outDivStop.style.background = '';
    }, 2000)
})

inDivStop.addEventListener('click', function(e) {
    console.log(`Event target is #${e.target.id}; Handler is #${this.id}`)
    inDivStop.style.background = 'blue';
    e.stopPropagation();
    setTimeout(() => {
        inDivStop.style.background = '';
    }, 2000)
})