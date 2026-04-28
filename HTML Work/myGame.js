var my_x = [300, -100, 10, 150]
var my_y = [100, -100, 250, 150]
var myObjectsX = [[40, 20, 60], [140, 120, 160], [240, 220, 260]]
var myObjectsY = [20, 70]
var myColors = [[199, 40, 111], [168, 12, 56], [232, 5, 115]]

function setup() {

    createCanvas(400, 400);
}

function draw() {
    background(150, 100, 200);

    fill(150, 10, 60)

    createPlayer(my_x[0], my_y[0], 20)

    movePlayer()

    createExit()

    createObstacles(my_x[2], my_y[2], my_x[3], my_y[3]);

    createObjects()

    createBorders()

    textWin()

    createObject()

    moveObstacles()

    Count()
}
function createObjects() {
    for(i = 0; i < 3; i += 1) {
        fill(myColors[i][0], myColors[i][1], myColors[i][2]);
        triangle(myObjectsX[i][0], myObjectsY[0], myObjectsX[i][1], myObjectsY[1], myObjectsX[i][2], myObjectsY[1]);
    }
}

function Count() {
    for(i = 1; i <= 10; i++) {
        console.log(i)
    }
}

function keyPressed() {
    console.log(key, '', keyCode);
}
function createPlayer(pX, pY, diameter) {
    circle(pX, pY, diameter)
}
function movePlayer() {
    if (keyIsDown(68) && my_x[0] < 380) {
        my_x[0] += 2
    }
    if (keyIsDown(65) && my_x[0] > 20) {
        my_x[0] -= 2
    }

    if (keyIsDown(87) && my_y[0] > 20) {
        my_y[0] -= 2
    }
    if (keyIsDown(83) && my_y[0] < 380) {
        my_y[0] += 2
    }
}
function createObject() {
    fill(0)
    circle(my_x[1], my_y[1], 30)
}
function mousePressed() {
    my_x[1] = mouseX;
    my_y[1] = mouseY;
}


function createObstacles(ob_x1, ob_y1, ob_x2, ob_y2) {
    fill(90, 0, 90)
    rect(ob_x1, ob_y1, 250, 40)


    fill(100, 0, 100)
    rect(ob_x2, ob_y2, 250, 40)
}
function moveObstacles() {
    if (my_x[2] < 140)
        my_x[2] += 1
    if (my_x[2] >= 140)
        my_x[2] = 10
    if (my_x[3] > 10)
        my_x[3] -= 1
    if (my_x[3] <= 10)
        my_x[3] = 150
}
function createBorders() {
    fill(120, 0, 120)
    strokeWeight(0)
    rect(0, 0, 400, 10)
    rect(390, 0, 10, 400)
    rect(0, 390, 400, 10)
    rect(0, 0, 10, 290)
    rect(0, 360, 10, 50)
}
function createExit() {
    fill(10, 200, 100)
    rect(0, 290, 10, 70)
    if (keyIsDown(65) && my_y[0] > 300 && my_y[0] < 350 && my_x[0] <= 20) {
        my_x[0] -= 2
    }
}

function textWin() {
    if (my_x[0] < 0) {
        fill(0, 100, 200)
        textSize(20)
        text("You Win!", 155, 100)
    }
}