let input = document.querySelector("#input");
let root = document.querySelector(".parent");
let completeBtn = document.querySelector(".complete-btn");
let activeBtn = document.querySelector(".active-btn");
let clearBtn = document.querySelector(".clear-btn");

function ele(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    element[key] = attr[key];
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(child);
    }
  });
  return element;
}

// this is the function for creating UI

function createUI(inputValue, isChecked = false) {
  let div = ele(
    "div",
    { className: "todos" },
    ele("input", {
      type: "checkbox",
      className: "input-checkbox",
      checked: isChecked,
    }),
    ele("p", {}, `${inputValue}`),
    ele("span", {}, "❌")
  );

  let inputCheckbox = div.querySelector(".input-checkbox");
  let p = div.querySelector("p");
  let span = div.querySelector("span");

  inputCheckbox.addEventListener("change", () => {
    p.style.textDecoration = inputCheckbox.checked ? "line-through" : "none";
    saveTodos();
  });

  p.style.textDecoration = isChecked ? "line-through" : "none";

  p.addEventListener("dblclick", () => handleEditTodo(p, div));

  span.addEventListener("click", () => {
    div.remove();
    saveTodos();
  });

  root.append(div);
  saveTodos();
}

// this is the function to handle double click on the todo to edit and rename

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
      saveTodos();
    }
  });
};

// this is the function for handle active todos

const handleActiveBtn = () => {
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    let todoCheckbox = todo.querySelector(".input-checkbox");
    todo.style.display = !todoCheckbox.checked ? "flex" : "none";
  });
};

// this is the function for handle completed todos

const handleCompleteBtn = () => {
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    let todoCheckbox = todo.querySelector(".input-checkbox");
    todo.style.display = todoCheckbox.checked ? "flex" : "none";
  });
};

// this is the function for saving todos

const saveTodos = () => {
  let todos = [];
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    let todoCheckbox = todo.querySelector(".input-checkbox");
    let todoText = todo.querySelector("p").innerText;
    todos.push({ text: todoText, checked: todoCheckbox.checked });
  });
};

// this is the function for handling input

function handleInput(event) {
  if (event.keyCode === 13 && input.value !== "") {
    let inputValue = event.target.value;
    createUI(inputValue);
    input.value = "";
  }
}

activeBtn.addEventListener("click", handleActiveBtn);
completeBtn.addEventListener("click", handleCompleteBtn);

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("todos");
  let allTodos = document.querySelectorAll(".todos");
  allTodos.forEach((todo) => {
    todo.remove();
  });
});

input.addEventListener("keyup", handleInput);
