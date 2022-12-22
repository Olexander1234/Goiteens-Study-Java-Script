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
