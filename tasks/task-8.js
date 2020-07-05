const inputNumberRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesContainerRef = document.querySelector("div#boxes");

let countBoxes = 0;
let sizeCount = 20;
const sizeCountStep = 10;

inputNumberRef.addEventListener("input", getAmount);
createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", clearBoxes);

function createBoxes() {
  for (let i = 0; i < countBoxes; i++) {
    sizeCount += sizeCountStep;
    const innerBox = document.createElement("div");
    innerBox.style.backgroundColor = getRandomRGB();
    innerBox.style.width = `${sizeCount}px`;
    innerBox.style.height = `${sizeCount}px`;
    boxesContainerRef.append(innerBox);
  }
  countBoxes = 0;
  inputNumberRef.value = null;
}
function clearBoxes() {
  boxesContainerRef.innerHTML = "";
  sizeCount = 20;
}

function getRandomRGB() {
  const randomNumber = () => Math.round(255.0 * Math.random());
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  const col = `rgb(${r}, ${g}, ${b})`;
  return col;
}
function getAmount(event) {
  countBoxes = event.target.value;
}
