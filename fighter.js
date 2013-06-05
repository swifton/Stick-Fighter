var gLoop;
var character = new human(100, 100, 40);

function GameLoop() {
  drawHuman(character);

  character.nextMove();  

  character.moveLimbs();
  character.footFixed(character.groundLeg);
 
//console.log(character.arm1.frames)
 
  gLoop = setTimeout(GameLoop, 10);
}

GameLoop();
