const tooltip = document.querySelector('#tooltip');

let num = 0;

export function animatedTooltip() {
  num++;

  if (num == 1) {
    tooltip.classList.remove('hidden');
    tooltip.classList?.add('animate__animated', 'animate__faster');
    tooltip.classList.add('animate__fadeInUp');
  }

  if (num == 2) {
    tooltip.classList.remove('animate__fadeInUp');
    tooltip.classList.add('animate__fadeOutDown');

    setTimeout(() => {
      tooltip.classList.add('hidden');
      tooltip.classList.remove('animate__animated', 'animate__faster', 'animate__fadeOutDown');
    }, 450);

    num = 0;
  }
}