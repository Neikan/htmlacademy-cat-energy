'use strict';

const ClassMarkup = {
  NO_JS: 'navigation--no-js',
  OPENED: 'navigation--opened',
  CLOSED: 'navigation--closed'
}

const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__toggle');

navigation.classList.remove(ClassMarkup.NO_JS);

const toggleClickHandler = () => {
  if (navigation.classList.contains(ClassMarkup.CLOSED)) {
    navigation.classList.remove(ClassMarkup.CLOSED);
    navigation.classList.add(ClassMarkup.OPENED);
  } else {
    navigation.classList.add(ClassMarkup.CLOSED);
    navigation.classList.remove(ClassMarkup.OPENED);
  }
};

toggle.addEventListener('click', toggleClickHandler);
