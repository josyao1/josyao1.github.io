const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

function updateIcon() {
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.className = 'fa fa-sun-o';
  } else {
    darkModeIcon.className = 'fa fa-moon-o';
  }
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateIcon();
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  updateIcon();
});
