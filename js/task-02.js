const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const listRef = document.querySelector("#ingredients");

// START EXAMPLE 1 //

const ingredientsItems = (ingredient) =>
  ingredient.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    console.log(itemEl);
    return itemEl;
  });
listRef.append(...ingredientsItems(ingredients));
// END EXAMPLE 1 //

//START EXAMPLE 2//

// const fragment = document.createDocumentFragment();

// ingredients.forEach(function (ingredient) {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   fragment.appendChild(itemEl);
// });

// listRef.append(fragment);
// console.log(listRef);
// //END EXAMPLE 2//
