var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var backgroundImage = "parkingLot.jpg";

var whatsCarImage = "maxresdefault.png";
var whatsCarX = 400;
var whatsCarY = 400;
var whatsCarWidth = 100;
var whatsCarHeight = 90;

function add() {
	backgroundImgCanvas = new Image();
	backgroundImgCanvas.onload = uploadBackground;
	backgroundImgCanvas.src = backgroundImage;

	whatsCarImg = new Image();
	whatsCarImg.onload = uploadwhatsCar;
	whatsCarImg.src = whatsCarImage;
}

function uploadBackground() {
	ctx.drawImage(backgroundImgCanvas, 0, 0, canvas.width, canvas.height);
}

function uploadwhatsCar() {
	ctx.drawImage(whatsCarImg, whatsCarX, whatsCarY, whatsCarWidth, whatsCarHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function left() {
    if (whatsCarX >= 0) {
        whatsCarX = whatsCarX - 10;
        uploadBackground();
        uploadwhatsCar();
    }
}

function up() {
    if (whatsCarY >= 0) {
        whatsCarY = whatsCarY - 10;
        uploadBackground();
        uploadwhatsCar();
    }
}

function right() {
    if (whatsCarX <= 700) {
        whatsCarX = whatsCarX + 10;
        uploadBackground();
        uploadwhatsCar();
    }
}

function down() {
    if (whatsCarY <= 510) {
        whatsCarY = whatsCarY + 10;
        uploadBackground();
        uploadwhatsCar();
    }
}
