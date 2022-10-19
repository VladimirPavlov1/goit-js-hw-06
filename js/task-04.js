const decrementBtn = document.querySelector('.js-decrement');
console.log(decrementBtn)
const incrementBtn = document.querySelector('.js-increment');
console.log(incrementBtn)
const valueEl =document.querySelector('#value')
console.log(valueEl)


let counterValue=0;

const increment =()=>{
    counterValue+=1;
    valueEl.textContent=counterValue;
}

const decrement=()=>{
    counterValue-=1;
    valueEl.textContent=counterValue;
}
decrementBtn.addEventListener('click',decrement);
incrementBtn.addEventListener('click',increment);