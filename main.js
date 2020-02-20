function createYTplayer() {
  // dimmer
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // video
  const el = document.createElement('div');
  el.classList.add('yt-modal');
  el.innerHTML = `
    <iframe src="https://www.youtube.com/embed/NhheiPTdZCw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <a href="#" id="mod-close">Close</a>
  `;
  document.body.appendChild(overlay);
  document.body.appendChild(el);
  setTimeout(() => {
    overlay.style.opacity = 1;
    el.style.opacity = 1;
  }, 1);

  // close bind
  const onClose = function (evt) {
    el.parentElement.removeChild(el);
    overlay.parentElement.removeChild(overlay);
  };
  document.body.querySelector('#mod-close').addEventListener('click', onClose);
  document.body.querySelector('.overlay').addEventListener('click', onClose);
};

document.querySelector('.play-button').addEventListener('click', function (evt) {
  evt.preventDefault();
  createYTplayer();
});

if (window.location.hash.indexOf('auto') !== -1) {
  createYTplayer();
}