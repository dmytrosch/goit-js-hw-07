const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");
let count = 0;

decrementBtnRef.addEventListener("click", toDecrement);
incrementBtnRef.addEventListener("click", toIncrement);

function toDecrement() {
  count--;
  valueRef.textContent = count;
}
function toIncrement() {
  count++;
  valueRef.textContent = count;
}
