function doKeyDown(e) {
  var i = e.keyCode;
  console.log(i)


  if (i == 39){ //right arrow
    character.state = "walk";
    walk(character);
  }

  if (i == 37){ //left arrow
    reverse(character);
  }

  if (i == 69) { // E
    character.arm1.defaultNext = punchL;
  }

  if (i == 65) { // A
//    character.arm2.memory = secondHandPunch.slice(0);
    character.arm2.defaultNext = punchR1;
  }
  
  if (i == 81) { // Q
//    character.arm2.memory = secondHandPunch2.slice(0);
    character.arm2.defaultNext = punch2R1;
  }
}

function doKeyUp(e) {
  var i = e.keyCode;
  
  if (i == 39) {
    character.state = "stand"
  }
}

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);
