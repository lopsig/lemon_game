let canvas = document.getElementById("gameArea")
let context = canvas.getContext("2d")

const FLOOR_HEIGHT = 20;
const CHARACTER_HEIGHT = 60
const CHARACTER_WIDTH = 40

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
  context.fillRect(canvas.width/2-FLOOR_HEIGHT, canvas.height-CHARACTER_HEIGHT-FLOOR_HEIGHT, CHARACTER_WIDTH, CHARACTER_HEIGHT)

}