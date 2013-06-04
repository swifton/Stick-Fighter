function move(fin1, fin2,  totalFrames) {
  this.fin1 = fin1;
  this.fin2 = fin2;
  this.frames = totalFrames;
}


function walk(human) {
  var legs = human.orderLegs();
  if (legs[0].memory.length == 0) legs[0].memory = firstLegWalk.slice(0);
  if (legs[1].memory.length == 0) legs[1].memory = secondLegWalk.slice(0);
}

var walk1r = new move(85, 105, 40); 
var walk2r = new move(110, 110, 40); 
var walk1l = new move(90, 130 , 40); 
var walk2l = new move(70, 70, 40);

var firstLegWalk = [[walk1r,40], [walk2r,40], [walk1l,40], [walk2l,40]];
var secondLegWalk = [[walk1l,40], [walk2l,40], [walk1r,40], [walk2r,40]];

var punchL = new move(0, 0, 20); 
var defaultLeftArm = new move(70, -70, 20); 
var firstHandPunch = [punchL, defaultLeftArm];

var punchR1 = new move(70, -20, 20);
var punchR2 = new move(-20, -20, 20);
var defaultRightArm = new move(110, 60, 20);

var secondHandPunch = [[punchR1, 20], [punchR2, 20], [punchR1, 20], [defaultRightArm, 20]];

var punch2R1 = new move(210, 0, 20);
var punch2R2 = new move(340, 0, 20);

var secondHandPunch2 = [[punch2R1, 30], [punch2R2, 15], [punch2R1, 20], [defaultRightArm, 30]];
