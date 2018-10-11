/**
 * Selectors & Vars
 */
const links = document.querySelectorAll('.menu__link');
const paragraphs = document.querySelectorAll('.content__section');
const menuHeight = document.querySelector('.menu').offsetHeight;
const offsets = [...paragraphs].map(p => p.offsetTop);
let nextIndex = 0;
const active = 'menu__link--active';

window.paragraphs = paragraphs;

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

const handleKey = e => {
  // Arrow left
  if (e.keyCode === 37) {
    e.preventDefault();
    const p = paragraphs[nextIndex - 1];
    if (p) {
      p.scrollIntoView({
        behavior: 'smooth',
      });
      nextIndex -= 1;
    }
  }
  // Arrow right
  if (e.keyCode === 39) {
    e.preventDefault();
    const p = paragraphs[nextIndex + 1];
    if (p) {
      p.scrollIntoView({
        behavior: 'smooth',
      });
      nextIndex += 1;
    }
  }
};

/**
 * Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKey);
  links.forEach(link => link.addEventListener('click', handleClick));
});
