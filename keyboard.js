function doKeyDown(e) {
  var i = e.keyCode;
  console.log(i)

  if (i == 39){
    character.walk();
  }

  if (i == 69) {
    character.arm1.memory = firstHandPunch.slice(0);
  }

  if (i == 81) {
    character.arm2.memory = secondHandPunch.slice(0);
  }
  
  if (i == 87) {
    character.arm2.memory = secondHandPunch2.slice(0);
  }
}

function doKeyUp(e) {
  var i = e.keyCode;
  
  if (i == 39) {
    character.leg1.memory = [];
    character.leg2.memory = [];
  }
}

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);
