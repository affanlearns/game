let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let car = new Image();
let carSrc = 'assets/cars/gli.png';
car.src = carSrc;

let carX = 190;
let carY = 500;
let roadSpeed = 2;
let distance = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') carX -= 10;
  if (e.key === 'ArrowRight') carX += 10;
  if (e.key === 'ArrowUp') carY -= 10;
  if (e.key === 'ArrowDown') carY += 10;
});

function steer(dir) {
  if (dir === 'left') carX -= 10;
  if (dir === 'right') carX += 10;
}
function accelerate() {
  carY -= 10;
}

function selectCar(src) {
  carSrc = 'assets/cars/' + src;
  car.src = carSrc;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, carX, carY, 100, 180);
  distance += roadSpeed;
  requestAnimationFrame(gameLoop);
}

car.onload = () => {
  gameLoop();
};