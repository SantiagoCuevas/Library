const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 304, true);

addBookToLibrary("The Three Body Problem", "Liu Cixin", 400, false);

addBookToLibrary("The Martian", "Andy Weir", 480, true);

for (i = 0; i < myLibrary.length; i++) {
  const bookGrid = document.querySelector(".book-grid");
  const bookCard = document.createElement("div");

  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
  <h2 class="white-text title">${myLibrary[i].title}</h2>
  <p class="white-text author">${myLibrary[i].author}</p>
  <p class="white-text">Pages: ${myLibrary[i].pages}</p>
  <p class="white-text">${myLibrary[i].read ? "Read" : "Unread"}</p>
  `;
  bookGrid.appendChild(bookCard);
}

const modal = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".close-btn");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});
