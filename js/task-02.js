const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listRef = document.querySelector("#ingredients");
const listMark = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

listRef.innerHTML = listMark;
