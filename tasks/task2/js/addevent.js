var elem = document.querySelectorAll('area');

  if (window.addEventListener) {
    elem[0].addEventListener('click', function() {
      MM_swapImage('tabimg1','','img/tab_f02.gif',1)
    }, false);
    elem[0].addEventListener('click', function() {
      MM_showHideLayers('content1','','hide','content2','','show','content3','','hide','content4','','hide','content5','','hide')
    }, false);
    elem[0].addEventListener('focus', function() {
      if (this.blur) this.blur
    }, false);
    elem[1].addEventListener('click', function() {
      MM_swapImage('tabimg1','','img/tab_f03.gif',1)
    }, false);
    elem[1].addEventListener('click', function() {
      MM_showHideLayers('content1','','hide','content2','','hide','content3','','show','content4','','hide','content5','','hide')
    }, false);
    elem[1].addEventListener('focus', function() {
      if (this.blur) this.blur
    }, false);
    elem[2].addEventListener('click', function() {
      MM_swapImage('tabimg1','','img/tab_f04.gif',1)
    }, false);
    elem[2].addEventListener('click', function() {
      MM_showHideLayers('content1','','hide','content2','','hide','content3','','hide','content4','','show','content5','','hide')
    }, false);
    elem[2].addEventListener('focus', function() {
      if (this.blur) this.blur
    }, false);
    elem[3].addEventListener('click', function() {
      MM_swapImage('tabimg1','','img/tab_f05.gif',1)
    }, false);
    elem[3].addEventListener('click', function() {
      MM_showHideLayers('content1','','hide','content2','','hide','content3','','hide','content4','','hide','content5','','show')
    }, false);
    elem[3].addEventListener('focus', function() {
      if (this.blur) this.blur
    }, false);
    elem[4].addEventListener('click', function() {
      MM_swapImage('tabimg1','','img/tab_f01.gif',1)
    }, false);
    elem[4].addEventListener('click', function() {
      MM_showHideLayers('content1','','show','content2','','hide','content3','','hide','content4','','hide','content5','','hide')
    }, false);
    elem[4].addEventListener('focus', function() {
      if (this.blur) this.blur
    }, false);


  } else if (window.attachEvent) { // IE8-
      elem[0].attachEvent('onclick', function() {
        MM_swapImage('tabimg1','','img/tab_f02.gif',1)
      }, false);
      elem[0].attachEvent('onclick', function() {
        MM_showHideLayers('content1','','hide','content2','','show','content3','','hide','content4','','hide','content5','','hide')
      }, false);
      elem[0].attachEvent('onfocus', function() {
        if (this.blur) this.blur
      }, false);
      elem[1].attachEvent('onclick', function() {
        MM_swapImage('tabimg1','','img/tab_f03.gif',1)
      }, false);
      elem[1].attachEvent('onclick', function() {
        MM_showHideLayers('content1','','hide','content2','','hide','content3','','show','content4','','hide','content5','','hide')
      }, false);
      elem[1].attachEvent('onfocus', function() {
        if (this.blur) this.blur
      }, false);
      elem[2].attachEvent('onclick', function() {
        MM_swapImage('tabimg1','','img/tab_f04.gif',1)
      }, false);
      elem[2].attachEvent('onclick', function() {
        MM_showHideLayers('content1','','hide','content2','','hide','content3','','hide','content4','','show','content5','','hide')
      }, false);
      elem[2].attachEvent('onfocus', function() {
        if (this.blur) this.blur
      }, false);
      elem[3].attachEvent('onclick', function() {
        MM_swapImage('tabimg1','','img/tab_f05.gif',1)
      }, false);
      elem[3].attachEvent('onclick', function() {
        MM_showHideLayers('content1','','hide','content2','','hide','content3','','hide','content4','','hide','content5','','show')
      }, false);
      elem[3].attachEvent('onfocus', function() {
        if (this.blur) this.blur
      }, false);
      elem[4].attachEvent('onclick', function() {
        MM_swapImage('tabimg1','','img/tab_f01.gif',1)
      }, false);
      elem[4].attachEvent('onclick', function() {
        MM_showHideLayers('content1','','show','content2','','hide','content3','','hide','content4','','hide','content5','','hide')
      }, false);
      elem[4].attachEvent('onfocus', function() {
        if (this.blur) this.blur
      }, false);
    }