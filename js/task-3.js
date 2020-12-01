const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const answer = prompt("Введите пароль");
console.log(answer);

if (answer === null) {
    message = 'Отменено пользователем!';
}  else if (answer === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}  else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);