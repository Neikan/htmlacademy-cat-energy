const CLASS_ERROR = 'error';

const feedbackBtn = document.querySelector('.form-feedback__button');
const requiredInputs = Array.from(document.querySelectorAll('input[required]'));

const addErrorClass = () => (requiredInput) => {
  if (!requiredInput.value) {
    requiredInput.classList.add(CLASS_ERROR);
  }
};

const removeErrorClass = () => (requiredInput) => {
  requiredInput.addEventListener('input', function () {
    this.classList.remove(CLASS_ERROR);
  });
}

const feedbackBtnClickHandler = () => requiredInputs.map(addErrorClass());

feedbackBtn.addEventListener('click', feedbackBtnClickHandler);

requiredInputs.map(removeErrorClass());
