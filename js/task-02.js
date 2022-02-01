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

//test//

let fragment = new DocumentFragment();
listMark.forEach((elem) => {
    // добавим в фрагмент элемент $li
    fragment.appendChild(elem);
  });
  // вставим фрагмент в #target-list
  document.querySelector('#ingredients').appendChild(fragment);
//test//


//const addList = document.createElement("li");
//list.appendChild(addList);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Potatoes";
// list.append([...ingredients]);
// console.log(list);
