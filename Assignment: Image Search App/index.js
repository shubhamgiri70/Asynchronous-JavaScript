const url =
  "https://api.unsplash.com/photos/?client_id=jiqtwEKVXzmAalOZdhSyg1r0AZFDuP6WAb4bNa9c8qk";
const getSearchUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=jiqtwEKVXzmAalOZdhSyg1r0AZFDuP6WAb4bNa9c8qk`;
const root = document.querySelector(".images");
const searchEle = document.querySelector("input");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = () => {
    console.log("something went wrong!");
  };
  xhr.send();
}

function displayImage(images) {
  root.innerHTML = "";
  images.forEach((image) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = image.urls.regular;
    li.append(img);
    root.append(li);
  });
}

fetch(url, displayImage);

function handleSearch(event) {
  if (event.keyCode === 13 && searchEle.value) {
    fetch(getSearchUrl(searchEle.value), function (searchResult) {
      displayImage(searchResult.results);
    });
    searchEle.value = "";
  }
}

searchEle.addEventListener("keyup", handleSearch);
