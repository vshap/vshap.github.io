var elem = document.querySelectorAll('a');

for (var i = 1; i <= 5; i++) {
  // show tooltip when mouse is over
  elem[i].addEventListener('mouseover', OverIm.bind(null, 'hint' + i));
  // hide tooltip when mouse is out of
  elem[i].addEventListener('mouseout', OutIm);
}