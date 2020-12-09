let mic;
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create an Audio input
    mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();

}

function draw() {
    background(24, 236, 226);
    let volume = mic.getLevel();
    let threshold = 0.2;
    let opacity = map(volume, 0, 0.2, 0, 1);
    let posX = map(volume, 0, 0.5, 0, windowWidth);
    let posY = map(volume, 0, 0.5, 0, windowHeight);
    let tx = random(-windowWidth / 4, windowWidth / 4);
    let ty = random(-windowHeight / 2, windowHeight / 2);
    let colorR = map(volume, 0, 0.5, 0, 55);
    console.log(volume);

    background(24 + colorR, 236 - colorR, 226 - colorR, opacity);

    fill(255, opacity + 50);
    stroke(20, 200, 200, opacity);
    ellipse(windowWidth / 2, windowHeight / 2, 10 + volume * 220, 10 + volume * 220);

    let c = color(8, 97, 104, opacity);
    let fillColor = alpha(c);// make fillColor transparent

    if (volume > threshold) {
        fill(fillColor);
        stroke(8, 97, 104);
        let w = random(100, 200);
        ellipse(posX + tx, posY + ty, 5 + volume * w, 5 + volume * w);
        noFill();
        for (i = 0; i < 200; i += 40) {
            bezier(posX - (i / 2.0), posY + i, posX + tx, posY + ty, posX + tx + 300, posY + ty + 400, posX - (i / 16.0), posY + (i / 8.0));
        }
    }
}