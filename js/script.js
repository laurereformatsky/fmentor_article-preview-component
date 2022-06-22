import {animatedTooltip} from './animated-tooltip.js';

const btnShare = document.querySelector('#share-btn');
const btnClose = document.querySelector('#close-btn');

btnShare.addEventListener('click', () => {
  animatedTooltip();
});

btnShare.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    animatedTooltip();
  }
});

btnClose.addEventListener('click', () => {
  animatedTooltip();
});

btnClose.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    animatedTooltip();
  }
});