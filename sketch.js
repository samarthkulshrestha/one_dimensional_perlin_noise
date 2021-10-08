let inc = 0.01;
let start = 0;
let speed = 0.04;

function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    createCanvas(w, h);
    angleMode(DEGREES);
}

function draw() {
    background(51);

    stroke(255);
    strokeWeight(2);
    noFill();
    beginShape();

    let xoff = start;
    for (let x = 0; x < width; x++) {
        let y = noise(xoff) * height;
        vertex(x, y);

        xoff += inc;
    }

    endShape();

    start += speed;
}
