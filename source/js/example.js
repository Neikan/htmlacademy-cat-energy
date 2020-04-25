var initExample = function () {
  var ATTRIBUTE = 'state';

  var MEDIA_RESOLUTION = '(min-width: 768px)';

  var Class = {
    NO_DISPLAY: 'slider__image--no-display',
    IS_ACTIVE: 'slider__button--active',
    BEFORE_MORE: 'slider__picture--before-wrapper-more',
    AFTER_MORE: 'slider__picture--after-wrapper-more',
    AFTER_ACTIVE: 'slider__image--after-active',
    SLIDER_BTN_LEFT: 'slider__button--left',
    SLIDER_BTN_RIGHT: 'slider__button--right'
  };

  var State = {
    DEFAULT: 'default',
    BEFORE: 'before',
    AFTER: 'after'
  };


  /**
   * Изображения и контейнеры состояний
   */
  var beforeImageWrapper = document.querySelector('.slider__picture--before-wrapper');
  var afterImage = document.querySelector('.slider__image--after');
  var afterImageWrapper = document.querySelector('.slider__picture--after-wrapper');


  /**
   * Кнопки, отвечающие за переключение состояний
   */
  var beforeBtn = document.querySelector('.slider__text--before');
  var afterBtn = document.querySelector('.slider__text--after');
  var switchBtn = document.querySelector('.slider__button');


  /**
   * Добалвение класса элементу
   * @param {Object} element элемент
   * @param {string} classCss класс стиля
   */
  var addClass = function (element, classCss) {
    element.classList.add(classCss);
  }


  /**
   * Удаление класса у элемента
   * @param {Object} element элемент
   * @param {string} classCss класс стиля
   */
  var removeClass = function (element, classCss) {
    element.classList.remove(classCss);
  };


  /**
   * Установка признака состояния
   * @param {Number} state
   */
  var setState = function (state) {
    switchBtn.setAttribute(ATTRIBUTE, state);
  };


  /**
   * Получение значения состояния
   */
  var getState = function () {
    return switchBtn.getAttribute(ATTRIBUTE);
  };


  /**
   * Установка начального состояния
   */
  var setDefaultState = function ()  {
    setState(State.DEFAULT);
    removeClass(switchBtn, Class.IS_ACTIVE);
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
  var setBeforeState = function ()  {
    setDefaultState();
    setState(State.BEFORE);
    addClass(beforeImageWrapper, Class.BEFORE_MORE);
    addClass(afterImageWrapper, Class.NO_DISPLAY);
    addClass(switchBtn, Class.SLIDER_BTN_LEFT);
    addClass(switchBtn, Class.IS_ACTIVE);
  };


  /**
   * Установка состояния "После"
   */
  var setAfterState = function ()  {
    setDefaultState();
    setState(State.AFTER);
    addClass(afterImage, Class.AFTER_ACTIVE);
    addClass(afterImageWrapper, Class.AFTER_MORE);
    addClass(beforeImageWrapper, Class.NO_DISPLAY);
    addClass(switchBtn, Class.SLIDER_BTN_RIGHT);
    addClass(switchBtn, Class.IS_ACTIVE);
  };


  /**
   * Помощник, обеспечивающий работу кнопки "Было"
   */
  var beforeBtnClickHandler = function ()  {
    if (!(getState() === State.BEFORE)) {
      setBeforeState();

    } else {
      setDefaultState();
    }
  };


  /**
   * Помощник, обеспечивающий работу кнопки "Стало"
   */
  var afterBtnClickHandler = function ()  {
    if (!(getState() === State.AFTER)) {
      setAfterState();

    } else {
      setDefaultState();
    }
  };


  /**
   * Помощник, обеспечивающий работу центральной кнопки
   */
  var switchBtnClickHandler = function ()  {
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
  };


  /**
   * Помощник, обеспечивающий работу кнопки "Было" в мобильной версии
   */
  var beforeBtnMobileClickHandler = function ()  {
    if (!(getState() === State.BEFORE)) {
      setBeforeState();

    } else {
      setAfterState();
    }
  };


  /**
   * Помощник, обеспечивающий работу кнопки "Стало" в мобильной версии
   */
  var afterBtnMobileClickHandler = function ()  {
    if (!(getState() === State.AFTER)) {
      setAfterState();

    } else {
      setBeforeState();
    }
  };


  /**
   * Помощник, обеспечивающий работу центральной кнопки в мобильной версии
   */
  var switchBtnMobileClickHandler = function ()  {
    switch (true) {
      case (getState() === State.BEFORE):
        setAfterState();
        break;

      case (getState() === State.AFTER):
        setBeforeState();
        break;
    }
  };


  /**
   * Определение разрешения устройства и активация слайдера
   */
  var init = function () {
    if (window.matchMedia(MEDIA_RESOLUTION).matches) {
      setState(State.DEFAULT);

      beforeBtn.addEventListener('click', beforeBtnClickHandler);
      afterBtn.addEventListener('click', afterBtnClickHandler);
      switchBtn.addEventListener('click', switchBtnClickHandler);

    } else {
      setState(State.BEFORE);
      beforeBtn.addEventListener('click', beforeBtnMobileClickHandler);
      afterBtn.addEventListener('click', afterBtnMobileClickHandler);
      switchBtn.addEventListener('click', switchBtnMobileClickHandler);
    }
  };

  init();
};


if (document.querySelector('.example__slider')) {
  initExample();
}
