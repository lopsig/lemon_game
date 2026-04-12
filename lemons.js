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
let lemonY = 5;
let lemonX = canvas.width / 2;

///FUNCIONES///
function start() {
  drawFloor();
  drawCharacter();
  drawLemon()
  
}

const drawFloor = () => {
  context.fillStyle = "brown";
  context.fillRect(0, canvas.height-FLOOR_HEIGHT, canvas.width, FLOOR_HEIGHT)
  
}

const drawCharacter = () => {
  context.fillStyle = "black";
  context.fillRect(characterX-CHARACTER_WIDTH/2, canvas.height-CHARACTER_HEIGHT-FLOOR_HEIGHT, CHARACTER_WIDTH, CHARACTER_HEIGHT)
}

const drawLemon = () => {
  context.fillStyle = "green";
  context.fillRect(lemonX - LEMON_WIDTH/2, lemonY, LEMON_WIDTH, LEMON_HEIGHT)
}

const moveLeft = () => {
  characterX = characterX - 5;
  updateScreen()
}
const moveRight = () => {
  characterX = characterX + 5;
  updateScreen()
}

const moveDown = () => {
  lemonY = lemonY + 10;
  updateScreen()
}

const updateScreen = () => {
  clearCanva();
  drawCharacter();
  drawLemon()
  
}

const clearCanva = () => {
  context.clearRect(0, 0, canvas.width, canvas.height - FLOOR_HEIGHT)
}


