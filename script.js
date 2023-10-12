"use strict";

// Sélection des éléments

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Parcourir les boutons

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnsCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keyup", (press) => {
  console.log(press);
  if(press.key === "Escape" && !modal.classList.contains("hidden")) closeModal()
});

// for(let button of btnsOpenModal){
//   button.addEventListener("click", () => {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   })


//   // {once: true}
// }
