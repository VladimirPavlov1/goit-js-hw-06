// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const formEl = document.querySelector('#name-input');

console.log(formEl)

const spanEl = document.querySelector('#name-output');

console.log(spanEl)

 
formEl.addEventListener('input',onInputForm);

function onInputForm(event){
    
    if(Number(event.currentTarget.value.length)>0){
    spanEl.textContent = event.currentTarget.value}
    
    else{spanEl.textContent = "Anonymous"}
}


