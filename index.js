const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");

function addEntryToDom(event) {
  event.preventDefault();
}

entryForm.addEventListener("submit", addEntryToDom);
