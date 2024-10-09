// Project Number 1 - October Midterm
// 1.5.1 Project: Create Your Own Emoji
// I made a normal emoji that slowly becomes creepier

// canvas size
let width = 500;
let height = 500;

// Variables for emoji

// x position for face
let x_circle_1 = width / 2;

// y position for face
let y_circle_1 = height / 2;

// for face
let diameter = 400;

// Eyes
let x_eye_1 = 180;
let x_eye_2 = 320;
let y_eye = 200;
let width_eye = 40;
let height_eye = 90;

// Smile
let x_smile = width / 2;
let y_smile = 340;
let y_smile_2 = y_smile - 13;
let width_smile = 150;
let height_smile = 90;

// Eyebrows
let y_eyebrows = 125;
let y_eyebrows_2 = y_eyebrows + 10;
let width_eyebrows = 55;
let height_eyebrows = 50;

// Blush
let red = 255;
let green = 255;
let blue = 0;
let x_blush_1 = x_eye_1 - 32;
let x_blush_2 = x_eye_2 + 32;
let y_blush = 265;
let width_blush = 80;
let height_blush = 30;

// Make eyes close
let y_eyelid = y_eye + 40;
let height_eyelid = 20;

// Tongue
let x_tongue = x_smile + 50;
let y_tongue = y_smile + 20;
let width_tongue = 30;
let height_tongue = 80;

function setup() {
  createCanvas(width, height);
  background(0);
  frameRate(3);
}

function draw() {
  background(0);

  // Face
  fill(255, 255, 0);
  circle(x_circle_1, y_circle_1, diameter);

  // Eyebrows
  noStroke();
  fill(165, 42, 42);
  ellipse(x_eye_1, y_eyebrows, width_eyebrows, height_eyebrows);
  ellipse(x_eye_2, y_eyebrows, width_eyebrows, height_eyebrows);
  fill(255, 255, 0);
  ellipse(x_eye_2, y_eyebrows_2, width_eyebrows, height_eyebrows);
  ellipse(x_eye_1, y_eyebrows_2, width_eyebrows, height_eyebrows);

  // Eyes
  fill(165, 42, 42);
  ellipse(x_eye_1, y_eye, width_eye, height_eye);
  ellipse(x_eye_2, y_eye, width_eye, height_eye);

  // Closing eyes
  fill(255, 255, 0);
  ellipse(x_eye_1, y_eyelid, width_eye, height_eyelid);
  ellipse(x_eye_2, y_eyelid, width_eye, height_eyelid);

  if (y_eyelid > 210) {
    y_eyelid -= 1;
    height_eyelid += 2;
    width_eye += 1.5;
  }

  // Widen smile
  if (width_smile < 210) {
    width_smile += 1;
  }

  // Draw tongue at the end
  if (width_smile >= 190) {
    fill(255, 0, 0);
    ellipse(x_tongue, y_tongue, width_tongue, height_tongue);
  }

  // Draw the smile
  fill(165, 42, 42);
  noStroke();
  ellipse(x_smile, y_smile, width_smile, height_smile);
  fill(255, 255, 0);
  ellipse(x_smile, y_smile_2, width_smile, height_smile);

  // Blush
  fill(red, green, blue);
  green -= 2; // Adjusted for smoother transition
  blue += 2; // Adjusted for smoother transition
  ellipse(x_blush_1, y_blush, width_blush, height_blush);
  ellipse(x_blush_2, y_blush, width_blush, height_blush);
  
  // Nose
  fill(75,120,130);
  triangle(width/2-15, height/2-15, width/2, height/2+15, width/2+15, height/2-15);
  
}
