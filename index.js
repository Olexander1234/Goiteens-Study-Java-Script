// // // // const massage = "Curabitur ligula sapien";
// // // // const maxlenghs = 16;
// // // // if (massage.length <= maxlenghs ) {
// // // //     console.log(massage);
// // // // } else {
// // // //     const newMassage = massage.split('').splice(maxlenghs, )

// // // // }






















// // // // // // Функції  


// // // // // const fn = function (num1, num2) {
// // // // //     // тіло
// // // // //     return 555;
   
// // // // //   console.log(num1);
// // // // //   console.log(num2);


// // // // //   const sum = num1 + num2;
// // // // //    console.log("код в функції", sum); 

// // // // // }
// // // // // // fn(10, 20);
// // // // // // fn(5, 8 );
// // // // // // fn(500, 80 );

// // // // // // fn(587768679675676844564564659, 63463)


// // // // // console.log('результат функцвї: ', fn(10, 20));

// // // // // // getTotalPrice()
// // // // // // function getTotalPrice() {
// // // // // //     console.log("код в функції v564564"); 
    
// // // // // // }




// // // // // /*
// // // // //  * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
// // // // //  * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
// // // // //  */






// // // // // const str = 'JavaScript';









   





















// // // // //   /*
// // // // //  * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
// // // // //  * Заголовок статті складається тільки з букв та пропусків
// // // // //  */
// // // // // // const slugfy = function (str) {
// // // // // //     const title = 'Top 10 benefits of React framework';
// // // // // // const slugTitle = str.toLocaleLowerCase().split(' ').join('-');
// // // // // // returnslugTitle;
// // // // // // }







// // // // // // console.log(slugTitle);
  
// // // // //   console.log(slugify('Top 10 benefits of React framework'));
// // // // //   console.log(slugify('Azure Static Web Apps are Awesome'));
// // // // //   console.log(slugify('Technical writing tips for non-native English speakers'));






















// // // // // const username = 'Mangp'
// // // // // const emeil = 'dfhsdfgjhrfdsgj'

// // // // // const singupData = {
// // // // //     name: "home",
// // // // //     username: username,

// // // // //     emeil: emeil,
// // // // // }

// // // // // console.log(singupData);

















// // // // // const playlist = {
// // // // //     name: 'Плейлист',
// // // // //     rating: 5,
// // // // //     tracks: ['трек-1', 'трек-2', 'трек-3'],
    
// // // // //     changeName(newName) {
// // // // //     // console.log("this: ", this);
// // // // //       this.name = newName;
// // // // //     }
// // // // //     ,

// // // // //     addTrack(newTrack){
// // // // // title.tracks.push(newTrack)
// // // // //     },
// // // // //     playlist.addTrack('nhtr-4');
// // // // // console.log(playlist);
// // // // //   };





// // // // // . Створи пустий об'єкт user. Додай в об'єкт властивість 
// // // // // userName зі своїм іменем. Додай в об'єкт властивість age зі
// // // // //  своїм віком. Додай в об'єкт метод showUserName, який виводить 
// // // // //  твоє ім'я. Додай в об'єкт метод updateAge, який додає під час
// // // // //   виклику до твоєго віку 1.
// // // // // // 
  

// // // // // const user = {
// // // // //   userName : 'Sasha' ,
// // // // //   age : 13,
// // // // //   updateAge(num){
// // // // // return this.age += num
// // // // //   }
  
// // // // // }


// // // // // // user.userName = 'Sasha' 
// // // // // //  user.age = 13;


// // // // // console.log(user.updateAge(1));




// // // // // Створіть об'єкт calculator з трьома методами:

// // // // // read(a, b) - запитує у користувача два числових значення і зберігає їх як властивості об'єкта.
// // // // // sum() - повертає суму збережених значень.
// // // // // mult() - повертає добуток збережених значень.



// // // // // const calculator = {
// // // // //   read(a, b){
// // // // //     this.num1 = a;
// // // // //     this.num2 = b;
// // // // //     console.log(calculator);
// // // // //   },
// // // // //   sum(){
// // // // //    return this.num1 + this.num2
   
// // // // //   }
// // // // // }
// // // // // calculator.read(3, 5)
// // // // // console.log(calculator.sum());


// // // // const fedback = {
// // // //     goot: 5,
// // // //     natural: 8,
// // // //     bad: 3,
// // // // }

// // // // // const keys = Object.keys(fedback)
// // // // // console.log(keys);








// // // // // console.log('totalFednack', totalFednack);


// // // // // const vaule = Object.values(fedback)


// // // // // let totalFednack = 0
// // // // // for (const vaules of vaule) {
// // // // //     console.log(vaule);

// // // // //     totalFednack += vaule
// // // // // }
// // // // const arr = Object.entries(fedback)

// // // // console.log(arr);



































// // const friends = [
// //     { name: 'Mango', online: false },
// //     { name: 'Kiwi', online: true },
// //     { name: 'Poly', online: false },
// //     { name: 'Ajax', online: false },
// //   ];
  
// // //   console.table(friends);



// // //   for (const friend of friends) {
// // //     console.log(friend);
    
// // //   }


// // //   const findFriendVyName = function(allFriend, name){
// // //     for (const friend of allFriend)  {
// // //         console.log(friend.name);
// // //     }
// // //     if (friend.name === name) {
// // //         console.log('Ураааа знайшли!');
// // //     }
// // //         console.log('упс незнайшли:(');
    
// // //   }


// //   const getAllNames = function (allFriends) {
// // const frendName = [];
// //     for (const friend of allFriends) {
// //       console.log(frends.name);
// //       friendName.push(friend.name)
// //     }
// //   };
  
// //   console.log(getAllNames (friends));























// const number = [1, 2, 8, 4, 5].concat([5,4],[63, 11])

// console.log(number);

// const number1 = [1, 2, 8, 4, 5, ...[5,4], ...[63, 11]
// ]

// console.log(number1);



// function checkStorage(available, ordered) {
 
//   const  message = ordered > available ?  "Not enough goods in stock!" : "The order is accepted, our manager will contact you" ;
//   // Change code below this line

  
//   // Change code above this line
//   return message;



// }
// const a = 1;
// const b = function (params) {
  
// }


// const fnB = function (params) {
//   console.log('Heloo');
// }

// const fnA = function (params) {
//   console.log(cb());
// }
// fnA(fnB)



// перебираючи методи масиву




// forEach

const numbers = [5, 10, 15, 20, 25]


numbers.forEach(function (number){
    // console.log(number);
})


// console.log(numbers);

// filter

const numbersFiltr = [5, 10, 15, 20, 25]
const filteredNumbers = numbersFiltr.filter(function (number) {
    return !number
    
})

// console.log( filteredNumbers);


// Map
const numberMap = [5, 10, 15, 20, 25]

const doubleNums = numbers.map(function (number) {
    return number * 2
    
})


// console.log(doubleNums);




const navRef = document.querySelector(".site-nav")
console.log(navRef);
// const navItemRef = navRef.querySelectorall(".sites-nav")
const navLinkEl = document.querySelectorAll('.site-nav__link')
console.log(navLinkEl );

const imgEl = document.querySelector('.hero__image')
console.log(imgEl);
