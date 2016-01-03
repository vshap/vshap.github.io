/**
 * [ShowDate description]
 */
function ShowDate () {

  var monat = new Array("Янв.","Февр.","Марта","Апр.","Мая","Июня","Июля","Авг.","Сент.","Окт.","Ноября","Дек.");
  var digital = new Date();
  var m;

  m = digital.getMonth();
  var DateString = digital.getDate()+" "+monat[m]+" "+digital.getFullYear()+" г.";
  document.getElementById('ShowDate').innerHTML = DateString;
}

//ShowDate();