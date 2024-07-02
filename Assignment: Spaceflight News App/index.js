const url =
  "https://newsapi.org/v2/everything?q=space&apiKey=8ccfc1a81769411faf3591beb82954ed";
const root = document.querySelector(".news");
const select = document.querySelector("#sources");
let allData = [];

fetch(url)
  .then((res) => res.json())
  .then((appData) => {
    const allSources = new Set();
    allData = appData.articles;
    allData.forEach((data) => {
      createUI(data);
      allSources.add(data.source.name);
    });
    displayOptions(allSources);
  })
  .catch((error) => {
    console.log("Something went wrong!", error);
  });

function createUI(data) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = data.urlToImage;
  const div = document.createElement("div");
  const span = document.createElement("span");
  span.classList.add("source");
  span.textContent = data.source.name;
  const h3 = document.createElement("h3");
  h3.textContent = data.description;
  const button = document.createElement("button");
  button.innerText = "Read More";
  button.addEventListener("click", () => {
    window.open(data.url);
  });
  const hr = document.createElement("hr");

  div.append(span, h3, button);
  li.append(img, div);
  root.append(li, hr);
}

function displayOptions(sources) {
  sources.forEach((source) => {
    const option = document.createElement("option");
    option.innerText = source;
    option.value = source;
    select.append(option);
  });
}

select.addEventListener("change", (event) => {
  root.innerHTML = "";
  const source = event.target.value;
  const filteredData = allData.filter((data) => data.source.name === source);
  filteredData.forEach((data) => {
    createUI(data);
  });
});
