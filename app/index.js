require('svg4everybody')();

const openBtns = [...document.querySelectorAll('[data-open-btn]')];

const clickCloseBtn = (e) => {
  const card = e.target.closest('[data-card]');

  card.classList.remove('card_visible');

  setTimeout(() => {
    card.classList.remove('card_open');
  }, 500);

  e.target.removeEventListener('click', clickCloseBtn);
};

const clickOpenBtn = (e) => {
  const button = e.target.closest('button');
  const card = button.nextElementSibling;

  card.classList.add('card_open');

  setTimeout(() => {
    card.classList.add('card_visible');
  }, 15);

  button.blur();

  const closeBtn = card.querySelector('[data-close-btn]');

  closeBtn.addEventListener('click', clickCloseBtn);
};

openBtns.forEach(btn => btn.addEventListener('click', clickOpenBtn));
