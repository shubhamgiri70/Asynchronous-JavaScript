const input = document.querySelector("input");
let image = document.querySelector(".profile-img");
const name = document.querySelector("h2");
const bio = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");

function displayUI(data) {
  image.src = data.avatar_url;
  name.innerText = data.name;
  bio.innerText = data.bio;
  followers.innerText = `Followers: ${data.followers}`;
  following.innerText = `Following: ${data.following}`;
}

function handleChanges(event) {
  if (event.key === "Enter") {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
      input.value = ""; 
    };
    xhr.onerror = function () {
      console.log("Something went wrong...");
    };
    xhr.send();
  }
}

input.addEventListener("keyup", handleChanges);

const catImage = document.querySelector(".cat-image");
const btn = document.querySelector("button");

function handleClick() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );
  xhr.onload = function () {
    let catData = JSON.parse(xhr.response)[0];
    catImage.src = catData.url;
  };
  xhr.onerror = function () {
    console.log("Something went wrong...");
  };
  xhr.send();
}

btn.addEventListener("click", handleClick);
