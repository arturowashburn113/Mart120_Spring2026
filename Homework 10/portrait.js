
function setup() {
    createCanvas(800, 600);


leftPupilx = 353
rightPupilx = 443
lPupilmove = floor(random() * 2) + 1
rPupilMove = floor(random() * 2) + 1
headY = floor(random() * 2) + 1
headMovey = floor(random() * 2) + 1
tSize = 40
textGrow = 10
count = 0
}
function draw() {
    background(205, 67, 247);
    strokeWeight(0);
    fill(0);
    textSize(12);
    text("x: " + mouseX + " y: " + mouseY, 10, 20);
    
    //hair1
    strokeWeight(1);
    stroke(115, 102, 62);
    fill(163, 135, 52);
    ellipse(360, 230 + headY, 175, 240);
    ellipse(440, 230 + headY, 175, 240);
    rect(310, 250 + headY, 180, 180);
    
   

    //neck
    strokeWeight(1);
    stroke(133, 88, 58);    
    fill(252, 200, 184);
    rect(350,330, 100, 150);

    //head
    ellipse(400, 250 + headY, 200, 220);
    
    //eyes
    fill(250);
    ellipse(360,220 + headY,30,25);
    ellipse(440,220 + headY,30,25);
    fill(61, 83, 97);
    strokeWeight(0);
    circle(leftPupilx,221 + headY,14);
    circle(rightPupilx,221 + headY,14);
    fill(0);
    strokeWeight(1.5);
    stroke(47, 60, 69);
    circle(leftPupilx,221 + headY,8);
    circle(rightPupilx,221 + headY,8);

    //eyebrows
    fill(163, 135, 52);
    stroke(163, 135, 52);
    triangle(370, 195 + headY, 370, 200 + headY, 340, 200 + headY);
    triangle(430, 195 + headY, 430, 200 + headY, 460, 200 + headY);

    //hair2
    strokeWeight(35);
    line(400,140 + headY,300, 210 + headY);
    line(350,140 + headY,450,140 + headY);
    line(400,140 + headY,500, 180 + headY);


    //nose
    strokeWeight(1);
    stroke(212, 168, 155);    
    fill(235, 137, 108);
    triangle(405, 225 + headY, 410, 265 + headY, 385, 265 + headY);

    //mouth
    stroke(199, 97, 82);
    strokeWeight(6);
    fill(0);
    ellipse(400, 300 + headY, 50, 20);

    //body
    strokeWeight(0);
    fill(0);
    rect(280, 415, 240, 500);

    strokeWeight(2);
    fill(50, 62, 117);
    stroke(30, 40, 84);
    rect(260, 410, 80, 500);
    rect(460, 410, 80, 500);

    // Text
    textSize(tSize);
    text("Arturo Washburn", 250, 50 );

    
    //necklace
    stroke(0);
    strokeWeight(12);
    line(345, 400, 455, 400);
    stroke(200);
    strokeWeight(14);
    line(390, 400, 410, 400);
    //eyes movement
    rightPupilx += rPupilMove;
    leftPupilx += lPupilmove;
    if (rightPupilx <= 432)
        rPupilMove *= -1;
    if (leftPupilx <= 352)
        lPupilmove *= -1;
    if (leftPupilx >= 368)
        lPupilmove *= -1;
    if (rightPupilx >= 448)
        rPupilMove *= -1;

    //Head movement
    headY += headMovey;
    if (headY >= 10)
        headMovey *= -1;
    if (headY <= -10)
        headMovey *= -1;
    //text size change
    tSize += textGrow;
    count +=1;
    if (count >= 5);
        textGrow *= -1
        count = 0
    
    
        




}