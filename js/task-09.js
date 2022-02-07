const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnColor.addEventListener("click", (event) => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
