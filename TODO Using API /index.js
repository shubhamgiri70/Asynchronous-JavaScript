let input = document.querySelector("#input");
let root = document.querySelector(".parent");

function createUI(inputValue) {
  let div = document.createElement("div");
  div.classList.add("todos");
  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.checked = true;
  let p = document.createElement("p");
  p.innerText = `${inputValue}`;
  let span = document.createElement("span");
  span.innerText = "❌";
  span.addEventListener("click", (event) => {
    div.remove();
  });

  div.append(inputCheckbox, p, span);
  root.append(div);
}

function handleInput(event) {
  if (event.keyCode === 13) {
    let inputValue = event.target.value;
    createUI(inputValue);
    input.value = "";
  }
}

input.addEventListener("keyup", handleInput);

let baseUrl = "https://basic-todo-api.vercel.app/api/todo";

