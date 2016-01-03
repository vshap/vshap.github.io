/**
 * [ShowDate description]
 */
function ShowDate () {
  var monat = new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
  var digital = new Date();
  var m;
  m = digital.getMonth();
  var DateString = digital.getDate() + " " + monat[m] + " " + digital.getFullYear() + " года";
  document.getElementById('ShowDate').innerHTML = DateString;
}

//ShowDate();