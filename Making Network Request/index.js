const image = document.querySelector("img");
const name = document.querySelector("h3");
const workingAt = document.querySelector("p");
const following = document.querySelector(".following");
const followers = document.querySelector(".followers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/yatharth1cr");
xhr.onload = function () {
  let userData = JSON.parse(xhr.response);
  image.src = userData.avatar_url;
  name.innerText = userData.name;
  workingAt.innerText = userData.bio;
  followers.innerText = `followers: ${userData.followers}`;
  following.innerText = `following: ${userData.following}`;
};
xhr.onloadstart = function () {
  console.log("Data loading started");
};
xhr.onloadprogress = function () {
  console.log("Data loading....");
};
xhr.onloadend = function () {
  console.log("Data loading ended");
};
xhr.onerror = function () {
  console.log("Somthing went wrong");
};
xhr.send();
