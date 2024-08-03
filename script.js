document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', function () {});
  const section = document.querySelector('section');
  section.style.display = 'flex';
  setTimeout(() => {
    section.classList.add('show');
  });
});
