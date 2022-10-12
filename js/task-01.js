// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesItemsLength= document.querySelectorAll('.item').length

const ulCategoriesEls=document.querySelector('ul#categories')
const itemChildEl =ulCategoriesEls.children[0]
const itemChildEl1=itemChildEl.querySelector('ul')
const itemChildEl11=itemChildEl1.children.length


const itemChildE2 =ulCategoriesEls.children[1]
const itemChildEl2=itemChildE2.querySelector('ul')
const itemChildEl22=itemChildEl2.children.length


const itemChildE3 =ulCategoriesEls.children[2]
const itemChildEl3=itemChildE3.querySelector('ul')
const itemChildEl33=itemChildEl3.children.length





const titleHEls=document.querySelectorAll('h2')

console.log(titleHEls)
const titleEl1=titleHEls[0].textContent;
const titleEl2=titleHEls[1].textContent;
const titleEl3=titleHEls[2].textContent;



console.log(`Number of categories:${categoriesItemsLength}

Category: ${titleEl1}

Elements: ${itemChildEl11}

Category: ${titleEl2}

Elements: ${itemChildEl22}

Category: ${titleEl3}

Elements: ${itemChildEl33}`)
