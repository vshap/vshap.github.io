   function ShowDate () 
   {
     var monat = new Array("€нвар€","феврал€","марта","апрел€","ма€","июн€","июл€","августа","сент€бр€","окт€бр€","но€бр€","декабр€");
     var digital = new Date();
     var m;
     m = digital.getMonth();
     var DateString = digital.getDate()+" "+monat[m]+" "+digital.getFullYear()+" года"; 
     document.getElementById('ShowDate').innerHTML = DateString;
    }
  ShowDate();