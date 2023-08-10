const sections = [
  document.querySelector('.list-section'),
  document.querySelector('.add-book-section'),
  document.querySelector('.contact-section'),
];

const links = [
  document.querySelector('.list-page'),
  document.querySelector('.add-page'),
  document.querySelector('.contact-page'),
];

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
    sections.forEach((section, sectionIndex) => {
      section.classList.toggle('hidden', index !== sectionIndex);
    });
  });
});
