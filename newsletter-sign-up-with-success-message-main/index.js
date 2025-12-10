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
const text = document.getElementById("modal_text");
const error = document.getElementById("error");

open.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.checkValidity()) {
    const submittedEmail = email.value;
    text.textContent = `A confirmation email has been sent to ${submittedEmail}. Please open it
            and click the button inside to confirm your subscription.`;
    modal.classList.add("show");
    email.value = "";
  } else {
    error.classList.add("show");
    email.classList.add("show");
  }
});
email.addEventListener("input", () => {
  error.classList.remove("show");
  email.classList.remove("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
