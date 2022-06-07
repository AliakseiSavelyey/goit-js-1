const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt('Enter password');

if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
