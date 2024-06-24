const image = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.unsplash.com/photos/random/?client_id=GLB_TGZuBm3SfZ57jdomd_eeTUowxHOAsgl3qPvRYr0`
  );
  xhr.onload = function () {
    let imageData = JSON.parse(xhr.response);
    image.src = imageData.urls.small;
  };
  xhr.onerror = function () {
    console.log("Something went wrong...");
  };

  xhr.send();
});

// GLB_TGZuBm3SfZ57jdomd_eeTUowxHOAsgl3qPvRYr0
// http://api.unsplash.com/photos/random
