const url = "https://jsonplaceholder.typicode.com/posts";
const root = document.querySelector(".all-cards");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      displayUI(item);
    });
  })
  .catch((error) => {
    console.log("Something went wrong!", error);
  });

function displayUI(data) {
  let card = document.createElement("div");
  card.classList.add("card");
  let h3 = document.createElement("h3");
  h3.textContent = data.title;
  let p = document.createElement("p");
  p.textContent = data.body;
  let button = document.createElement("button");
  button.innerText = "Delete";

  card.append(h3, p, button);
  root.appendChild(card);

  button.addEventListener("click", function () {
    card.remove();
  });
}
