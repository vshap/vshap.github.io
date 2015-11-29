function pow(base, exp) {
  var result = 1;
  for(var cnt = 0; cnt < exp; cnt++) {
    result *= base;
  }
  return result;
}

var base = prompt('Введите число', 1);
var exp = prompt('Введите степень', 1);

var result = pow(base, exp)
alert(result);

console.log('Основание = ', base);
console.log('Степень = ', exp);
console.log('Результат = ', result);
