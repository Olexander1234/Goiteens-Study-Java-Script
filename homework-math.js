
// 1. Cтворити масив Arr1 за значеннями: 1, 5, “4”, “hello” ; і Arr2 зі зна
// ченнями: true,2, {}, [“a”], 222 . Вивести в консоль 2-гий елемент (по індексу) кожного з ма
// сивів і їх суму.

const Arr1 = [1, 5, "4", "hello"]
const Arr2 = [true,2, {}, ["a"], 222]
console.table(Arr1);
console.table(Arr2);
console.log(Arr1[1])
console.log(Arr2[1])

// Через індекс елемента додати в кінець масиву Arr1 новий елемент зі 
// значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.
Arr1[4] = 22;
console.log(Arr1);

// 3. Вивести в консоль значення і тип кожного елементу масиву Arr2 за допомогою цикла for… of

for (const Arrr1 of Arr1) {
    console.log(Arrr1); }


    // 4. const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, 
    // вивести цей масив в консоль. Також вивести в консоль індекс літери l 
    // (Л англійська маленька) за допомогою вбудованого метода. Після цього
    //  елементи масива поєднати в строку і вивести строку в консоль.

    const message = 'Welcome to Ukraine!'
    console.log(message.split(''));
    console.log(message.indexOf('l'))
    console.log(message.split(' '));


    // Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 
    // 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'.
    //  Видаліть перший елемент масиву і покажіть його. Додайте 
    // 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.
 const style = ['Джаз', 'Блюз' ]
 console.log(style.push('Рок-н-ролл'));
 console.log(style);
 
 console.log(style.splice(1, 1, 'Класика' ));
 console.log(style);
 console.log(style.shift());
 console.log(style);
 console.log(style.unshift('Реп', 'Реггі'));
 console.log(style);


// 6 . 


// Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні 

//        * сторінки в prompt.

//        * Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково 

//        * використовуй switch. Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

//        * Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення 

//        * 'У вашій країні доставка недоступна'.

//        * Нижче наведено список країн і вартість доставки.

//        * Китай - 100 кредитів

//        * Чилі - 250 кредитів

//        * Австралія - 170 кредитів

//        * Індія - 80 кредитів

//        * Ямайка - 120 кредитів


const delivery =  prompt("Ведіть країну в яку треба доставити товар");
switch (delivery) {
    case  "Китай":
        console.log(" Китай - 100 кредитів ");
        
        break;
        case  "Чілі":
           console.log(" Чилі - 250 кредитів "); 
            
            break;
            case "Індія":
                console.log("Індія - 80 кредитів "); 
        
        break;
        case "Австралія":
            console.log(" Австралія - 170 кредитів "); 
        
        break;
        case "Ямайка":
            console.log("  Ямайка - 120 кредитів " ); 
            break;
        

    default: console.log('У вашій країні доставка недоступна');
        break;
}