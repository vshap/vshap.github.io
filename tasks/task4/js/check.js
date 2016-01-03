// Проверяем целостность фреймовой структуры
var frameBusted = (top == self);
// Если загружено не фо фрейм, то загружаем
if (frameBusted) top.location.href = 'index.html';