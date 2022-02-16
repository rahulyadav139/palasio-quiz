//toggle theme

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  if (checkbox.hasAttribute('checked')) {
    document.body.classList.remove('dark-theme');
    checkbox.removeAttribute('checked');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark-theme');
    checkbox.setAttribute('checked', '');
    localStorage.setItem('theme', 'dark');
  }
});

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');

  if (theme) {
    if (theme === 'dark') {
      checkbox.setAttribute('checked', '');
      document.body.classList.add('dark-theme');
    }
  }
});
