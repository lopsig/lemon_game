let canvas = document.getElementById("gameArea")
let context = canvas.getContext("2d")

///CONSTANTES///
const FLOOR_HEIGHT = 20;
const CHARACTER_HEIGHT = 60
const CHARACTER_WIDTH = 40

///VARIABLES///
let characterX = canvas.width / 2;

///FUNCIONES///
function start() {
  drawFloor();
  drawCharacter();
  
}

const drawFloor = () => {
  context.fillStyle = "brown";
  context.fillRect(0, canvas.height-FLOOR_HEIGHT, canvas.width, FLOOR_HEIGHT)
  
}

const drawCharacter = () => {
  context.fillStyle = "black";
  context.fillRect(characterX-CHARACTER_WIDTH/2, canvas.height-CHARACTER_HEIGHT-FLOOR_HEIGHT, CHARACTER_WIDTH, CHARACTER_HEIGHT)

}

const moveLeft = () => {
  characterX = characterX - 5;
  updateScreen()
}
const moveRight = () => {
  characterX = characterX + 5;
  updateScreen()
}

const updateScreen = () => {
  clearCanva();
  drawCharacter();
  
}

const clearCanva = () => {
  context.clearRect(0, 0, canvas.width, canvas.height - FLOOR_HEIGHT)
}
