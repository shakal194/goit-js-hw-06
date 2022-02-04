let counterValue = 0;
const btnClickDecr = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const btnClickIncr = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

btnDecr.addEventListener("click", btnClickDecr);
btnIncr.addEventListener("click", btnClickIncr);

const valueEl = document.querySelector("#value");
