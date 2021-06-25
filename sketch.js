var btn_red;
var btn_orange;
var btn_yellow;
var btn_green;
var btn_blue;
var btn_purple;

var r = 275;
var g = 275;
var b = 275;

function setup() {
  createCanvas(1440, 790);  
}

function draw() {
  btn_red = createButton("Red");
  btn_red.position(400, 400);
  btn_red.mousePressed(red_bg);
  background(r,g,b);

  btn_orange = createButton("Orange");
  btn_orange.position(500, 400);
  btn_orange.mousePressed(orange_bg);
  background(r,g,b);

  btn_yellow = createButton("Yellow");
  btn_yellow.position(600, 400);
  btn_yellow.mousePressed(yellow_bg);
  background(r,g,b);

  btn_green = createButton("Green");
  btn_green.position(700, 400);
  btn_green.mousePressed(green_bg);
  background(r,g,b);

  btn_blue = createButton("Blue");
  btn_blue.position(800, 400);
  btn_blue.mousePressed(blue_bg);
  background(r,g,b);

  btn_purple = createButton("Purple");
  btn_purple.position(900, 400);
  btn_purple.mousePressed(purple_bg);
  background(r,g,b);
}

function red_bg(){
  r = 225;
  g = 0;
  b = 0;
}

function orange_bg(){
  r = 255;
  g = 165;
  b = 0;
}

function yellow_bg(){
  r = 255;
  g = 255;
  b = 0;
}

function green_bg(){
  r = 34;
  g = 139;
  b = 0;
}

function blue_bg(){
  r = 0;
  g = 0;
  b = 225;
}

function purple_bg(){
  r = 100;
  g = 0;
  b = 150;
}
