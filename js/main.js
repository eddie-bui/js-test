import postApi from "./postApi";

function search() {
  const searchInput = document.getElementById("searchBox");
  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    var div = document.getElementById("searchResult");

    let listSuggestion = postApi.getSuggestion();
    if (!listSuggestion.length) return;

    div.style.display = "block";

    let ulElement = document.getElementById("suggestions");
    ulElement.innerHTML = "";
    listSuggestion.forEach((item) => {
      if (item.term.indexOf(event.target.value) >= 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item.term));
        li.setAttribute("id", item.id);
        ulElement.appendChild(li);
      }
    });
  });
}
search();
