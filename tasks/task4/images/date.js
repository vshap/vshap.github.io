   function ShowDate () 
   {
     var monat = new Array("������","�������","�����","������","���","����","����","�������","��������","�������","������","�������");
     var digital = new Date();
     var m;
     m = digital.getMonth();
     var DateString = digital.getDate()+" "+monat[m]+" "+digital.getFullYear()+" ����"; 
     document.getElementById('ShowDate').innerHTML = DateString;
    }
  ShowDate();