const rangeFontRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");
textRef.style.fontSize = `${rangeFontRef.value}px`;

rangeFontRef.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
