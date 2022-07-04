const submitButton = document.querySelector(".submit-button");
const submitButtonText = document.querySelector(".submit-button-text");

submitButton.onclick = () => {
  submitButtonText.innerHTML = "Thank you";
  submitButton.classList.add("active");
};
