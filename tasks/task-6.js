const inputTextRef = document.querySelector("input#validation-input");

inputTextRef.addEventListener("blur", validationText);

function validationText(event) {
  if (event.target.value.length == inputTextRef.dataset.length) {
    if (inputTextRef.classList.contains("invalid")) {
      inputTextRef.classList.replace("invalid", "valid");
    } else {
      inputTextRef.classList.add("valid");
    }
  } else {
    if (inputTextRef.classList.contains("valid")) {
      inputTextRef.classList.replace("valid", "invalid");
    } else {
      inputTextRef.classList.add("invalid");
    }
  }
}
