var initOrder = function () {
  var Order = {
    MODAL: 'order',
    BTN_MAKE: 'order__btn-make',
    BTN_CLOSE: 'order__btn-close',
    NO_DISPLAY: 'order--no-display'
  }

  var orderModal = document.querySelector('.' + Order.MODAL);
  var orderBtnClose = orderModal.querySelector('.' + Order.BTN_CLOSE);
  var orderBtnsMake = document.querySelectorAll('.' + Order.BTN_MAKE);

  var orderBtnMakeClickHandler = function (evt) {
    evt.preventDefault();
    orderModal.classList.remove(Order.NO_DISPLAY);
  }

  for (var i = 0; i < orderBtnsMake.length; i++) {
    orderBtnsMake[i].addEventListener('click', orderBtnMakeClickHandler)
  };

  orderBtnClose.addEventListener('click', function () {
    orderModal.classList.add(Order.NO_DISPLAY);
  });
}

if (document.querySelector('.order')) {
  initOrder();
}
