const submitButton = document.querySelector(".submit-button");
const submitButtonText = document.querySelector(".submit-button-text");

submitButton.onclick = () => {
  submitButtonText.innerHTML = "Thanks";
  submitButton.classList.add("active");
};
