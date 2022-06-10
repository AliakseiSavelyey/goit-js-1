let enteryouc = prompt('введите название вашей страны');
let price;

if (enteryouc !== null) {
  enteryouc = enteryouc.toLowerCase();
}
switch (enteryouc) {
  case 'китай':
    price = 100;
    break;

  case 'чили':
    price = 250;
    break;

  case 'австралия':
    price = 170;
    break;

  case 'индия':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    price = 3;
}

if (price !== 3) {
  alert(`Доставка в ${enteryouc} будет стоить ${price} кредитов`);
} else {
  alert('В вашей стране доставка не доступна');
}
