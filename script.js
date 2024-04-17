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

// Render Books already in library
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

// Add book modal window
const modal = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".close-btn");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

// Handle form submit
const addBookForm = document.addBook;

addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  const readInput = document.getElementById("read");

  // Create book
  addBookToLibrary(titleInput, authorInput, pagesInput, readInput);

  // Render book
  addBookCard(myLibrary[myLibrary.length - 1]);

  console.log(myLibrary);
  modal.close();
  addBookForm.reset();
});

// Render single book function
function addBookCard(book) {
  const bookGrid = document.querySelector(".book-grid");
  const bookCard = document.createElement("div");

  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
  <h2 class="white-text title">${book.title}</h2>
  <p class="white-text author">${book.author}</p>
  <p class="white-text">Pages: ${book.pages}</p>
  <p class="white-text">${book.read ? "Read" : "Unread"}</p>
  `;
  bookGrid.appendChild(bookCard);
}
