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

function OnOffBlockSuggest() {
  let btnShow = document.getElementById("showSuggest");
  let btnHide = document.getElementById("hideSuggest");
  btnShow.addEventListener("click", () => {
    btnShow.style.display = "none";
    btnHide.style.display = "block";
    let ul = document.getElementById("suggestions");
    ul.style.display = "block";

    List.isSuggestShow = !List.isSuggestShow;
  });

  btnHide.addEventListener("click", () => {
    btnShow.style.display = "block";
    btnHide.style.display = "none";
    let ul = document.getElementById("suggestions");
    ul.style.display = "none";
    List.isSuggestShow = !List.isSuggestShow;
  });
  console.log(List.isSuggestShow);
}

function OnOffBlockCollection() {
  let btnShow = document.getElementById("showCollection");
  let btnHide = document.getElementById("hideCollection");
  btnShow.addEventListener("click", () => {
    btnShow.style.display = "none";
    btnHide.style.display = "block";
    let ul = document.getElementById("collections");
    ul.style.display = "block";
    List.isCollectionShow = !List.isCollectionShow;
  });

  btnHide.addEventListener("click", () => {
    btnShow.style.display = "block";
    btnHide.style.display = "none";
    let ul = document.getElementById("collections");
    ul.style.display = "none";
    List.isCollectionShow = !List.isCollectionShow;
  });
}

function OnOffBlockProduct() {
  let btnShow = document.getElementById("showProduct");
  let btnHide = document.getElementById("hideProduct");
  btnShow.addEventListener("click", () => {
    btnShow.style.display = "none";
    btnHide.style.display = "block";
    let ul = document.getElementById("products");
    ul.style.display = "block";
    List.isProductShow = !List.isProductShow;
  });

  btnHide.addEventListener("click", () => {
    btnShow.style.display = "block";
    btnHide.style.display = "none";
    let ul = document.getElementById("products");
    ul.style.display = "none";
    List.isProductShow = !List.isProductShow;
  });
}

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

OnOffBlockSuggest();
OnOffBlockCollection();
OnOffBlockProduct();
search();
