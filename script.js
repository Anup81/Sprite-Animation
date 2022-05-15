const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575; //Width Divide by Number
const spriteHeight = 523; //Height Divide by Number
// let frameX = 0;
// let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5; // Variable Declared for Slowing the animation used in the line 35.
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

// console.log(animationStates);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // To clear whole canvas
  //   ctx.fillRect(100, 50, 100, 100);
  //   ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dy); // S - source, D - Destination

  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations["jump"].loc.length; //We'll have to increase the game frame 5 times i.e 1/5 = 0.2, 2/5 = 0.4, 3/5 = 0.6...5/5 = 1
  // And 1%6 = 1

  let frameX = spriteWidth * position;
  let frameY = spriteAnimations["jump"].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
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
