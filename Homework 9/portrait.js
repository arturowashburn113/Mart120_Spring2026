
function setup() {
    createCanvas(800, 600);

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
    ellipse(360, 230, 175, 240);
    ellipse(440, 230, 175, 240);
    rect(310, 250, 180, 180);
    
   

    //neck
    strokeWeight(1);
    stroke(133, 88, 58);    
    fill(252, 200, 184);
    rect(350,330, 100, 150);

    //head
    ellipse(400, 250, 200, 220);
    
    //eyes
    fill(250);
    ellipse(360,220,30,25);
    ellipse(440,220,30,25);
    fill(61, 83, 97);
    strokeWeight(0);
    circle(357,221,14);
    circle(443,221,14);
    fill(0);
    strokeWeight(1.5);
    stroke(47, 60, 69);
    circle(357,221,8);
    circle(443,221,8);

    //eyebrows
    fill(163, 135, 52);
    stroke(163, 135, 52);
    triangle(370, 195, 370, 200, 340, 200);
    triangle(430, 195, 430, 200, 460, 200);

    //hair2
    strokeWeight(35);
    line(400,140,300, 210);
    line(350,140,450,140);
    line(400,140,500, 180);


    //nose
    strokeWeight(1);
    stroke(212, 168, 155);    
    fill(235, 137, 108);
    triangle(405, 225, 410, 265, 385, 265);

    //mouth
    stroke(199, 97, 82);
    strokeWeight(6);
    fill(0);
    ellipse(400, 300, 50, 20);

    //body
    strokeWeight(0);
    fill(0);
    rect(280, 415, 240, 500);

    strokeWeight(2)
    fill(50, 62, 117)
    stroke(30, 40, 84)
    rect(260, 410, 80, 500)
    rect(460, 410, 80, 500)
    textSize(40)
     text("Arturo Washburn", 250, 50)
    
    //necklace
    stroke(0)
    strokeWeight(12)
    line(345, 400, 455, 400)
    stroke(200)
    strokeWeight(14)
    line(390, 400, 410, 400)
  
   

}