// // const user = {
// //     name: 'Mango',
// //     age: 20,
// //     hobby: 'html',
// //     premium: true,
// // }





// // user.mood = "happy"
// // user.hobby = "skydiving"
// // user.premium = 'false'

// // console.log(user);







// // // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.

// function countProps(object) {
//   let propCount = 0;
  
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   return propCount;
// }


// // * Викличи функції для перевірки працездатності твоєї реалізації.
// // */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач
// // ). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   let bestResult = 0;
//   let bestEmployment = "";
//   for (const key of keys) {
//     if (employees[key] > bestResult) {
//       bestResult = employees[key];
//       bestEmployment = key
//     };
//   }
//   return bestEmployment
// };
// console.log(findBestEmployee ());

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux



// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати 
// працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".



  function countTotalSalary(obj) {
    let totalSalary = 0;
    for (const salary of Object.values(obj)) {
      totalSalary += salary;
    }
    return totalSalary;
  }


/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log( 'Mango + Poly + alfred = ',
 
  countTotalSalary({
    
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  'kivi + lux + chelsy =',
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400






// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

function getAllPropValues(arr, prop) {
  return arr.reduce(function(result, item) {
    if (result.indexOf(item[prop]) === -1 && // if need unique values
        typeof item[prop] != "undefined")   // if don't want undefined's
      result.push(item[prop]);
    return result;
  }, []);
}


/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []




