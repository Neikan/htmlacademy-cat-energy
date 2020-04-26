var initFormFeedback = function () {
  var CLASS_ERROR = 'form-feedback__error';

  var feedbackBtn = document.querySelector('.form-feedback__button');
  var requiredInputs = document.querySelectorAll('input[required]');

  var feedbackBtnClickHandler = function () {
    for (var i = 0; i < requiredInputs.length; i++) {
      if (!requiredInputs[i].value) {
        requiredInputs[i].classList.add(CLASS_ERROR);
      }
    }
  }

  feedbackBtn.addEventListener('click', feedbackBtnClickHandler);

  for (var i = 0; i < requiredInputs.length; i++) {
    requiredInputs[i].addEventListener('input', function () {
      this.classList.remove(CLASS_ERROR);
    })
  };
}


if (document.querySelector('.form-feedback')) {
  initFormFeedback();
}
