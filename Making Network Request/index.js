const image = document.querySelector("img");
const name = document.querySelector("h3");
const workingAt = document.querySelector("p");
const following = document.querySelector(".following");
const followers = document.querySelector(".followers");
const input = document.querySelector("input");

function displayUI(data) {
  image.src = data.avatar_url;
  name.innerText = data.name;
  workingAt.innerText = data.bio;
  followers.innerText = `followers: ${data.followers}`;
  following.innerText = `following: ${data.following}`;
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };

    xhr.onerror = function () {
      console.log("Somthing went wrong");
    };
    xhr.send();
    event.target.value = "";
  }
}

input.addEventListener("keyup", handleChange);
