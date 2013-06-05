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
var standRA = new position(110, 60, 1, standRA);
var standLA = new position(70, -70, 1, standLA);
standLL.defaultNext = standLL;
standRL.defaultNext = standRL;
standLA.defaultNext = standLA;
standRA.defaultNext = standRA;

var walk2R = new position(110, 110, 1/2, standLL); 
var walk1R = new position(90, 105, 1/2, walk2R); 
var walk2L = new position(70, 70, 1/2, standRL);
var walk1L = new position(90, 130 , 1/2, walk2L); 

var unpunchL = new position(70, -70, 3, standLA);
var punchL = new position(0, 0, 5, unpunchL); 

var unpunchR = new position(110, 60, 4, standRA);
var punchR3 = new position(70, -20, 4, unpunchR);
var punchR2 = new position(-20, -20, 5, punchR3);
var punchR1 = new position(70, -20, 4, punchR2);

var unpunch2R = new position(110, 60, 4, standRA);
var punch2R3 = new position(210, 0, 4, unpunch2R);
var punch2R2 = new position(340, 0, 8, punch2R3);
var punch2R1 = new position(210, 0, 4, punch2R2);

