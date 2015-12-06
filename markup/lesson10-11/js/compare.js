// Функция поиска заданного элемента в массиве
function check_user(arr) {
    var flag;

    for (var i = 0; i < user.length; i++) {
        if (user[i] === input) {
            flag = true; // совпадение найдено
            break; // прерываем цикл
        }
    }
    if (flag) {
        alert(input + ', вы успешно вошли');
    } else {
        alert(input + ', вы не в списке!');
    }
}

// ---------------------------------------------
var i = 0;
var user = new Array (); // создаем новый массив

do {
  user[i] = prompt('Введите имя', '');
  user[i] = user[i].trim();
    if (user[i]) {
      i++;
    } else {
        alert("Вы не ввели имя!");
        user[i] = prompt('Введите имя', '');
    }
} while (i < 5);

console.log(user);

// вводим имя для проверки
var input = prompt('Имя для проверки', '');

// проверяем наличие пользователя в списке доступа
if (input.trim()) {
  check_user(input.trim());
} else {
    alert("Вы не ввели имя для проверки!");
    var input = prompt('Имя для проверки', '');
}
