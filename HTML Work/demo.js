var x = [200, 220, 240]
var y = [200, 220, 240]
var myColor = [[20, 100, 150], [100, 20, 150], [150, 100, 20]];
function setup() {
    createCanvas(400, 400);


}
function draw() {
    background(0, 200, 200);
    
    for (var i = 0; i < x.length; i++) {
        fill(myColor[i][0], myColor[i][1], myColor[i][2])
        circle(x[i],y[i],50);
    }
}