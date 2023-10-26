// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const item = document.querySelector(".item");
[...categories.children].forEach((item) =>
  console.log(`Category: ${item.firstElementChild.textContent}\n
Elements: ${item.lastElementChild.children.length}`)
);


