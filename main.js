img = ""

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function draw()
{
    image(img, 0, 0, 640, 420)
    fill("#FFAD00")
    text("Dog", 89, 70)
    noFill()
    stroke("#FFAD00")
    rect(30, 60, 450, 350)
}

function setup()
{
    canvas = createCanvas(640, 420)
    canvas.center()
}