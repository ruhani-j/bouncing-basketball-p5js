// Emoji sketch — basic version 1: face, eyes, and smile

let width = 500;
let height = 500;

// face
let x_circle_1 = width/2;
let y_circle_1 = height/2;
let diameter = 400;

// eyes
let x_eye_1 = 180;
let x_eye_2 = 320;
let y_eye = 200;
let width_eye = 40;
let height_eye = 90;

// smile
let x_smile = width/2;
let y_smile = 340;
let width_smile = 150;
let height_smile = 90;

function setup() {
  createCanvas(width, height);
  background(0);
}

function draw() {

  // face
  stroke('orange');
  fill('yellow');
  circle(x_circle_1 , y_circle_1, diameter);
  
  // eyes
  fill('brown');
  ellipse(x_eye_1, y_eye, width_eye, height_eye);
  ellipse(x_eye_2, y_eye, width_eye, height_eye);
  
  // smile
  noStroke();
  ellipse(x_smile, y_smile, width_smile, height_smile);
  fill('yellow');
  ellipse(x_smile, y_smile-15, width_smile, height_smile);
  
}