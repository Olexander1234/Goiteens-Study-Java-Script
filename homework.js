
for (let i = 1; i <= 10; i+=1) {
    console.log(i);
    
}
for (let i = 1; i <= 10; i+=1) {
   if (i % 2 === 0) {
    console.log("число не парне");
   } else {
    console.log("число парне");
   }
}

let num = 20;

while (num <= 20) {
    console.log("number", num);
    num += 1;
}
let name = '';
while (name.length < 6) {
    name = prompt("Веdіть ім'я свого улюбленого героя");
}