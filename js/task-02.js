// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// Завдання 3


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainUlElem=document.querySelector('#ingredients')


const makeLiEl1= document.createElement('li');
makeLiEl1.classList.add('item');
makeLiEl1.textContent= ingredients[0];

const makeLiEl2= document.createElement('li');
makeLiEl2.classList.add('item');
makeLiEl2.textContent= ingredients[1];

const makeLiEl3= document.createElement('li');
makeLiEl3.classList.add('item');
makeLiEl3.textContent= ingredients[2];

const makeLiEl4= document.createElement('li');
makeLiEl4.classList.add('item');
makeLiEl4.textContent= ingredients[3];


const makeLiEl5= document.createElement('li');
makeLiEl5.classList.add('item');
makeLiEl5.textContent= ingredients[4];


const makeLiEl6= document.createElement('li');
makeLiEl6.classList.add('item');
makeLiEl6.textContent= ingredients[5];


mainUlElem.append(makeLiEl1,makeLiEl2,makeLiEl3,makeLiEl4,makeLiEl5,makeLiEl6)

console.log(mainUlElem)

