function preload() {
    img = loadImage("84503915-funny-dog-in-summer-hat-and-sunglasses-holds-apple-and-tropic-cocktail.jpg");
}

function setup() {
    canvas = createCanvas(900, 700)
    canvas.center();
}

function draw() {
    image(img, 0, 0, 900, 700);

    fill("#fc0303");
    text("Sun Hat");
    nofill();
    stroke("#fc0303");
    rect(350,60,500,450);
    strokeWeight(3);
}