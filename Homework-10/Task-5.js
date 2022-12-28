// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output.
//  якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

/* <input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */
// const SpanEl = document.querySelector('#name-output')
const SpanEl = document.querySelector('#name-output')
const input = document.querySelector('#name-input')
input.addEventListener('input',  inputChangeHandler)
 
function  inputChangeHandler (event) {
    console.dir(event.currentTarget.value);
    SpanEl.textContent = event.currentTarget.value
}
