function dispatcher(command, human) {
  if (command == 39){ //right arrow
    var legM = human.leg1.currentMove;
    if (human.direction == -1 &&(legM == walk1R || legM == walk2R || legM == walk1L || legM == walk2L)) return; 
    if (human.direction == -1) reverse(human);
    walk(human);
  }

  if (command == 37){ //left arrow
    var legM = human.leg1.currentMove;
    if (human.direction == 1 &&(legM == walk1R || legM == walk2R || legM == walk1L || legM == walk2L)) return; 
    if (human.direction == 1) reverse(human);
    walk(human);
  }

  if (command == 69) { // E
    human.arm1.defaultNext = punchR;
  }

  if (command == 65) { // A
    human.arm2.defaultNext = punchL1;
  }
  
  if (command == 81) { // Q
    human.arm2.defaultNext = punch2L1;
  }

}
