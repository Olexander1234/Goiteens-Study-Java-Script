# Goiteens-Study-Java-Script
















      
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







/













       const form = document.querySelector('.js-register-form');
  
  form.addEventListener('submit', (event)=>{
      event.preventDefault();
  
      
      console.log('Submit');
  })
    


const input = document.querySelector(".js-input")

const checkbox = document.querySelector(".js-license")
const button = document.querySelector('js-button')



input.addEventListener('focus',())

































arr.sort((a, b) => a.name.localeCompare(b.name) && a.surname.localeCompare(b.surname))