const letterBox = document.querySelector('.letter-box');
const letterImages = document.querySelectorAll('.letter-image');

function moveImages() {
  const firstImage = letterImages[0];
  letterBox.appendChild(firstImage);
}
setInterval(moveImages, 1000);
