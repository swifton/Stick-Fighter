function position(fin1, fin2,  speed, defaultNext) {
  this.fin1 = fin1;
  this.fin2 = fin2;
  this.speed = speed;
  this.defaultNext = defaultNext;
}


function walk(human) {
//  var legs = human.orderLegs();
//  if (legs[0].memory.length == 0) legs[0].memory = firstLegWalk.slice(0);
//  if (legs[1].memory.length == 0) legs[1].memory = secondLegWalk.slice(0);
  if (human.foreLeg().currentMove == walk1R || human.foreLeg().currentMove == walk1L) return;
  var foreleg = human.foreLeg()
  foreleg.defaultNext = walk1R;
  human.hindLeg().defaultNext = walk1L;
}

var standLL = new position(110, 110, 1/2);
standLL.defaultNext = standLL;
var standRL = new position(70, 70, 1/2);
standRL.defaultNext = standRL;
var standLA = new position(70, -70, 1/2, standLA);
standLA.defaultNext = standLA;
var standRA = new position(70, 70, 1/2, standRA);
standRA.defaultNext = standRA;

var walk2R = new position(110, 110, 1/2, standLL); 
var walk1R = new position(90, 105, 1/2, walk2R); 
var walk2L = new position(70, 70, 1/2, standRL);
var walk1L = new position(90, 130 , 1/2, walk2L); 

//var firstLegWalk = [[walk1R,40], [walk2R,40], [walk1L,40], [walk2L,40]];
//var secondLegWalk = [[walk1L,40], [walk2L,40], [walk1R,40], [walk2R,40]];

var punchL = new position(0, 0, 1, standLA); 
var firstHandPunch = [punchL, standLA];

//var punchR1 = new position(70, -20, 2);
//var punchR2 = new position(-20, -20, 2);
//var defaultRightArm = new position(110, 60, 2);

//var secondHandPunch = [[punchR1, 20], [punchR2, 20], [punchR1, 20], [defaultRightArm, 20]];

//var punch2R1 = new position(210, 0, 2);
//var punch2R2 = new position(340, 0, 2);

//var secondHandPunch2 = [[punch2R1, 30], [punch2R2, 15], [punch2R1, 20], [defaultRightArm, 30]];
