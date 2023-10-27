'use strict';

document.addEventListener('click', documentClick);

function documentClick(e) {
  const target = e.target;
  if (target.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}
