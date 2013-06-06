function position(fin1, fin2,  speed, defaultNext) {
  this.fin1 = fin1;
  this.fin2 = fin2;
  this.speed = speed;
  this.defaultNext = defaultNext;
}


function walk(human) {
  if (human.foreLeg().currentMove == walk1R || human.foreLeg().currentMove == walk1L) return;
  var foreleg = human.foreLeg()
  foreleg.defaultNext = walk1R;
  human.hindLeg().defaultNext = walk1L;
  character.state = "walk";
}

function reverse(human) {
  human.direction *= -1;
  var limbs = [human.leg1, human.leg2, human.arm1, human.arm2, human.body];
  for (var count in limbs) {
    limb = limbs[count];
    limb.th1 = 180 - limb.th1;
    limb.th2 = 180 - limb.th2;
  }
  human.leg1.computeDown();
  human.leg2.computeDown();
}

var standLL = new position(110, 110, 1/2);
var standRL = new position(70, 70, 1/2);
var standLA = new position(110, 60, 1);
var standRA = new position(70, -70, 1);
var standB = new position(90, 90, 1);
standLL.defaultNext = standLL;
standRL.defaultNext = standRL;
standLA.defaultNext = standLA;
standRA.defaultNext = standRA;
standB.defaultNext = standB;

var walk2R = new position(110, 110, 1/2, standLL); 
var walk1R = new position(90, 105, 1/2, walk2R); 
var walk2L = new position(70, 70, 1/2, standRL);
var walk1L = new position(90, 130 , 1/2, walk2L); 

var unpunchR = new position(70, -70, 3, standRA);
var punchR = new position(0, 0, 5, unpunchR); 

var unpunchL = new position(110, 60, 4, standLA);
var punchL3 = new position(70, -20, 4, unpunchL);
var punchL2 = new position(-20, -20, 5, punchL3);
var punchL1 = new position(70, -20, 4, punchL2);

var unpunch2L = new position(110, 60, 4, standLA);
var punch2L3 = new position(210, 0, 4, unpunch2L);
var punch2L2 = new position(340, 0, 8, punch2L3);
var punch2L1 = new position(210, 0, 4, punch2L2);

