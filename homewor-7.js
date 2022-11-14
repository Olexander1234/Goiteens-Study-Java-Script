
// 1. Створити функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”

 
const hello1 = function () {
    return 'Привіт JavaScript';
}

console.log(hello1());


// Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).

 const hello2 = function(name) {
return `Привіт, ${name} `;
 }

console.log( hello2('Василь'));

 




//  3. Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток, суму і різницю цих аргументів. Перевірте її роботу. 



const mul = function(n, m) {
   
   return n + m;
     }

     
     console.log( mul(5, 13));




//      4. Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих
//  аргументів у консоль.


// Для перевірки:
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");


const  myNewArrowFunction = (...rest)  =>  {
    console.log(rest);
}
myNewArrowFunction(1, 2, 3);
 myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");



// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат
//  у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)



const myAverageScore = function(array){
    
//    console.log(array);
let result = 0;
for (const number of array) {
    result = (result + number) / array.length;
}
    switch (number) {
        case result >= 91 && result <= 100 :

        console.log("Myaveragescore: A ");
            
            break;
            case result >= 81 && result <= 90 :

                console.log("Myaveragescore: b ");
                    
                    break;
            case result >= 71 && result <= 80 :
                console.log("Myaveragescore: c ");
                break;
                case result >= 0 && result <= 71 :

                    console.log("Myaveragescore: d ");
                        
                        break;
                        
        default:
            break;
    }

    return number;
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));

console.log(myAverageScore());





