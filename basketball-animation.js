// Bouncing basketball animation — p5.js physics simulation
// Demonstrates gravity, velocity, friction, and collision detection

// canvas size
let width = 500;
let height = 500;

let sun_diameter = 100;
let sun_growth = 1; // Growth rate for the sun
let sun_x = width - 70; // Initial x position of the sun
let sun_y = 70; // Initial y position of the sun
let sun_direction = 1; // Direction for moving the sun

// sun colour vars
let sun_red = 255;
let sun_green = 255;
let sun_blue = 255; // starts white, blue channel decreases each frame to shift warmer

// basketball variables
let diameter = 50;

// initial position
let ball_x = 375;
let ball_y = 10;

// gravity and movement stuff
let gravity = 0.3; // gravity's pulling down
let velocity_x = 2; // horizontal speed
let velocity_y = 3; // how fast it's falling
let friction = 0.8; // friction on bounce

function setup() {
  createCanvas(width, height);
  frameRate(30); 
} // end setup

function draw() {
  // draw the court 
  background(0, 255, 255); // sky color

  // sun
  fill(sun_red, sun_green, sun_blue);
  sun_blue--;
  sun_diameter += sun_growth; // Increase the diameter

  // Reverse the growth direction if the sun gets too large or too small
  if (sun_diameter > 120 || sun_diameter < 80) {
    sun_growth *= -1;
  }

  // Move the sun slightly
  sun_x += sun_direction;
  if (sun_x > width - 40 || sun_x < width - 100) {
    sun_direction *= -1; // Reverse direction when hitting bounds
  }

  stroke(255, 165, 0);
  circle(sun_x, sun_y, sun_diameter); // Draw the sun

  // ground
  noStroke();
  fill(128, 128, 128);
  rect(0, height - 30, width, height); // floor

  // hoop
  noStroke();
  rect(420, 190, 15, 430); // pole for hoop
  
  fill(255, 255, 255);
  rect(370, 170, 115, 90); // backboard
  
  stroke(255, 165, 0);
  ellipse(425, 225, 70, 30); // the hoop

  // basketball
  fill(255, 165, 0);
  circle(ball_x, ball_y, diameter);

  // update ball position
  ball_x += velocity_x; // move it horizontally
  ball_y += velocity_y; // move it vertically

  // apply gravity
  velocity_y += gravity; // gravity added to velocity

  // check for collision with the ground
  if (ball_y + diameter / 2 >= height - 30) {
    // hit the ground
    ball_y = height - 30 - diameter / 2; 
    velocity_y *= -friction; // bounce back, but lose some energy
  }

  // bounce off the sides
  if (ball_x + diameter / 2 >= width || ball_x - diameter / 2 <= 0) {
    // hit the sides
    velocity_x *= -friction; // reverse horizontal velocity
  }
  
  // make ball stop bouncing at some point
  if (Math.abs(velocity_y) < 2 && ball_y >= height - 55) {
    velocity_y = 0; // stop the bounce
    ball_y = height - 30 - diameter / 2; // make it stay on the ground
  }
  
} // end draw
