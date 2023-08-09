'use strict';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}

class BookCollection {
  constructor() {
    this.books = this.getLocalStorage() || [];
    this.initElements();
    this.displayBooks();
  }

  initElements() {
    this.bookList = document.getElementById('book-list');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.addBookButton = document.getElementById('add-book-button');

    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.addBook();
    });
  }
  getLocalStorage() {
    const storedBookCollection = JSON.parse(
      localStorage.getItem('bookCollection')
    );
    return storedBookCollection;
  }

  setLocalStorage() {
    localStorage.setItem('bookCollection', JSON.stringify(this.books));
  }

  displayBooks() {
    console.log(this.books);
    this.bookList.innerHTML = '';
    this.books.forEach((book) => {
      const bookContainer = document.createElement('article');

      const bookDescription = document.createElement('div');

      const titleElement = document.createElement('p');
      titleElement.textContent = `"${book.title}" by`;

      const authorElement = document.createElement('p');
      authorElement.textContent = book.author;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('data-id', book.id);
      bookContainer.appendChild(bookDescription);
      bookDescription.appendChild(titleElement);
      bookDescription.appendChild(authorElement);
      bookContainer.appendChild(removeButton);

      removeButton.addEventListener('click', () => this.removeBook(book.id));

      this.bookList.appendChild(bookContainer);
    });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.setLocalStorage();
    this.displayBooks();
  }

  addBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;

    if (title && author) {
      const newBook = new Book(title, author);
      this.books.push(newBook);
      this.setLocalStorage();
      this.titleInput.value = '';
      this.authorInput.value = '';
      this.displayBooks();
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const bookCollection = new BookCollection();
});
