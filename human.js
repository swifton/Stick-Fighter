function human(neckX, neckY, len){
  this.arm1 = new limb(neckX, neckY, 80, 70, len, standRAWalk);
  this.arm2 = new limb(neckX, neckY, 110, 60, len, standLAWalk);
  this.body = new limb(neckX, neckY, 90, 90, len, standB);
  this.leg1 = new limb(this.body.x3, this.body.y3, 70, 70, len, standRL);
  this.leg2 = new limb(this.body.x3, this.body.y3, 110, 110, len, standLL);
  this.groundLeg = this.leg1;
  this.direction = 1;
  this.state = "stand";

  this.alignGenitals = alignGenitals;
  function alignGenitals(x,y) {
    this.leg1.x1 = x; this.leg2.x1 = x; this.body.x3 = x;
    this.leg1.y1 = y; this.leg2.y1 = y; this.body.y3 = y;
  }

  this.alignNeck = alignNeck;
  function alignNeck(x, y) {
    this.arm1.x1 = x; this.arm2.x1 = x; this.body.x1 = x;
    this.arm1.y1 = y; this.arm2.y1 = y; this.body.y1 = y;
  }

  this.footFixed = footFixed;
  function footFixed(leg) {
    leg.computeUp();
    this.alignGenitals(leg.x1, leg.y1);
   
    this.leg1.computeDown();
    this.leg2.computeDown();
    this.body.computeUp();
    this.alignNeck(this.body.x1, this.body.y1); 
   
    this.arm1.computeDown();
    this.arm2.computeDown();
  }

  this.moveLimbs = moveLimbs;
  function moveLimbs() {
    var limbs = [this.leg1, this.leg2, this.arm1, this.arm2, this.body];
    var limb;
    for (var j in limbs) {
      limb = limbs[j];
      limb.th1 += limb.delta[0];
      limb.th2 += limb.delta[1];
      if (limb.frames > 0) limb.frames -= 1;
      if (limb.frames == 0) {
        limb.delta[0] = 0;
        limb.delta[1] = 0;
      }
    }
  }
  
  this.orderLegs = orderLegs;
  function orderLegs() {
    if (this.leg1.th1*this.direction > this.leg2.th1*this.direction) return [this.leg2, this.leg1];
    return [this.leg1, this.leg2];
  }

  this.foreLeg = foreLeg;
  function foreLeg() {
    if (this.leg1.th1*this.direction >= this.leg2.th1*this.direction) return this.leg2;
    return this.leg1;
  }

  this.hindLeg = hindLeg;
  function hindLeg() {
    if (this.leg1.th1*this.direction <= this.leg2.th1*this.direction) return this.leg2;
    return this.leg1;
  }    

  this.foreArm = foreArm;
  function foreArm() {
    if (this.arm1.th1*this.direction >= this.arm2.th1*this.direction) return this.arm2;
    return this.arm1;
  }

  this.hindArm = hindArm;
  function hindArm() {
    if (this.arm1.th1*this.direction <= this.arm2.th1*this.direction) return this.arm2;
    return this.arm1;
  }    

  this.nextMove = nextMove;
  function nextMove() {
    var limbs = [this.leg1, this.leg2, this.arm1, this.arm2, this.body];
    var limb;
    var newMove;
    for (var j in limbs) {
      limb = limbs[j];
      if (limb.frames == 0) {
        if (limb.defaultNext != undefined) {newMove = limb.defaultNext;
          if (this.state == "walk") {
            if (limb.currentMove == walk2R) newMove = walk1L;
            if (limb.currentMove == walk2L) newMove = walk1R;
            if (limb.currentMove == walk2RA) newMove = walk1LA;
            if (limb.currentMove == walk2LA) newMove = walk1RA;
          } 
        }
        if (limb.memory[1] > 0) {
          limb.memory[1] -= 1;
          if (limb.memory[1] == 0) newMove = limb.memory[0];
        }
        this.setMove(limb, newMove);        
        if (limb.currentMove != undefined && (limb.currentMove == walk1R || limb.currentMove == walk2R)) this.groundLeg = limb;
      }
    }
  }
 
  this.setMove = setMove;
  function setMove(limb, move) {
    limb.setMove(move, this.direction);
    limb.currentMove = move; 
  }
}


