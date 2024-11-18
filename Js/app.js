let incrementBtn = document.querySelector(".incrementBtn")
let counterInput = document.querySelector(".counter input");

function increment(){
    let value = Number(counterInput.value);
    counterInput.value = value+1
}

incrementBtn.addEventListener('click',increment)

let decrementBtn = document.querySelector(".decrementBtn")

function decrement(){
    let value = Number(counterInput.value);
    if(value > 1){
    counterInput.value = value-1; 
    }
}
decrementBtn.addEventListener('click',decrement)