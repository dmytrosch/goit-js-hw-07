const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  return li;
});

ingredientsListRef.append(...ingredientsArr);
