var gLoop;
var character = new human(100, 100, 40);

function GameLoop() {
  operate(character);

  gLoop = setTimeout(GameLoop, 10);
}

function operate(human) {
  drawHuman(human);
  human.nextMove();  
  human.moveLimbs();
  human.footFixed(character.groundLeg);
}

GameLoop();
