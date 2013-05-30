function move(fin1, fin2,  totalFrames) {
  this.fin1 = fin1;
  this.fin2 = fin2;
  this.frames = totalFrames;
}


var walk1r = new move(85, 105, 40); 
var walk2r = new move(110, 110, 40); 
var walk1l = new move(90, 130 , 40); 
var walk2l = new move(70, 70, 40);

var firstLegWalk = [walk1r, walk2r, walk1l, walk2l];
var secondLegWalk = [walk1l, walk2l, walk1r, walk2r];

var punchL = new move(0, 0, 20); 
var defaultLeftArm = new move(70, -70, 20); 
var firstHandPunch = [punchL, defaultLeftArm];

var punchR1 = new move(70, -70, 20);
var punchR2 = new move(-20, -20, 20);
var defaultRightArm = new move(110, 60, 20);

var secondHandPunch = [punchR1, punchR2, punchR1, defaultRightArm];

var punch2R1 = new move(200, 320, 20);
var punch2R2 = new move(340, 360, 20);

var secondHandPunch2 = [punch2R1, punch2R2, punch2R1, defaultRightArm];
