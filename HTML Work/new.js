var diameter = 50;
var r = 0;
var g = 0;
var b = 100
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(r + 100, g + 100, b + 100);
    textSize(12);
    text("x: " + mouseX + " y: " + mouseY, 10, 20);

    fill(r, g, b);
    square(100, 100, diameter);


    if (keyIsDown(38)) {
        {
            diameter += 2
        }

    }
    if (keyIsDown(40)) {
        {
            diameter -= 2
        }
    }
}
function keyPressed() {
    console.log(key, '', keyCode);
}
function mousePressed() {
    r = floor(random(155))
    g = floor(random(155))
    b = floor(random(155))
}