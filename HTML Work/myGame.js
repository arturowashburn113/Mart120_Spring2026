var player_x = 300;
var player_y = 100;
var mousex = -100
var mousey = -100
var obstacle_x1 = 10
var obstacle_y1 = 250
var obstacle_x2 = 150
var obstacle_y2 = 150


function setup() {

    createCanvas(400, 400);
}

function draw() {
    background(150, 100, 200);

    fill(150, 10, 60)

    createPlayer(player_x, player_y, 20)

    movePlayer()

    createExit()

    createObstacles(obstacle_x1, obstacle_y1, obstacle_x2, obstacle_y2);

    createBorders()

    textWin()

    createObject()

    moveObstacles()

}

function keyPressed() {
    console.log(key, '', keyCode);
}
function createPlayer(pX, pY, diameter) {
    circle(pX, pY, diameter)
}
function movePlayer() {
    if (keyIsDown(68) && player_x < 380) {
        player_x += 2
    }
    if (keyIsDown(65) && player_x > 20) {
        player_x -= 2
    }

    if (keyIsDown(87) && player_y > 20) {
        player_y -= 2
    }
    if (keyIsDown(83) && player_y < 380) {
        player_y += 2
    }
}
function createObject() {
    fill(0)
    circle(mousex, mousey, 30)
}
function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
}


function createObstacles(ob_x1, ob_y1, ob_x2, ob_y2) {
    fill(90, 0, 90)
    rect(ob_x1, ob_y1, 250, 40)


    fill(100, 0, 100)
    rect(ob_x2, ob_y2, 250, 40)
}
function moveObstacles() {
    if (obstacle_x1 < 140)
        obstacle_x1 += 1
    if (obstacle_x1 >= 140)
        obstacle_x1 = 10
    if (obstacle_x2 > 10)
        obstacle_x2 -= 1
    if (obstacle_x2 <= 10)
        obstacle_x2 = 150
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
    rect(0, 290, 40, 70)
    if (keyIsDown(65) && player_y > 300 && player_y < 350 && player_x <= 20) {
        player_x -= 2
    }
}

function textWin() {
    if (player_x < 0) {
        fill(0, 100, 200)
        textSize(20)
        text("You Win!", 155, 100)
    }
}