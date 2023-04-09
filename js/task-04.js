// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const decrementButton = document.querySelector('#counter').firstElementChild;
const incrementButton = document.querySelector('#counter').lastElementChild;
const span = document.querySelector('#value');
decrementButton.addEventListener('click', reduceCounter);
incrementButton.addEventListener('click', increaseCounter);
function reduceCounter() {
    counterValue -= 1
    span.textContent = counterValue
};
function increaseCounter() {
    counterValue += 1;
    span.textContent = counterValue
};

