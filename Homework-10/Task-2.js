// / В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// console.log(ingredients);
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за
//  одну операцію в список ul.ingredients.
//  Для створення DOM-вузлів використовуй document.createElement().

// ingredients.forEach(function (title) {
//     return  console.log(title);
  
// }
// )

// console.log(ingredients[0]);


  

    const productPotatoEl = document.createElement('li');
   
productPotatoEl.textContent = `${ ingredients[0]}`;


    const productMushroomsEl = document.createElement('li');
   
    productMushroomsEl.textContent = `${ ingredients[1]}`;



    const productGarlicEl= document.createElement('li');
   
    productGarlicEl.textContent = `${ ingredients[2]}`;


    const productTomatoEl = document.createElement('li');
   
    productTomatoEl.textContent = `${ ingredients[3]}`;


    const productPreensEl = document.createElement('li');
   
    productPreensEl.textContent = `${ ingredients[4]}`;


    const productSeasoningsEl = document.createElement('li');
   
    productSeasoningsEl.textContent = `${ ingredients[5]}`;


const UlRef = document.querySelector('#ingredients')

UlRef.append(productPotatoEl, productMushroomsEl, productGarlicEl, productTomatoEl,  productPreensEl, productSeasoningsEl)

console.log(UlRef);
