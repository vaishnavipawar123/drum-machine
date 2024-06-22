document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const drumPads = document.querySelectorAll('.drum-pad');

  drumPads.forEach(pad => {
      pad.addEventListener('click', () => {
          playSound(pad);
      });

      document.addEventListener('keydown', (event) => {
          if (event.key.toUpperCase() === pad.dataset.key) {
              playSound(pad);
          }
      });
  });

  function playSound(pad) {
      const audio = pad.querySelector('.clip');
      audio.currentTime = 0;
      audio.play();
      display.innerText = pad.id;
  }
});
