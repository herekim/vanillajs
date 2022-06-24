const backgroundImage = document.querySelector(".background");

backgroundImage.src = `../public/images/${
  Math.floor(Math.random() * 9) + 1
}.jpg`;

// document.body.style.backgroundImage = `url(../public/images/${
//   Math.floor(Math.random() * 9) + 1
// }.jpg)`;
