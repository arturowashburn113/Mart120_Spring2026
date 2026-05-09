var my_x = [120, 120, 120, 120, 120];
var my_y = [50, 70, 90, 110, 130];
var segments = 5;
var toggle = "manuel";

function setup() {
    createCanvas(400, 400);


}

function draw() {
    background(158, 11, 0);
    createSnake(segments);
    manuelSnake();
}

function keyPressed() {
    console.log(key, '', keyCode);
}
function mousePressed() {
    my_x[segments] = my_x[segments - 1] + 20
    my_y[segments] = my_y[segments - 1]
    segments += 1

    console.log(segments)
}
function createSnake(num_segments) {
    fill(84, 176, 56);
    for (i = 0; i < num_segments; i++)
        
        circle(my_x[i], my_y[i], 30);
}
function manuelSnake() {
    if (keyIsDown(68) && my_x[0] < 385 && !keyIsDown(87) && !keyIsDown(83) && !keyIsDown(65)) { //D
        my_x[0] += 2
        for (i = 1; i < segments; i++)
            if (my_x[i-1] - 20 < my_x[i] && my_y[i-1] == my_y[i]) {
                my_x[i] -= 2
            }
            else if (my_y[i-1] < my_y[i]) {
                my_y[i] -= 2
            }
            else if (my_y[i-1] > my_y[i]) {
                my_y[i] += 2
            }
            else
                my_x[i] += 2

    }
    if (keyIsDown(65) && my_x[0] > 15 && !keyIsDown(87) && !keyIsDown(83) && !keyIsDown(68)) { //A
        my_x[0] -= 2
        for (i = 1; i < segments; i++)

            if (my_x[i-1] + 20 > my_x[i] && my_y[i-1] == my_y[i]) {
                my_x[i] += 2
            }
            else if (my_y[i-1] < my_y[i]) {
                my_y[i] -= 2
            }
            else if (my_y[i-1] > my_y[i]) {
                my_y[i] += 2
            }
            else {
                my_x[i] -= 2
            }
    }

    if (keyIsDown(87) && my_y[0] > 15 && !keyIsDown(68) && !keyIsDown(83) && !keyIsDown(65)) { //W
        my_y[0] -= 2
        for (i = 1; i < segments; i++)
            if (my_y[i-1]+20 > my_y[i] && my_x[i-1] == my_x[i]) {
                my_y[i] += 2
            }
            else if (my_x[i-1] < my_x[i])
                my_x[i] -= 2
            else if (my_x[i-1] > my_x[i])
                my_x[i] += 2
            else {
                my_y[i] -= 2
            }
    }
    if (keyIsDown(83) && my_y[0] < 385 && !keyIsDown(68) && !keyIsDown(87) && !keyIsDown(65)) { //S
        my_y[0] += 2
        for (i = 1; i < segments; i++)
            if (my_y[i-1] - 20 < my_y[i] && my_x[i-1] == my_x[i]) {
                my_y[i] -= 2
            }
            else if (my_x[i-1] < my_x[i])
                my_x[i] -= 2
            else if (my_x[i-1] > my_x[i])
                my_x[i] += 2
            else {
                my_y[i] += 2
            }
    }
}
