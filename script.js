const myLibrary = [];

class Book {
  constructor(title = "", author = "", pages = 0, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleIsRead() {
    this.read = !this.read;
    renderLibrary(myLibrary);
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
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
  addBookForm.reset();
});

// Handle form submit
const addBookForm = document.addBook;

addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  const isRead = document.getElementById("read").checked;

  // Create book
  addBookToLibrary(titleInput, authorInput, pagesInput, isRead);

  // Render book
  renderLibrary(myLibrary);

  modal.close();
  addBookForm.reset();
});

const makeBookHTML = (book, bookIndex) => {
  const bookCard = document.createElement("div");
  const bookObj = myLibrary[bookIndex];

  bookCard.classList.add("book-card");

  bookCard.innerHTML = `
  <h2 class="white-text title">${book.title}</h2>
  <p class="white-text author">${book.author}</p>
  <p class="white-text">Pages: ${book.pages}</p>
  `;

  const isRead = document.createElement("p");
  isRead.setAttribute("class", "white-text read");
  isRead.onclick = () => bookObj.toggleIsRead();
  isRead.innerText = `${book.read ? "Read" : "Unread"}`;
  bookCard.appendChild(isRead);

  const trashBtn = document.createElement("img");
  trashBtn.setAttribute("src", "logo/trash-can-outline.svg");
  trashBtn.setAttribute("class", "filter-white trash-logo");
  trashBtn.onclick = () => deleteBook(bookIndex);
  bookCard.appendChild(trashBtn);

  return bookCard;
};

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  renderLibrary(myLibrary);
};

const renderLibrary = (library) => {
  const bookGrid = document.querySelector(".book-grid");
  const bookCards = document.querySelectorAll(".book-card");

  bookCards.forEach((el) => {
    el.remove();
  });

  library.forEach((book, index) => {
    bookGrid.appendChild(makeBookHTML(book, index));
  });
};
