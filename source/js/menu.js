'use strict';

const Classes = {
  NO_JS: 'navigation--no-js',
  OPENED: 'navigation--opened',
  CLOSED: 'navigation--closed'
}

const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".navigation__toggle");

navigation.classList.remove(Classes.NO_JS);

// Не забыть убрать:
// navigation.classList.remove(Classes.CLOSED);

const toggleClickHandler = () => {
  if (navigation.classList.contains(Classes.CLOSED)) {
    navigation.classList.remove(Classes.CLOSED);
    navigation.classList.add(Classes.OPENED);
  } else {
    navigation.classList.add(Classes.CLOSED);
    navigation.classList.remove(Classes.OPENED);
  }
};

toggle.addEventListener('click', toggleClickHandler);
