import { List } from "./constant.js";
import postApi from "./postApi.js";

function search() {
  const searchInput = document.getElementById("searchBox");
  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    let div = document.getElementById("searchResult");
    if (List.isSuggestShow) {
      let block = document.getElementById("suggest-block");
      block.style.display = "block";
      getDataSuggestion(event);
    }
    if (List.isCollectionShow) {
      let block = document.getElementById("collect-block");
      block.style.display = "block";
      getDataCollection(event);
    }
    if (List.isProductShow) {
      let block = document.getElementById("product-block");
      block.style.display = "block";
      getDataProduct(event);
    }

    div.style.display = "block";
  });
}

// function OnOffBlock() {
//   let btn = document.getElementById("deleteSuggest");
//   btn.addEventListener("click", () => {

//   })
// }

async function getDataSuggestion(event) {
  const res = await postApi.getSuggestion();
  let ulElement = document.getElementById("suggestions");
  ulElement.innerHTML = "";
  res.forEach((item) => {
    if (item.term.indexOf(event.target.value) >= 0) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(item.term));
      li.setAttribute("id", item.id);
      ulElement.appendChild(li);
    }
  });
}

async function getDataCollection(event) {
  const res = await postApi.getCollection();
  let ulElement = document.getElementById("collections");
  ulElement.innerHTML = "";
  res.forEach((item) => {
    if (item.title.indexOf(event.target.value) >= 0) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(item.title));
      li.setAttribute("id", item.id);
      ulElement.appendChild(li);
    }
  });
}

async function getDataProduct(event) {
  const res = await postApi.getProduct();
  let ulElement = document.getElementById("products");
  ulElement.innerHTML = "";
  res.forEach((item) => {
    if (item.title.indexOf(event.target.value) >= 0) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(item.title));
      li.setAttribute("id", item.id);
      ulElement.appendChild(li);
    }
  });
}
search();
