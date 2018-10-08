/**
 * Selectors & Vars
 */
const links = document.querySelectorAll('.menu__link');
const paragraphs = document.querySelectorAll('.content__section');
const menuHeight = document.querySelector('.menu').offsetHeight;
const offsets = [...paragraphs].map(p => p.offsetTop);
const active = 'menu__link--active';

/**
 * Handlers
 */
const addHighlight = i => links[i].classList.add(active);

const removeHighlight = () => {
  const current = document.querySelector(`.${active}`);
  if (current) current.classList.remove(active);
};

const handleClick = e => {
  const index = [...links].indexOf(e.target);
  e.preventDefault();
  paragraphs[index + 1].scrollIntoView({
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  removeHighlight();
  if (window.scrollY >= offsets[3] - menuHeight) {
    addHighlight(2);
  } else if (window.scrollY >= offsets[2] - menuHeight) {
    addHighlight(1);
  } else if (window.scrollY >= offsets[1] - menuHeight) {
    addHighlight(0);
  }
};

/**
 * Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleScroll);
  links.forEach(link => link.addEventListener('click', handleClick));
});
