const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

switchEl.addEventListener('change', onCheckboxChange);

onDarkThemeReset();

function onCheckboxChange(evt) {
  if (this.checked) {
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function onDarkThemeReset() {
  const checkedTheme = localStorage.getItem('theme');
  if (checkedTheme === Theme.DARK) {
    switchEl.checked = true;
    bodyEl.classList.add(Theme.DARK);
  }
}
