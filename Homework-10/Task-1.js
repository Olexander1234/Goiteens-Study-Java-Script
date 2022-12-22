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





