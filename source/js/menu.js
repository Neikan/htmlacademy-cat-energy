'use strict';

var navigation = document.querySelector(".navigation");
var navigationToggle = document.querySelector(".navigation__toggle");

navigation.classList.add("visually-hidden");

navigationToggle.addEventListener("click", function() {
  if (navigation.classList.contains("visually-hidden")) {
    navigation.classList.remove("visually-hidden");
  } else {
    navigation.classList.add("visually-hidden");
  }
});
