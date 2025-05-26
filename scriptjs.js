function revealMessage() {
  // Reveal the love letter
  document.querySelector('.gift-box').style.display = 'none';
  document.getElementById('loveMessage').style.display = 'block';

  // Start playing music after user interacts
  const music = document.getElementById('bgMusic');
  music.play().catch((err) => {
    console.log("Autoplay prevented:", err);
  });
}
