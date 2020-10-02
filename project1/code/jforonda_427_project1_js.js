/*

IMAGE LINKS

 //cursor
    hand.resize(20, 29.40874035989717);
    
    fill(hand);
    circle(mouseX, mouseY,32);
    
    
    else if((mouseX > 760 && mouseX < 790) && (mouseY > 590 && mouseY < 610 )) {
        image(mad, mouseX-80, mouseY-80);
    } else if((mouseX > 820 && mouseX < 855) && (mouseY > 615 && mouseY < 630 )) {
        image(mad, mouseX-80, mouseY-80);
    } else if((mouseX > 970 && mouseX < 1000) && (mouseY > 670 && mouseY < 680 )) {
        image(mad, mouseX-80, mouseY-80);
    }


*/


// IMAGE VARIABLES
let bored;
let happy;
let mad;
let sad;
let sleep;

let hand;
let bg;

function preload() {

    bored = loadImage('https://jadeforonda.github.io/images/emotions_bored.png');
    happy = loadImage('https://jadeforonda.github.io/images/emotions_happy.png');
    mad = loadImage('https://jadeforonda.github.io/images/emotions_mad.png');
    sad = loadImage('https://jadeforonda.github.io/images/emotions_sad.png');
    sleep = loadImage('https://jadeforonda.github.io/images/emotions_sleep.png');

    hand = loadImage('https://jadeforonda.github.io/images/lefthand.png');
    bg = loadImage('https://jadeforonda.github.io/images/bg.png');
    
}



function setup() {
    createCanvas(1600, 900);
    background('#caccc2');
    
    bored.resize(150,150);
    happy.resize(150,150);
    mad.resize(150,150);
    sad.resize(150,150);
    sleep.resize(150,150);
    hand.resize(20, 29.40874035989717);
    
    textFont('Avenir', 32);
    textStyle(BOLD);
    text('CLICK HERE TO ENTER A NEW WORLD', 530, 120);
}

function draw() {
}

function mousePressed() {
    background(bg);
    
    
    //sleep
    if ((mouseX > 950 && mouseX < 1070) && (mouseY > 240 && mouseY < 420)) {
        image(sleep, mouseX-80, mouseY-80);
        textFont('Avenir', 18);
        textStyle(NORMAL);
        text('Shhh, I\'m sleeping!', 1156, 150);
    //bored    
    } else if((mouseX > 450 && mouseX < 820) && (mouseY > 180 && mouseY < 400)) {
        image(bored, mouseX-80, mouseY-80);
        textFont('Avenir', 18);
        textStyle(ITALIC);
        text('Yaaaaawn', 300, 200);
    //happy coffee
    } else if((mouseX > 310 && mouseX < 441) && (mouseY > 360 && mouseY < 550)) {
        image(happy, mouseX-50, mouseY-50);
        textFont('Avenir', 40);
        textStyle(NORMAL);
        text('Yum!', 200, 285);
    //sad
    } else if((mouseX > 980 && mouseX < 1290) && (mouseY > 230 && mouseY < 585)) {
        image(sad, mouseX-80, mouseY-80);
        textFont('Avenir', 18);
        textStyle(NORMAL);
        text('Don\'t do homework :(', mouseX-90, mouseY+100);
        
        textFont('Avenir', 32);
        textStyle(NORMAL);
        text('Pet me!', 1342, 250);
    //mad tail
    } else if((mouseX > 740 && mouseX < 1010) && (mouseY > 570 && mouseY < 780 )) {
        image(mad, mouseX-80, mouseY-80);
        textFont('Avenir', 100);
        textStyle(NORMAL);
        text('NO DON\'T TOUCH',350, 756);
    //happy pets
    } else if ((mouseX > 727 && mouseX < 920) && (mouseY > 280 && mouseY < 570)) {
        image(happy, mouseX-80, mouseY-80);
        textFont('Avenir', 20);
        textStyle(NORMAL);
        text('I love you <3', 625, 620);
    //if you don't click what you're supposed to
    } else {
        textFont('Avenir', 12);
        textStyle(ITALIC);
        text('Pst try clicking the cup, cat, or papers', mouseX, mouseY);
    }
    
    //to reset game
    textFont('Avenir', 24);
    textStyle(ITALIC);
    text('Press \'return\' to start over',675, 875);
    
    // my name
    textFont('Avenir', 12);
    text('Jade Foronda', 25, 25);
}
    
//reset game
function keyPressed() {
    image(bg, 0, 100);
    textFont('Avenir', 32);
    textStyle(BOLD);
    text('CLICK HERE TO ENTER A NEW WORLD', 530, 120);
}
    
    