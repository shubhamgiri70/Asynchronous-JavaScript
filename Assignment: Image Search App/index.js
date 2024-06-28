const url =
  "https://api.unsplash.com/photos/?client_id=jiqtwEKVXzmAalOZdhSyg1r0AZFDuP6WAb4bNa9c8qk";

const getSearchUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=jiqtwEKVXzmAalOZdhSyg1r0AZFDuP6WAb4bNa9c8qk`;

const root = document.querySelector(".images");
const searchEle = document.querySelector("input");

// function fetch(url, successHandler) {
//   let xhr = new XMLHttpRequest();
//   let xhr2 = new XMLHttpRequest();

//   xhr.open("GET", url);
//   xhr.onload = () => successHandler(JSON.parse(xhr.response));
//   xhr.onerror = () => {
//     console.log("something went wrong!");
//   };
//   xhr.send();
// }

const imageRender = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res.results.length) {
        displayImage(res);
      } else if (res.results){
        displayImage(res);
      }
    });
};

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

imageRender(url);

function handleSearch(event) {
  if (event.keyCode === 13 && searchEle.value) {
    const searchUrl = getSearchUrl(searchEle.value);

    imageRender(searchUrl);
    searchEle.value = "";
  }
}

searchEle.addEventListener("keyup", handleSearch);
