var socket;

function setup()
{
	createCanvas(800,400);
	background(51);
	socket = io.connect('http://192.168.1.142:3030');
	socket.on('mouse', newDrawing);
}

function newDrawing(data)
{
	noStroke();
	fill(255,0,100);
	ellipse(data.x,data.y,36,36)	
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
	fill(255);
	ellipse(mouseX,mouseY,36,36)
}

function draw()
{	

}