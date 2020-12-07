const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.innerText = entryTextbox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  entryTextbox.value = "";
}

entryForm.addEventListener("submit", addEntryToDom);
