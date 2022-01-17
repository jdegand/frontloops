const form = document.getElementById('form');
let timersList = document.querySelector('.timers-list');
let index = 0;

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    let number = parseInt(event.target.elements.input.value);
    event.target.elements.input.value = '';
    createTimer(number);
})

function createTimer(value){
    let li = document.createElement('li');
    li.textContent = value;
    li.classList.add('li-style');
    li.classList.add(index);
    timersList.appendChild(li);
    index++;

    let interval = setInterval(()=> {
        let count = parseInt(li.textContent);
        if(count > 0){
            li.textContent = parseInt(li.textContent) - 1;
        } else {
            //clearInterval(interval) 
            return li.classList.add('remove')
        }
    }, 1000)
}

setInterval(()=> document.querySelectorAll('.remove').forEach(x => x.remove()), 0)

// added index to get specific li to eliminate - but then have to loop through all children over and over
// overcomplicates everything 

// then decided to add class to distinguish li's to remove

// have to clear the intervals at some point ? 