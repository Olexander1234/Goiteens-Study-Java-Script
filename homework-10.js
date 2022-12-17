// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в 
// категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

const itemEl = document.querySelectorAll(".item");
console.log(`У списку ${itemEl.length} категорії.`);
const titleEl = document.querySelectorAll('h2')
console.log(titleEl);

[...titleEl].forEach(function (title) {
    return console.log(title.textContent);
});

[...itemEl].forEach(function (item) {
  console.log(item.lastElementChild.children.length);
})
;


// Створюємо і додаємо колекцію

const colorPickerOptions = [
   { label: 'red', color: '#F44336' },
   { label: 'green', color: '#4CAF50' },
   { label: 'blue', color: '#2196F3' },
   { label: 'grey', color: '#607D8B' },
   { label: 'pink', color: '#E91E63' },
   { label: 'indigo', color: '#3F51B5' },
 ];
 
 const colorPickerContainerEl = document.querySelector('.js-color-picker');
 
//  const option = colorPickerOptions[0]
//  console.log(option);
 


// const buttons = colorPickerOptions.map(function (option) {
// const battonEl = document.createElement('button')
//  battonEl.type = 'button'
//  battonEl.textContent = option.label;
//  battonEl.style.backgroundColor = option.color;
//  return battonEl
// })

// console.log(buttons);


// colorPickerContainerEl.append(...buttons)



// const createBtnEl = function (options) {
//     return options.map(function (option) {
//        const buttonEl = document.createElement('button');
//          buttonEl.type = 'button';
//          buttonEl.classList = 'color-picker__option'
//          buttonEl.textContent = option.label;
//          buttonEl.style.backgroundColor = option.color;
//      return buttonEl
//      })    
     
//    }
 
//    const btns = createBtnEl(colorPickerOptions);
 
 
//    colorPickerContainerEl.append(...btns)



// const products = 

//    [
//     {
//       name: 'Товар-1',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 2000,
//       available: true,
//       onSale: true,
//     },
    
// {
//       name: 'Товар-2',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 3000,
//       available: false,
//       onSale: false,
//     },
// {
//       name: 'Товар-3',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 1500,
//       available: true,
//       onSale: false,
//     },
// {
//       name: 'Товар-4',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 2500,
//       available: false,
//       onSale: false,
//     },
//   ];


// //   <div class="js-products"></div>
// // <article class="product">
// //   <h2 class="product__name">Назва</h2>
// //   <p class="product__descr">Опис</p>
// //   <p product__pridct>Ціна: 1111 кредитів</p>
// // </article>

// // const articleEl = document.createElement('article')
// // articleEl.classList.add = "product"
// // const productName = document.createElement("h2")
// // productName.classList.add = 'product__name'
// // productName.textContent = product.name
// // const productDesrcE = document.createElement('p')
// // productDesrcE.classList.add = 'product__descr'
// // productDesrcE.textContent = products.description
// // const productPrid = document.createElement('p')
// // productPrid.classList.add = ' product__pridct'
// // productPrid.textContent = ` ціна: ${products.price} кредитів`



// const createArticle = function({name, description, price}){

//     const articleEl = document.createElement('article');
//     articleEl.classList.add = 'product';

//     const productName = document.createElement('h2');
//     productName.classList.add = 'product__name';
//     productName.textContent = name;

//     const producDescr = document.createElement('p');
//     producDescr.classList.add = 'product__descr';
//     producDescr.textContent = description;

//     const productPridict = document.createElement('p');
//     productPridict.classList.add = 'product__pridict';
//     productPridict.textContent = `Ціна: ${price} кредитів`;

//     articleEl.append(productName, producDescr, productPridict);

//     return articleEl;

// }

// const elements = products.map(createArticle);

// console.log(elements);

// const contairnEl = document.querySelector('.js-products')
// contairnEl.append(...elements)







// В HTML є пустий список ul#ingredients.

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



// Напиши скрипт для створення галереї зображень по масиву даних.

// В HTML є список ul#gallery.

// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення 
// розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.


const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  


  const option = images[0]
 console.log(option);
 
const CreateLiEl = document.createElement("li")


const ImgEl = document.createElement("img");

ImgEl.src = option.url;

ImgEl.alt = option.alt

console.log(ImgEl);









    
    
    
    // const createImgEl = function (options) {
    //     return options.map(function (option) {
    //         const LiEl = document.createElement("li")
    //        const ImgEl = document.createElement('img');
            
             
    //        ImgEl.src = option.url;
    //        ImgEl.alt= option.alt;
    //      return ImgEl
    //      })    
         
    //    }
     
    //    const imgsEl = createImgEl(images);
     

    //    const titleRef = document.querySelector("#gallery")
     
    //    UlRefEl.insertAdjacentHTML(afterbegin, String)

    //    console.log(UlRefEl);











       const form = document.querySelector('.js-register-form');
  
  form.addEventListener('submit', (event)=>{
      event.preventDefault();
  
      
      console.log('Submit');
  })
    


const input = document.querySelector(".js-input")

const checkbox = document.querySelector(".js-license")
const button = document.querySelector('js-button')



input.addEventListener('focus',())








const result =  fullName.length