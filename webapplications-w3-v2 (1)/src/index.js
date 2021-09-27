import "./styles.css";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget ex justo. Suspendisse blandit ligula quis nunc maximus, non tincidunt metus accumsan. Nunc eget dolor ut risus pulvinar sagittis in et velit. Duis arcu felis, feugiat sit amet ligula eget, sodales rhoncus lacus. Ut non tincidunt urna. Sed sed turpis vel enim scelerisque varius. Sed pulvinar, enim vulputate ornare bibendum, lorem felis sodales leo, a dictum tellus mauris eget dui.";

const breedList = ["doberman", "malamute", "pug", "dingo", "husky"];

if (document.readyState !== "loading") {
  initializeCode(breedList, lorem);
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode(breedList, lorem);
  });
}

function initializeCode(breedList, lorem) {
  for (let i = 0; i < breedList.length; i++) {
    //create
    const item = document.createElement("div");
    const header = document.createElement("h1");
    const content = document.createElement("div");
    const text = document.createElement("p");
    const img_container = document.createElement("div");
    const img = document.createElement("img");
    const container = document.getElementsByClassName("container")[0];

    //name
    item.className = "wiki-item";
    header.className = "wiki-header";
    content.className = "wiki-content";
    text.className = "wiki-text";
    img_container.className = "img-container";
    img.className = "wiki-img";

    //insert content
    header.innerHTML = breedList[i];
    getImage(breedList[i], img);
    getText(breedList[i], text);
    //add to structure
    container.appendChild(item);
    item.appendChild(header);
    item.appendChild(content);
    content.appendChild(text);
    content.appendChild(img_container);
    img_container.appendChild(img);
  }
}

async function getImage(dog_breed, img) {
  const response = await fetch(
    "https://dog.ceo/api/breed/" + dog_breed + "/images/random"
  );
  const data = await response.json();
  img.src = data.message;
}

async function getText(dog_breed, text) {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${dog_breed}`
  );
  const data = await response.json();
  text.innerHTML = data.extract;
}
