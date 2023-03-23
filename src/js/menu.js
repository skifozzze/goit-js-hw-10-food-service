import menu from '../menu.json';
import menuItemsTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = menuItemsTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markup);
