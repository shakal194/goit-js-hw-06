const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listRef = document.querySelector("#ingredients");
const listMark = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

console.log(listMark);

const item = document.createElement("li");
item.classList.add("item");

item.textContent = listMark;

listRef.innerHTML = listMark;
