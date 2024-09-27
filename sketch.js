function setup() {
	createCanvas(windowWidth, windowHeight);
	//frameRate(60);
	background(0);
	rectMode(CENTER);
}

function draw() {
	background(80, random(0, 250), 255, 10);
	strokeWeight(0);

	//cuadrado principal
	fill(100, 255, 0);
	square(mouseX, mouseY, 100, 0, 50, 50, 50)

	fill(225, 0, 50);
	square(mouseX - 10, mouseY -10 , 80, 0, 50, 50, 50)

	//circulo rojo
	fill(255, 0, 0);
	circle(mouseX + 90, mouseY - 45, 50);
	fill(255, 0, 0);
	circle(mouseX + 150, mouseY - 30, 30);
	fill(255, 0, 0);
	circle(mouseX + 200, mouseY - 15, 10);

	//circulo azul
	fill(0, 0, 255);
	circle(mouseX + 90, mouseY + 45, 50);
	fill(0, 0, 255);
	circle(mouseX + 150, mouseY + 30, 30);
	fill(0, 0, 255);
	circle(mouseX + 200, mouseY + 15, 10);

	//circulo amarillo
	fill(255, 255, 0);
	circle(mouseX - 45, mouseY + 90, 50);
	fill(255, 255, 0);
	circle(mouseX - 30, mouseY + 150, 30);
	fill(255, 255, 0);
	circle(mouseX - 15, mouseY + 200, 10);

	//circulo blanco
	fill(255, 255, 255);
	circle(mouseX + 45, mouseY + 90, 50);
	fill(255, 255, 255);
	circle(mouseX + 35, mouseY + 150, 30);
	fill(255, 255, 255);
	circle(mouseX + 15, mouseY + 200, 10);

}
