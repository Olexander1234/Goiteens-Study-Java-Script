// Завдання 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')


decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

let counterValue = 0;

function increment() {
  value.textContent = counterValue += 1
}

function decrement() {
 counterValue -= 1
 value.textContent = counterValue
}
