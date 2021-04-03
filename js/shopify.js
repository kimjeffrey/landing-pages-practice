const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close");

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('show');
})

closeButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
})