var initMenu = function () {
  var ClassMarkup = {
    NO_JS: 'navigation--no-js',
    OPENED: 'navigation--opened',
    CLOSED: 'navigation--closed'
  };

  var navigation = document.querySelector('.navigation');
  var toggle = document.querySelector('.navigation__toggle');

  navigation.classList.remove(ClassMarkup.NO_JS);

  var toggleClickHandler = function () {
    if (navigation.classList.contains(ClassMarkup.CLOSED)) {
      navigation.classList.remove(ClassMarkup.CLOSED);
      navigation.classList.add(ClassMarkup.OPENED);
    } else {
      navigation.classList.add(ClassMarkup.CLOSED);
      navigation.classList.remove(ClassMarkup.OPENED);
    }
  };

  toggle.addEventListener('click', toggleClickHandler);
};


initMenu();
