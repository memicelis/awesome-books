let bookCollection = [];

const displayBooks = () => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const bookContainer = document.createElement('article');
    bookList.appendChild(bookContainer);
    bookContainer.innerHTML = ''; // Clear the container

    const titleElement = document.createElement('p');
    titleElement.textContent = book.title;

    const authorElement = document.createElement('p');
    authorElement.textContent = book.author;

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Remove';
    buttonElement.setAttribute('data-id', book.id);

    const hrElement = document.createElement('hr');

    bookContainer.appendChild(titleElement);
    bookContainer.appendChild(authorElement);
    bookContainer.appendChild(buttonElement);
    bookContainer.appendChild(hrElement);

    const removeBook = (id) => {
      bookCollection = bookCollection.filter((book) => book.id !== id);
      displayBooks();
      localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    };
    buttonElement.addEventListener('click', () => removeBook(book.id));
  });
};

const addBook = () => {
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const id = Math.round(Date.now());

  const title = titleInput.value;
  const author = authorInput.value;

  if (title && author) {
    const newBook = { title, author, id };

    bookCollection.push(newBook);

    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

    // CLEARING INPUTS
    titleInput.value = '';
    authorInput.value = '';
    displayBooks();
  }
};

const addButton = document.getElementById('add-book-button');
addButton.addEventListener('click', addBook);

window.addEventListener('load', () => {
  const storedBookCollection = JSON.parse(
    localStorage.getItem('bookCollection'),
  );

  if (storedBookCollection) {
    bookCollection.push(...storedBookCollection);
  }
  displayBooks();
});
