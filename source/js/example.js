'use strict';

const Class = {
  NO_DISPLAY: 'slider__image--no-display',
  IS_ACTIVE: 'slider__button--active'
}


const beforeImage = document.querySelector('.slider__image--before');
const beforeImageLeft = document.querySelector('.slider__image--before-left');


const afterImage = document.querySelector('.slider__image--after');
const afterImageRight = document.querySelector('.slider__image--after-right');


const beforeBtn = document.querySelector('.slider__text--before');
const afterBtn = document.querySelector('.slider__text--after');
const switchBtn = document.querySelector('.slider__button');

console.log(beforeBtn);

const addClass = (element) => {
  element.classList.add(Class.NO_DISPLAY);
};


const removeClass = (element) => {
  element.classList.remove(Class.NO_DISPLAY)
};


const setActive = (element) => {
  element.classList.add(Class.IS_ACTIVE);
};


const setInactive = (element) => {
  element.classList.remove(Class.IS_ACTIVE)
};

setActive(beforeBtn);

const beforeBtnClickHandler = () => {
  console.log(!beforeBtn.classList.contains(Class.IS_ACTIVE));
  if (!beforeBtn.classList.contains(Class.IS_ACTIVE)) {
    addClass(beforeImageLeft);
    addClass(afterImage);
    addClass(afterImageRight);
    setInactive(switchBtn);
    setInactive(afterBtn);

    setActive(beforeBtn);
    removeClass(beforeImage);

  } else {

    removeClass(beforeImageLeft);
    removeClass(afterImage);
    removeClass(afterImageRight);
    setInactive(beforeBtn);
    setInactive(afterBtn);

    addClass(beforeImage);
    setActive(switchBtn);
  }
};

beforeBtn.addEventListener('click', beforeBtnClickHandler);


// switchBtn.addEventListener('click', btnClickHandler);
// afterBtn.addEventListener('click', btnClickHandler);
