// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
const elementCreateControls= document.querySelector('#controls')
console.dir(elementCreateControls)
const refs = {
  input:elementCreateControls.children[0],
  btnCreate:elementCreateControls.children[1],
  btnDestroy:elementCreateControls.children[2],
  divBoxes:document.querySelector('#boxes'),
}
console.dir(refs.divBoxes)
function createBoxes(amount){
   amount =Number(refs.input.value)
  console.log(amount)
  
  const createDiv=[];
  
  for(let i=0;i<amount;i+=1){
    console.log(i)
    createDiv.push(document.createElement("div"))
    const counterPx = 30;
    createDiv.map((box,index)=>{
    const size= String(index*10+counterPx)+'px';
      box.style.width =size;
      box.style.height =size;
      box.style.backgroundColor= getRandomHexColor();
   })
  }
  refs.divBoxes.append(...createDiv)
}

function destroyBoxes(){
  const countDivesBoxes=refs.divBoxes.querySelectorAll('div')
  console.log(countDivesBoxes)
  countDivesBoxes.forEach(box=>{
    
    box.remove('div')
    
  })
}


refs.btnCreate.addEventListener('click',createBoxes);
refs.btnDestroy.addEventListener('click',destroyBoxes)
