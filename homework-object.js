// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// }





// user.mood = "happy"
// user.hobby = "skydiving"
// user.premium = 'false'

// console.log(user);







// // Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.

function countProps(object) {
  let propCount = 0;
  
for (const key in object) {
  if (object.hasOwnProperty(key)){
    propCount += 1;
  }
}
  return propCount;
}


// * Викличи функції для перевірки працездатності твоєї реалізації.
// */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач
// ). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestResult = 0;
  let bestEmployment = "";
  for (const key of keys) {
    if (employees[key] > bestResult) {
      bestResult = employees[key];
      bestEmployment = key
    };
  }
  return bestEmployment
};
console.log(findBestEmployee ());

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

