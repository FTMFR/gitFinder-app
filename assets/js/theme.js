"use strict";

/**
 * {NodeElement}
 */

const $HTML = document.documentElement;

/**
 * {Boolean}
 */
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;


if (sessionStorage.getItem('theme')) {
    $HTML.dataset.theme = sessionStorage.getItem('theme');

} else {
    $HTML.dataset.theme = isLight ? "light" : "dark";
}

/**
 * {Boolean}
 */
let isPressed = false;
const changeTheme = function () {
    isPressed = isPressed ? false : true;
    this.setAttribute('aria-pressed', isPressed);
    $HTML.setAttribute('data-theme', ($HTML.dataset.theme === 'light') ? 'dark' : 'light');
    sessionStorage.setItem('theme', $HTML.dataset.theme);
}

window.addEventListener('load', function () {
    const /**{NodeElement} */ $themeBtn = document.querySelector('[data-theme-btn]');
    $themeBtn.addEventListener('click', changeTheme);
})