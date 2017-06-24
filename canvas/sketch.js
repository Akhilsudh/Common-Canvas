var socket;

function setup()
{
	createCanvas(800,400);
	background(51);
	socket = io.connect('http://localhost:3030');
	socket.on('mouse', newDrawing);
}

function newDrawing(data)
{
	noStroke();
	//fill(255,0,100);
	fill(255,0,0);
	ellipse(data.x,data.y,26,26)	
}


function mouseDragged()
{
	console.log('Sending : ' + mouseX + ',' + mouseY);

	var socketData =
	{
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse' , socketData);

	noStroke();
	fill(255,255,0);
	ellipse(mouseX,mouseY,26,26)
}

function draw()
{	

}