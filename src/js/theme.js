const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchEl = document.querySelector('#theme-switch-toggle');
switchEl.addEventListener('change', onCheckboxChange);

function onCheckboxChange(evt) {
  console.log(evt.tagret.value);
}
