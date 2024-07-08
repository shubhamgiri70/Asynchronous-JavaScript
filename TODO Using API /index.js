let input = document.querySelector("#input");
let root = document.querySelector(".parent");
let completeBtn = document.querySelector(".complete-btn");
let activeBtn = document.querySelector(".active-btn");
let clearBtn = document.querySelector(".clear-btn");

function createUI(inputValue) {
  let div = document.createElement("div");
  div.classList.add("todos");

  let inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.classList.add("input-checkbox");

  inputCheckbox.addEventListener("change", () => {
    p.style.textDecoration = inputCheckbox.checked ? "line-through" : "none";
  });

  let p = document.createElement("p");
  p.innerText = `${inputValue}`;
  p.style.cursor = "pointer";
  p.style.fontSize = "1.3rem";

  p.addEventListener("dblclick", () => handleEditTodo(p, div));

  let span = document.createElement("span");
  span.innerText = "❌";
  span.style.cursor = "pointer";
  span.addEventListener("click", () => {
    div.remove();
  });

  div.append(inputCheckbox, p, span);
  root.append(div);
}

const handleEditTodo = (p, div) => {
  let editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = p.innerText;
  editInput.style.padding = "0.3rem 0.5rem";
  editInput.style.border = "none";

  div.replaceChild(editInput, p);

  editInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      p.innerText = editInput.value;
      div.replaceChild(p, editInput);
    }
  });
};

const handleActiveBtn = () => {
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    let todoCheckbox = todo.querySelector(".input-checkbox");
    todo.style.display = !todoCheckbox.checked ? "flex" : "none";
  });
};

const handleCompleteBtn = () => {
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    let todoCheckbox = todo.querySelector(".input-checkbox");
    todo.style.display = todoCheckbox.checked ? "flex" : "none";
  });
};

function handleInput(event) {
  if (event.keyCode === 13) {
    let inputValue = event.target.value;
    createUI(inputValue);
    input.value = "";
  }
}

activeBtn.addEventListener("click", handleActiveBtn);
completeBtn.addEventListener("click", handleCompleteBtn);

clearBtn.addEventListener("click", () => {
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    todo.remove();
  });
});

input.addEventListener("keyup", handleInput);
