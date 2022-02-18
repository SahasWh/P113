function preload() {

}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""
}

function draw() {

    stroke(235, 64, 52)
    fill(235, 64, 52);
    circle(40, 40, 50);

    stroke(23, 153, 45);
    fill(23, 153, 45);
    circle(460, 40, 50);

    stroke(23, 112, 153);
    fill(23, 112, 153);
    circle(40, 360, 50);

    stroke(23, 153, 125);
    fill(23, 153, 125);
    circle(460, 360, 50);

    stroke(255, 127, 80);
    fill(255, 127, 80);
    rect(64, 50, 375, 300);

    image(video, 100, 80, 300, 250);
}

function snapshot() {
    save('snapshot.png')
}