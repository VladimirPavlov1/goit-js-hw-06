// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector('#validation-input');


const validId='validation-input.valid'

const invalidId ='validation-input.invalid'

inputEl.addEventListener('blur',onInputBlur);

function onInputBlur(event){
    
    if(Number(inputEl.dataset.length)!==event.currentTarget.value.length){
        this.classList.add('validation-input.invalid')
        this.classList.replace('validation-input.valid','validation-input.invalid')
    }
   
    else{this.classList.replace('validation-input.invalid','validation-input.valid')}
};


