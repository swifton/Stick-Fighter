function position(fin1, fin2,  speed, defaultNext, type) {
  this.fin1 = fin1;
  this.fin2 = fin2;
  this.speed = speed;
  this.defaultNext = defaultNext;
  this.type = type;
}


function walk(human) {
  if (human.foreLeg().currentMove == walk1R || human.foreLeg().currentMove == walk1L) return;
  human.foreLeg().defaultNext = walk1R;
  human.hindLeg().defaultNext = walk1L;
  human.foreArm().defaultNext = walk1RA;
  human.hindArm().defaultNext = walk1LA;
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

var standLL = new position(110, 110, 1/2, undefined, "stand");
var standRL = new position(70, 70, 1/2, undefined, "stand");
var standLAFight = new position(110, 60, 1, undefined, "fight");
var standRAFight = new position(70, -70, 1, undefined, "fight");
var standLAWalk = new position(100, 100, 1, undefined, "stand");
var standRAWalk = new position(80, 80, 1, undefined, "stand");
var standB = new position(90, 90, 1/4, undefined, "stand");
standLL.defaultNext = standLL;
standRL.defaultNext = standRL;
standLAFight.defaultNext = standLAFight;
standRAFight.defaultNext = standRAFight;
standLAWalk.defaultNext = standLAWalk;
standRAWalk.defaultNext = standRAWalk;
standB.defaultNext = standB;

var walk2R = new position(110, 110, 1/2, standLL, "walk"); 
var walk1R = new position(90, 105, 1/2, walk2R, "walk"); 
var walk2L = new position(70, 70, 1/2, standRL, "walk");
var walk1L = new position(90, 130 , 1/2, walk2L, "walk"); 

var walk2RA = new position(100, 100, 1/4, standLAWalk, "walk"); 
var walk1RA = new position(90, 85, 1/4, walk2RA, "walk"); 
var walk2LA = new position(80, 70, 1/4, standRAWalk, "walk");
var walk1LA = new position(90, 85 , 1/4, walk2LA, "walk");
 
var unpunchR = new position(70, -70, 3, standRAFight, "strike");
var punchR = new position(0, 0, 5, unpunchR, "strike"); 

var unpunchL = new position(110, 60, 4, standLAFight, "strike");
var punchL3 = new position(70, -20, 4, unpunchL, "strike");
var punchL2 = new position(-20, -20, 5, punchL3, "strike");
var punchL1 = new position(70, -20, 4, punchL2, "strike");

var unpunch2L = new position(110, 60, 4, standLAFight, "strike");
var punch2L3 = new position(210, 0, 4, unpunch2L, "strike");
var punch2L2 = new position(340, 0, 8, punch2L3, "strike");
var punch2L1 = new position(210, 0, 4, punch2L2, "strike");

var unkickGroinF = new position(70, 70, 2, standRL, "strike");
var kickGroinF2 = new position(0, 0, 4, unkickGroinF, "strike");
var kickGroinF1 = new position(20, 80, 4, kickGroinF2, "strike");

var unsquatF = new position(70, 70, 4, standRL, "duck");
var unsquatH2 = new position(110, 110, 2, standLL, "duck");
var unsquatH1 = new position(-10, 150, 1/2, unsquatH2, "duck");
var squatF = new position(-20, 120, 1, unsquatF, "duck");
var squatH = new position(-20, 120, 2, unsquatH1, "duck");
var squatB = new position(110, 110, 1/4, standB, "duck");

var undodgeB = new position(90, 90, 1, standB, "dodge");
var dodgeB = new position(70, 70, 1, undodgeB, "dodge");


