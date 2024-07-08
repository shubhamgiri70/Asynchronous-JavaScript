function main() {
  let url = `https://www.anapioficeandfire.com/api/books`;
  let booksUL = document.querySelector(".book-list");
  let modelWindow = document.querySelector(".modal-window");
  let modelClose = document.querySelector(".modal-close");
  let charactersUL = document.querySelector(".characters");

  function displayCharacters(characters) {
    Promise.all(
      characters.map((character) => fetch(character).then((res) => res.json()))
    )
      .then((charactersData) => {
        charactersUL.innerHTML = "";
        charactersData.forEach((ch) => {
          let li = document.createElement("li");
          li.innerText = `${ch.name} : (${ch.aliases.join(" ")})`;
          charactersUL.append(li);
        });
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }



  function displayBooks(data) {
    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    h3.textContent = data.name;
    let p = document.createElement("p");
    p.textContent = `Authors: ${data.authors.join(", ")}`;
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = `Show Characters (${data.characters.length})`;
    button.addEventListener("click", () => {
      modelWindow.classList.remove("hidden");
      displayCharacters(data.characters);
    });

    li.append(h3, p, button);
    booksUL.append(li);
  }

  function fetchBooks() {
    fetch(url)
      .then((res) => res.json())
      .then((booksData) => {
        booksData.forEach((bookData) => {
          displayBooks(bookData);
        });
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }

  modelClose.addEventListener("click", () => {
    modelWindow.classList.add("hidden");
  });

  fetchBooks();
}

main();
