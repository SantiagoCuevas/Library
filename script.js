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

console.log(myLibrary);
