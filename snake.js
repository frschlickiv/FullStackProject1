let s;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
}
function draw(){
    background(51);
}

function keyPressed() {
    if (keyCode === UP_ARROW ) {
        s.dir(0, -1)
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1)
    } else if (keyCode === RIGHT_ARROW){
        s.dir (1, 0)
    } else if (keyCode === LEFT_ARROW){
        s.dir (-1, 0);
    }
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.update = function() {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;  
    }

    this.show = function() {
        fill(225)
        rect(this.x, this.y, 10, 10)
    }
}