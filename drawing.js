function drawHuman(human) {
 
  var map = [[human.leg1, "leftLeg"], [human.leg2, "rightLeg"], [human.body, "body"], [human.arm1, "leftArm"], [human.arm2, "rightArm"]];
  var line;
  var currentLimb;

  for (var i in map) {
  currentLimb = map[i][0];

  line = document.getElementById(map[i][1] + "1");
  line.setAttribute("x1", currentLimb.x1);
  line.setAttribute("x2", currentLimb.x2);
  line.setAttribute("y1", currentLimb.y1);
  line.setAttribute("y2", currentLimb.y2);

  line = document.getElementById(map[i][1] + "2");
  line.setAttribute("x1", currentLimb.x2);
  line.setAttribute("x2", currentLimb.x3);
  line.setAttribute("y1", currentLimb.y2);
  line.setAttribute("y2", currentLimb.y3);
  }

}
