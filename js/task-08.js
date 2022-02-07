const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const pass = event.target.elements.password.value;

  if (!email || !pass) {
    return alert("Все поля должны быть заполнены");
  }

  const Obj = { email, pass };
  console.log(Obj);
  form.reset();
}
