	
// build a grid of elements 100x100
	for (var x = 100; x<=1000; x+=100) {

    	for (var y = 100; y<=2000; y+=100){
       		var myCircle = new Path.Circle(new Point(x, y), 10);
			myCircle.fillColor = 'yellow';

			var myCircle2 = new Path.Circle(new Point(x+50, y), 3);
			myCircle2.fillColor = 'red';

			var triangle = new Path.RegularPolygon(new Point(x+50, y+50), 3, 30);
			triangle.fillColor = 'green';
			}
		}


//build a circle with a key on it
		function onKeyDown(event) {
			Path.Circle(new Point(400, 400), 100).fillColor = 'yellow';
			var text = new PointText({
			    point: [400, 400],
			    content: event.key,
			    fillColor: 'black',
			    fontSize: 70
			});
		}
		
		function onKeyUp(event) {
			Path.Circle(new Point(400, 400), 110).fillColor = 'black';
		}

       		



// The amount of circles we want to make:
var count = 0;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	fillColor: 'white',
	strokeColor: 'black'
});

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
	
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
		item.position.x += item.bounds.width / 20;

		// If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
}

function onKeyDown(event) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;

		new Path.Circle(point, 50).fillColor = 'blue';

		
	
		}