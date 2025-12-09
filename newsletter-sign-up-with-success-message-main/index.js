// const open = document.getElementById("open");
// const modal = document.getElementById("modal_container");
// const close = document.getElementById("close");
// open.addEventListener("click", () => {
//   modal.classList.add("show");
// });
// close.addEventListener("click", () => {
//   modal.classList.remove("show");
// });
const open = document.getElementById("open");
const modal = document.getElementById("modal_container");
const close = document.getElementById("close");
const email = document.getElementById("email");

open.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.checkValidity()) {
    modal.classList.add("show");
  } else {
    email.reportValidity();
  }
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
