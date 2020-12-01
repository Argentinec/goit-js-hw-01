const credits = 23580;
const pricePerDroid = 3000; 
let totalPrice;

const userInput = prompt("Какое колличестао дроидов желаете купить?");


if (userInput === null) {
    console.log('Отменено пользователем!');
} else {
    let quantity = Number(userInput);
    totalPrice = quantity  * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        let balance = credits - totalPrice;
        console.log(`Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`);
    }
}











// const price= credits - pricePerDroid;
// const piece = credits % pricePerDroid;

// console.log(`Вы купили ${piece} дроидов, на счету осталось ${price} кредитов.`)

// if (credits >= pricePerDroid) {
//     // credits = credits-pricePerDroid;
//     console.log(`Вы купили ${piece} дроидов, на счету осталось ${price} кредитов.`)
// } 
