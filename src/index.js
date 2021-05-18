import './sass/main.scss';

const container = document.querySelector('.container');

const defaultActivePanel = document.querySelector('.panel--1');
defaultActivePanel.classList.add('active');

container.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('panel')) {
    const panels = document.querySelectorAll('.panel');

    for (let panel of panels) {
      if (panel === target) {
        panel.classList.toggle('active');
      } else {
        panel.classList.remove('active');
      }
    }
  }
});
