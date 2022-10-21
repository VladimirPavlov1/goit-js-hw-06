// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// Завдання 3

// const listItems = ingredients.map(item => {
//   const li = document.createElement('li')
//   li.textContent = item;
//   return li
// })

// listRef.append(...listItems)
const itemsList=document.querySelector('#ingredients')

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(item=>{
  const li =document.createElement('li')
  li.textContent= item;
 return li
})
itemsList.append(...listItems)


