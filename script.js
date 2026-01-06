const bookmarkList = document.getElementById("bookmarkList");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function save() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function render() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((b, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${b.url}" target="_blank">${b.name}</a>
      <button onclick="deleteBookmark(${index})">X</button>
    `;
    bookmarkList.appendChild(li);
  });
}

function addBookmark() {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  if (!name || !url) return;

  bookmarks.push({ name, url });
  nameInput.value = "";
  urlInput.value = "";

  save();
  render();
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  save();
  render();
}

render();
