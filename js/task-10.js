function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDestroy = document.querySelector('#controls button[data-destroy]');
const input = document.querySelector('#controls').firstElementChild;
const boxes = document.querySelector('#boxes');
buttonCreate.addEventListener('click', onClick);
function onClick() {
  createBoxes(Number(input.value))
}
function createBoxes(amount) {
  let array = [];
  for (let index = 1; index <= amount; index += 1) {
    array.push(index);
  }
  const markup = array.map(item => `<div class='boxes-collection'></div>`).join('')
  boxes.insertAdjacentHTML('afterbegin', markup);
  const boxesCollection = document.querySelectorAll('.boxes-collection');
  let width = 20;
  [...boxesCollection].map(item => {
    width += 10
    item.style.backgroundColor = getRandomHexColor()
    item.style.width = `${width}px`
    item.style.height = `${width}px`
  }
  )
}
buttonDestroy.addEventListener('click', destroyBoxes)
function destroyBoxes() {
  boxes.innerHTML = ''
  input.value = ''
}
