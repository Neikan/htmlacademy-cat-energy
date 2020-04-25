const ATTRIBUTE = `state`;

const MEDIA_RESOLUTION = `(min-width: 768px)`;

const Class = {
  NO_DISPLAY: `slider__image--no-display`,
  IS_ACTIVE: `slider__button--active`,
  BEFORE_MORE: `slider__picture--before-wrapper-more`,
  AFTER_MORE: `slider__picture--after-wrapper-more`,
  AFTER_ACTIVE: `slider__image--after-active`,
  SLIDER_BTN_LEFT: `slider__button--left`,
  SLIDER_BTN_RIGHT: `slider__button--right`
}

const State = {
  DEFAULT: `default`,
  BEFORE: `before`,
  AFTER: `after`
}


/**
 * Изображение и контейнер состояния "До"
 */
const beforeImage = document.querySelector(`.slider__image--before`);
const beforeImageWrapper = document.querySelector(`.slider__picture--before-wrapper`);


/**
 * Изображение и контейнер состояния "После"
 */
const afterImage = document.querySelector(`.slider__image--after`);
const afterImageWrapper = document.querySelector(`.slider__picture--after-wrapper`);


/**
 * Кнопки, отвечающие за переключение состояний
 */
const beforeBtn = document.querySelector(`.slider__text--before`);
const afterBtn = document.querySelector(`.slider__text--after`);
const switchBtn = document.querySelector(`.slider__button`);


/**
 * Добалвение класса элементу
 * @param {Object} element элемент
 * @param {string} classCss класс стиля
 */
const addClass = (element, classCss) => {
  element.classList.add(classCss);
};


/**
 * Удаление класса у элемента
 * @param {Object} element элемент
 * @param {string} classCss класс стиля
 */
const removeClass = (element, classCss) => {
  element.classList.remove(classCss)
};


/**
 * Установка признака состояния
 * @param {Number} state
 */
const setState = (state) => {
  switchBtn.setAttribute(ATTRIBUTE, `${state}`)
}


/**
 * Получение значения состояния
 */
const getState = () => switchBtn.getAttribute(ATTRIBUTE);


/**
 * Установка начального состояния
 */
const setDefaultState = () => {
  setState(State.DEFAULT);
  removeClass(switchBtn, Class.IS_ACTIVE)
  removeClass(switchBtn, Class.SLIDER_BTN_LEFT);
  removeClass(switchBtn, Class.SLIDER_BTN_RIGHT);
  removeClass(afterImage, Class.AFTER_ACTIVE);
  removeClass(afterImageWrapper, Class.AFTER_MORE);
  removeClass(afterImageWrapper, Class.NO_DISPLAY);
  removeClass(beforeImageWrapper, Class.BEFORE_MORE);
  removeClass(beforeImageWrapper, Class.NO_DISPLAY);
};


/**
 * Установка состояния "До"
 */
const setBeforeState = () => {
  setDefaultState();
  setState(State.BEFORE)
  addClass(beforeImageWrapper, Class.BEFORE_MORE);
  addClass(afterImageWrapper, Class.NO_DISPLAY);
  addClass(switchBtn, Class.SLIDER_BTN_LEFT);
  addClass(switchBtn, Class.IS_ACTIVE);
}


/**
 * Установка состояния "После"
 */
const setAfterState = () => {
  setDefaultState();
  setState(State.AFTER)
  addClass(afterImage, Class.AFTER_ACTIVE);
  addClass(afterImageWrapper, Class.AFTER_MORE);
  addClass(beforeImageWrapper, Class.NO_DISPLAY);
  addClass(switchBtn, Class.SLIDER_BTN_RIGHT);
  addClass(switchBtn, Class.IS_ACTIVE);
};


/**
 * Помощник, обеспечивающий работу кнопки "Было"
 */
const beforeBtnClickHandler = () => {
  if (!(getState() === State.BEFORE)) {
    setBeforeState();

  } else {
    setDefaultState();
  }
};


/**
 * Помощник, обеспечивающий работу кнопки "Стало"
 */
const afterBtnClickHandler = () => {
  if (!(getState() === State.AFTER)) {
    setAfterState();

  } else {
    setDefaultState();
  }
};


/**
 * Помощник, обеспечивающий работу центральной кнопки
 */
const switchBtnClickHandler = () => {
  switch (true) {
    case (getState() === State.DEFAULT):
      setBeforeState();
      break;

    case (getState() === State.BEFORE):
      setAfterState();
      break;

    case (getState() === State.AFTER):
      setDefaultState();
      break;
  }
}


/**
 * Помощник, обеспечивающий работу кнопки "Было" в мобильной версии
 */
const beforeBtnMobileClickHandler = () => {
  if (!(getState() === State.BEFORE)) {
    setBeforeState();

  } else {
    setAfterState();
  }
};


/**
 * Помощник, обеспечивающий работу кнопки "Стало" в мобильной версии
 */
const afterBtnMobileClickHandler = () => {
  if (!(getState() === State.AFTER)) {
    setAfterState();

  } else {
    setBeforeState();
  }
};


/**
 * Помощник, обеспечивающий работу центральной кнопки в мобильной версии
 */
const switchBtnMobileClickHandler = () => {
  switch (true) {
    case (getState() === State.BEFORE):
      setAfterState();
      break;

    case (getState() === State.AFTER):
      setBeforeState();
      break;
  }
}


/**
 * Определение разрешения устройства и активация слайдера
 */
const init = () => {
  if (window.matchMedia(MEDIA_RESOLUTION).matches) {
    setState(State.DEFAULT);

    beforeBtn.addEventListener(`click`, beforeBtnClickHandler);
    afterBtn.addEventListener(`click`, afterBtnClickHandler);
    switchBtn.addEventListener(`click`, switchBtnClickHandler);

  } else {
    setState(State.BEFORE);
    beforeBtn.addEventListener(`click`, beforeBtnMobileClickHandler);
    afterBtn.addEventListener(`click`, afterBtnMobileClickHandler);
    switchBtn.addEventListener(`click`, switchBtnMobileClickHandler);
  }
}


init();
