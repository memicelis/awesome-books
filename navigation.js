const listPage = document.querySelector('.list-section');
const addPage = document.querySelector('.add-book-section');
const contactPage = document.querySelector('.contact-section');

const listPageLink = document.querySelector('.list-page');
const addPageLink = document.querySelector('.add-page');
const contactPageLink = document.querySelector('.contact-page');

listPageLink.addEventListener('click', () => {
  addPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  listPage.classList.remove('hidden');
});

addPageLink.addEventListener('click', () => {
  listPage.classList.add('hidden');
  contactPage.classList.add('hidden');
  addPage.classList.remove('hidden');
});

contactPageLink.addEventListener('click', () => {
  listPage.classList.add('hidden');
  addPage.classList.add('hidden');
  contactPage.classList.remove('hidden');
});
