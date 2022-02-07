const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listRef = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  const itemRef = document.createElement("li");
  itemRef.classList.add = "item";
  itemRef.textContent = ingredient;
  listRef.append(itemRef);
  console.log(itemRef);
});

// const listMark = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// listRef.innerHTML = listMark;
