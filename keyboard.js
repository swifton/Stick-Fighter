function doKeyDown(e) {
  var i = e.keyCode;
  console.log(i)
  
  dispatcher(i, character);
}

function doKeyUp(e) {
  var i = e.keyCode;
  
  if (i == 39 || i == 37) {
    character.state = "stand"
  }
}

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);
