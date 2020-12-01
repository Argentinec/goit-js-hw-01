let cost;
let country = prompt("В какую страну хотите сделать отправку?");

country = country.toLowerCase();

switch (country) {
    case "китай":
        cost = 100;
        break;
    case "чили":
        cost = 250;
        break;
    case "австралия":
         cost = 170;
         break;
    case "индия":
        cost = 80;
        break;
    case "ямайка":
        cost = 120;
        break;
        default:
        cost = -1;
}

if(cost !==- 1) {
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
} else {
    console.log("В вашей стране доставка не доступна");
}