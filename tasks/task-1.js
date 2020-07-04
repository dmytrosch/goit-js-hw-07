const liCategoriesRef = document.querySelectorAll("ul#categories > li.item");

console.log(`В списке ${liCategoriesRef.length} категории`);

liCategoriesRef.forEach((liCategory) => {
  const liTitle = liCategory.querySelector("h2");
  const liItems = liCategory.querySelectorAll("li");
  console.log(`Категория: ${liTitle.textContent}`);
  console.log(`Количество элементов: ${liItems.length}`);
});
