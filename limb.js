function limb(x1, y1, th1, th2, len, defaultNext, currentMove) {
  this.x1 = x1;
  this.y1 = y1;
  this.th1 = th1;
  this.th2 = th2;
  this.len = len;
  this.defaultNext = defaultNext;
  this.currentMove = currentMove;
  
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
  function setMove(move, dir) {
    this.delta = [0,0];
    if (move == undefined) return;
    var fin1, fin2;
    if (dir == 1) {
      fin1 = move.fin1;
      fin2 = move.fin2;
    }
    else {
      fin1 = 180 - move.fin1;
      fin2 = 180 - move.fin2;
    }
    this.frames = Math.round(Math.abs(fin1 - this.th1)/move.speed);
    if (this.frames != 0) this.delta = [(fin1 - this.th1)/this.frames, (fin2 - this.th2)/this.frames];
    this.defaultNext = move.defaultNext;
  }

  this.frames = 0;
  this.memory = [0, 0];
}

function down(x, y, th, len) {
  return [x + len*Math.cos(th*Math.PI/180), y + len*Math.sin(th*Math.PI/180)];
}

function up(x, y, th, len) {
  return [x + len*Math.cos((th - 180)*Math.PI/180), y + len*Math.sin((th - 180)*Math.PI/180)];
}

