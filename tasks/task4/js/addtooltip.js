var elem = document.querySelectorAll('a');

for (var i = 1; i <= 5; i++) {
  // show tooltip when mouse is over
  if (window.addEventListener) {
    elem[i].addEventListener('mouseover', OverIm.bind(null, 'hint' + i), false);
    // hide tooltip when mouse is out of
    elem[i].addEventListener('mouseout', OutIm, false);
    } else if (window.attachEvent) { // IE8-
        elem[i].attachEvent('onmouseover', function() {
          return OverIm('hint' + i);
        });
        elem[i].attachEvent('onmouseout', OutIm);
    }
}