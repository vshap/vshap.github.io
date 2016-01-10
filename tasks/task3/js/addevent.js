var elem = document.querySelectorAll('area');

  if (window.addEventListener) {
    elem[0].addEventListener('click', P7AniMagic.bind(null, 'babyLayer', 0, 11, 24, 30, 0, 0), false);
    elem[1].addEventListener('mouseover', P7AniMagic.bind(null, 'babyLayer', 0, 11, 8, 30, 0, 0), false);
    elem[1].addEventListener('mouseout', P7AniMagic.bind(null, 'babyLayer', 0, 0, 1, 1, 2, 0), false);
    elem[2].addEventListener('mouseover', P7AniMagic.bind(null, 'babyLayer', -1100, 11, 8, 30, 0, 0), false);
    elem[2].addEventListener('mouseout', P7AniMagic.bind(null, 'babyLayer', 0, 0, 1, 1, 2, 0), false);
    elem[3].addEventListener('click', P7AniMagic.bind(null, 'babyLayer', -100, 0, 10, 30, 1, 0), false);
  } else if (window.attachEvent) { // IE8-
      elem[0].attachEvent('onclick', function() {
        return P7AniMagic('babyLayer', 0, 11, 8, 30, 0, 0)
      });
      elem[1].attachEvent('onmouseover', function() {
        return P7AniMagic('babyLayer', 0, 11, 8, 30, 0, 0)
      });
      elem[1].attachEvent('onmouseout', function() {
        return P7AniMagic('babyLayer', 0, 0, 1, 1, 2, 0)
      });
      elem[2].attachEvent('onmouseover', function() {
        return P7AniMagic('babyLayer', -1100, 11, 8, 30, 0, 0)
      });
      elem[2].attachEvent('onmouseout', function() {
        return P7AniMagic('babyLayer', 0, 0, 1, 1, 2, 0)
      });
      elem[3].attachEvent('onclick', function() {
        return P7AniMagic('babyLayer', -100, 0, 10, 30, 1, 0)
      });
    }