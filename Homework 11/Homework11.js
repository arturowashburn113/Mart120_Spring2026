var player_x = 300;
var player_y = 100;


function setup() {

    createCanvas(400, 400);
}

function draw() {
    background(150, 100, 200);


    fill(150, 10, 60)
    circle(player_x, player_y, 20);
    // circle movement
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

    //escape
    if(keyIsDown(65) && player_y > 300 && player_y < 350 && player_x <= 20) {
        player_x -= 2
    }
    // Obstacle 1
    fill(90, 0, 90)
    rect(10, 250, 250, 40)
    // Obstacle 2
    fill(100, 0, 100)
    rect(150, 150, 250, 40)

    // border
    fill(120, 0, 120)
    strokeWeight(0)
    rect(0, 0, 400, 10)
    rect(390, 0, 10, 400)
    rect(0, 390, 400, 10)
    rect(0, 0, 10, 290)
    rect(0, 360, 10, 50)

    // Victory
    if (player_x < 0) {
        fill(0, 100, 200)
        textSize(20)
        text("You Win!", 155, 100)
    }
    if (mouseIsPressed) {
        fill(0)
        circle(mouseX, mouseY, 30)
    }
    
}
function keyPressed() {
    console.log(key, '', keyCode);
}
