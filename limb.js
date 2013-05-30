function limb(x1, y1, th1, th2, len) {
  this.x1 = x1;
  this.y1 = y1;
  this.th1 = th1;
  this.th2 = th2;
  this.len = len;
  
  this.computeDown = computeDown;
  function computeDown() {
    var tmp = down(this.x1, this.y1, this.th1, this.len);
    this.x2 = tmp[0];
    this.y2 = tmp[1];
    tmp = down(this.x2, this.y2, this.th2, this.len);
    this.x3 = tmp[0];
    this.y3 = tmp[1];
  }
  
  this.computeUp = computeUp;
  function computeUp() {
    var tmp = up(this.x3, this.y3, this.th2, this.len);
    this.x2 = tmp[0];
    this.y2 = tmp[1];
    tmp = up(this.x2, this.y2, this.th1, this.len);
    this.x1 = tmp[0];
    this.y1 = tmp[1];
  }
  
  this.computeDown();
  this.delta = [0, 0];

  
  this.setMove = setMove;
  function setMove(move) {
    if (move == undefined) {delta = [0,0]; return;}
    this.delta = [(move.fin1 - this.th1)/move.frames, (move.fin2 - this.th2)/move.frames];
    this.frames = move.frames;
    this.totalFrames = move.frames;
  }

  this.frames = 0;
  this.totalFrames = 0;
  this.memory = new Array;
}

function down(x, y, th, len) {
  return [x + len*Math.cos(th*Math.PI/180), y + len*Math.sin(th*Math.PI/180)];
}

function up(x, y, th, len) {
  return [x + len*Math.cos((th - 180)*Math.PI/180), y + len*Math.sin((th - 180)*Math.PI/180)];
}

