// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const body = document.body;
const span = document.querySelector('.color');
button.addEventListener('click', changeColorBody);
function changeColorBody() {
  span.textContent = getRandomHexColor()
  body.style.backgroundColor = getRandomHexColor()
}