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


const counterValue = document.querySelector("#value")
const decrementEl = document.querySelector('.decrement');
const incrementEl = document.querySelector(".increment");

counterValue.textContent = Number(counterValue);

console.dir(counterValue);

decrementEl.addEventListener("click", (event)=>{
    event.preventDefault()
    counterValue.textContent = -1

    console.log("від числа відняли 1 ");
})

incrementEl.addEventListener("click", (event)=>{
    event.preventDefault()
    counterValue.textContent = +1

    console.log("до числа додали  1 ");
})


