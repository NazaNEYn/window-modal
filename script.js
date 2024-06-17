"use strict";

const openTheContext = document.querySelectorAll(".open");
const contextContainer = document.querySelector(".context-container");
const closeTheContext = document.querySelector(".close");

const openHandler = function () {
  contextContainer.classList.remove("hidden");
};

const closeHandler = function () {
  contextContainer.classList.add("hidden");
};

for (let i = 0; i < openTheContext.length; i++) {
  openTheContext[i].addEventListener("click", openHandler);
}

closeTheContext.addEventListener("click", closeHandler);
