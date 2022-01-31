const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(function (category) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
