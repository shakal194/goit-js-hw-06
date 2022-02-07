const sizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = sizeEl.value + "px";

sizeEl.addEventListener("input", (event) => {
  console.log(event.target.value);
  textEl.style.fontSize = `${event.target.value}px`;
});
