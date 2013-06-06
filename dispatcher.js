function dispatcher(command, human) {
  if (command == 39){ // right arrow
    if (human.direction == -1 && human.leg1.currentMove.type == "walk") return; 
    if (human.direction == -1) reverse(human);
    walk(human);
  }

  if (command == 37){ // left arrow
    var legM = human.leg1.currentMove;
    if (human.direction == 1 && human.leg1.currentMove.type == "walk") return; 
    if (human.direction == 1) reverse(human);
    walk(human);
  }

  if (command == 69) { // E
    var arm = human.foreArm();
    if (arm.currentMove.type == "walk" ||  arm.currentMove.type == "stand") {
      human.setMove(arm, standRAFight);
      arm.memory = [punchR, 1];
    }
    else human.setMove(arm, punchR);
  }

  if (command == 65) { // A
    human.setMove(human.hindArm(), punchL1);
  }
  
  if (command == 81) { // Q
    human.setMove(human.hindArm(), punch2L1);
  }

  if (command == 67) { // C
  }
  
  if (command == 68) { // D
   // if (human.foreLeg.currentMove == walk2L) return;
    if (human.state == "stand") walk(human);
    human.state = "stand";
    human.hindLeg().defaultNext = kickGroinF1;
  }
  
  if (command == 40) { // down arrow
    if (human.state == "stand") {
      human.groundLeg = human.foreLeg();
      human.setMove(human.foreLeg(), squatF);
      human.setMove(human.hindLeg(), squatH);
      human.setMove(human.body, squatB);
    }
  }
  
  if (command == 87) { // W
    human.setMove(human.body, dodgeB);
  }
}
