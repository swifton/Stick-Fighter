Stick Fighter
=============

## About
Stick Fighter is intended to be an HTML5 fighting game with SVG graphics. The main design idea is to use only straight lines and circles to produce minimalistic graphics. Most games of this genre have also overly simplistic game mechanics (the strikes are processed by calculating the distance between bodies instead of collision detection) and a small number of predefined movement animations. The result of this approach is that the best strategy of playing such game is to strike buttons randomly as fast as you can. Stick Fighter is an attempt to fix it by making movements more complex, analysing strikes by collision detection, and rendering based on limb coordinates.

## Controls
Use arrows to go left or right. E, A and Q are diferent punches. D is a kick, W is a dodge, down arrow is used to sit down.

## Structure
* fighter.js is the main file.
* human.js is a class that describes the fighter, its coordinates and movements.
* limb.js is a class that describes human legs, arms and body.
* move.js contains the information about basic movements of a body: kick, punch, walk, etc.
* dispatcher.js converts keyboard input into movements.
* drawing.js controls SVG drawing.
* keyboard.js controls keyboard input.

