function human(neckX, neckY, len){
  this.arm1 = new limb(neckX, neckY, 70, -70, len);
  this.arm2 = new limb(neckX, neckY, 110, 60, len);
  this.body = new limb(neckX, neckY, 90, 90, len);
  this.leg1 = new limb(this.body.x3, this.body.y3, 70, 70, len);
  this.leg2 = new limb(this.body.x3, this.body.y3, 110, 110, len);
  this.groundLeg = this.leg1;

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
    if (this.leg1.th1 > this.leg2.th2) return [this.leg2, this.leg1];
    return [this.leg1, this.leg2];
  }

  this.nextMove = nextMove;
  function nextMove() {
    var limbs = [this.leg1, this.leg2, this.arm1, this.arm2, this.body];
    var limb;
    for (var j in limbs) {
      limb = limbs[j];
      if (limb.frames == 0) {
        var newMove = limb.memory.splice(0,1)[0];
        limb.setMove(newMove); 
        if (newMove != undefined && (newMove[0] === walk1r || newMove[0] == walk2r)) this.groundLeg = limb;
      }
    }
  }

}

