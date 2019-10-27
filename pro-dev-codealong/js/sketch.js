const WORLD_SIZE = 800;
const MAZE_SIZE = 50

let cells = [];
let maze = null;

function setup() {
	createCanvas(WORLD_SIZE, WORLD_SIZE);
	for (let r = 0; r < MAZE_SIZE; r++) {
		row = [];
		for (let c = 0; c < MAZE_SIZE; c++) {
			row.push(new Cell(r, c));
		}
		cells.push(row);
	}
	cells[0][0].build(cells);
}

function draw() {
	if (maze === null) {
		maze = mazeImage(WORLD_SIZE, cells);
	}
	image(maze, 0, 0);
	noLoop();
}

function mazeImage(worldSize, cells) {
	const cellSize = Math.floor(worldSize / cells.length);
	const buffer = createGraphics(worldSize, worldSize);
	buffer.stroke(100);
	for (let row of cells) {
		for (let cell of row) {
			cell.draw(buffer, cellSize);
		}
	}
	return buffer;
}