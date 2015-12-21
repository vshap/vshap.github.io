// Функция возведения заданного числа в указанную степень
function pow(base, exp) {
  var result = 1;
  for(var cnt = 0; cnt < Math.abs(exp.trim()); cnt++) {
    result *= base.trim();
  }
    if (exp < 0) {
      return 1/result;
    } else {
        return result;
    }
}

//--------------------------------------
var base = prompt('Введите число', 1);
base = base.trim();

// if (!base) {
//   alert("Вы не ввели число для возведения в степень!");
//   var base = prompt('Введите число', 1);
// }

switch (base) {
  case !base:
    alert("Вы не ввели число для возведения в степень!")
    var base = prompt('Введите число', 1);
    break;
  case '0':
    alert("0 в любой степени останется 0!")
    var base = prompt('Введите число', 1);
    break;
}

var exp = prompt('Введите степень числа', 1);
switch (exp.trim()) {
  case '' & ' ':
    alert("Вы не ввели значение степени!")
    var base = prompt('Введите степень числа', 1);
    break;
  case '0':
    alert("0 в любой степени останется 0!")
    var base = prompt('Введите степень числа', 1);
    break;
}

var result = pow(base, exp)
alert(result);

// вывод результатов в консоль
console.log('Основание = ', base.trim());
console.log('Степень = ', exp.trim());
console.log('Результат = ', result);
