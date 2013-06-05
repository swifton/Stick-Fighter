function doKeyDown(e) {
  var i = e.keyCode;
  console.log(i)


  if (i == 39){ //right arrow
    character.state = "walk";
    walk(character);
  }

  if (i == 37){ //left arrow
    character.direction *= -1;
  }

  if (i == 69) {
//    character.arm1.memory = firstHandPunch.slice(0);
  }

  if (i == 81) {
//    character.arm2.memory = secondHandPunch.slice(0);
  }
  
  if (i == 87) {
//    character.arm2.memory = secondHandPunch2.slice(0);
  }
}

function doKeyUp(e) {
  var i = e.keyCode;
  
  if (i == 39) {
    character.state = "stand"
//    character.leg1.memory = [];
  //  character.leg2.memory = [];
  }
}

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);
