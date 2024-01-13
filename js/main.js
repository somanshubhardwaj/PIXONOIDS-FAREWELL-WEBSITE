document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const toggle = document.querySelector('.navbar-toggle');
    const tog = document.querySelector('.tog');
    const cross = document.querySelector('.cross');
  
    toggleButton.addEventListener('click', function () {
      navbarLinks.classList.toggle('show');
      toggle.classList.toggle('show');
      tog.classList.toggle('show');
      cross.classList.toggle('show');
    });
  });
  