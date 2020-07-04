const inputNameRef = document.querySelector("input#name-input");
const outputNameRef = document.querySelector("span#name-output");
const FIRST_NAME = outputNameRef.textContent;

inputNameRef.addEventListener("input", handleName);

function handleName(event) {
  if (event.target.value.length !== 0) {
    outputNameRef.textContent = event.target.value;
  } else {
    outputNameRef.textContent = FIRST_NAME;
  }
}
