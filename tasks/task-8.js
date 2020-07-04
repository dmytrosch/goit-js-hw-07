const inputNumberRef = document.querySelector('input[type="number"]');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesContainerRef = document.querySelector("div#boxes");

let countBoxes = 0;
let sizeCount = 20;
let classNumberCount = 0;

inputNumberRef.addEventListener("input", getAmount);
createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", clearBoxes);

function createBoxes() {
  for (let i = 0; i < countBoxes; i++) {
    sizeCount += 10;
    classNumberCount++;
    const innerBox = document.createElement("div");
    innerBox.classList.add(`innerBox${classNumberCount}`);
    innerBox.style.backgroundColor = getRandomHEX();
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
  classNumberCount = 0;
  inputNumberRef.value = null;
}

function getRandomHEX() {
  const randomNumber = () => Math.round(255.0 * Math.random());
  const r = randomNumber().toString(16);
  const g = randomNumber().toString(16);
  const d = randomNumber().toString(16);
  const col = `#${r + g + d}`;
  return col;
}
function getAmount(event) {
  countBoxes = event.target.value;
}
