const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// let list = [];
// ingredients.forEach((ingredient) => {
//   ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`);
//   list.append(ingredient);
// });
// document.querySelector("#ingredients").append(...list);

const list = document.querySelector("#ingredients");
const listMark = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
console.log(listMark);
const addList = document.createElement("li");

list.appendChild(addList);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Potatoes";
// list.append([...ingredients]);
// console.log(list);
