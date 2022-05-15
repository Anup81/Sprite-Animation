const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575; //Width Divide by Number
const spriteHeight = 523; //Height Divide by Number
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5; // Variable Declared for Slowing the animation used in the line 35.

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // To clear whole canvas
  //   ctx.fillRect(100, 50, 100, 100);
  //   ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dy); // S - source, D - Destination
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  //Slowing Down the Game Frame
  if (gameFrame % staggerFrames == 0) {
    if (frameX < 7) {
      frameX++;
    } else {
      frameX = 0;
    }
  }

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
