let canvas = document.getElementById("gameArea")
let context = canvas.getContext("2d")

///CONSTANTES///
const FLOOR_HEIGHT = 20;
const CHARACTER_HEIGHT = 60
const CHARACTER_WIDTH = 40
const LEMON_HEIGHT = 20
const LEMON_WIDTH = 20

///VARIABLES///
let characterX = canvas.width / 2;
let characterY = canvas.height-CHARACTER_HEIGHT-FLOOR_HEIGHT
let lemonY = 0;
let lemonX = canvas.width / 2;
let score = 0;
let life = 3;
let speed = 200;

///FUNCIONES///
function start() {
  setInterval(moveDown, speed)
  drawFloor();
  drawCharacter();
  randomLemon();
  
}

const drawFloor = () => {
  context.fillStyle = "brown";
  context.fillRect(0, canvas.height-FLOOR_HEIGHT, canvas.width, FLOOR_HEIGHT)
  
}

const drawCharacter = () => {
  context.fillStyle = "black";
  context.fillRect(characterX-CHARACTER_WIDTH/2, characterY, CHARACTER_WIDTH, CHARACTER_HEIGHT)
}

const drawLemon = () => {
  context.fillStyle = "green";
  context.fillRect(lemonX - LEMON_WIDTH/2, lemonY, LEMON_WIDTH, LEMON_HEIGHT)
}


const updateScreen = () => {
  clearCanva();
  drawCharacter();
  drawLemon()
  
}

const clearCanva = () => {
  context.clearRect(0, 0, canvas.width, canvas.height - FLOOR_HEIGHT)
}

const moveLeft = () => {
  characterX = characterX - 10;
  updateScreen();
  collisionDetected() // función colisión tambien se añadió aqui
};
const moveRight = () => {
  characterX = characterX + 10;
  updateScreen();
  collisionDetected(); // función colisión tambien se añadió aqui
};

const moveDown = () => {
  lemonY = lemonY + 10;
  updateScreen();
  collisionDetected();
  floorDetected()
};

const collisionDetected = () => {
  if (
    lemonX + LEMON_WIDTH / 2 > characterX - CHARACTER_WIDTH / 2 &&
    lemonX - LEMON_WIDTH / 2 < characterX + CHARACTER_WIDTH / 2 &&
    lemonY + LEMON_HEIGHT > characterY &&
    lemonY < characterY + CHARACTER_HEIGHT
  ) {
    randomLemon();
    score = score + 1;
   showSpan("txtScore", score)
  }
}

const floorDetected = () => {
  if (lemonY + LEMON_HEIGHT == canvas.height - FLOOR_HEIGHT) {
    randomLemon();
    life = life - 1;
    showSpan("txtLife", life)
  }
}

const randomLemon = () => {
  lemonX = random(0, canvas.width - LEMON_WIDTH);
  lemonY = 0;
  updateScreen();
}



