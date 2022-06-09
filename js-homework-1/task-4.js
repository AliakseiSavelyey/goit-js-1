const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let input = prompt('сколько дроидов вы хотите купить?');

if (input === null) {
  input = 'Отменено пользователем!';
} else {
  let num = Number(input);
  totalPrice = num * pricePerDroid;

  if (totalPrice > credits) {
    input = 'Недостаточно средств на счету!';
  } else {
    let sell = credits - totalPrice;
    {
      input = `Вы купили ${num} дроидов, на счету осталось ${sell} кредитов.`;
    }
  }
}

alert(input);
