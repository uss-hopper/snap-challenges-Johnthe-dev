class Cell {

	constructor(row, column) {
		this.row = row;
		this.column = column;
		this.visited = false;
		this.walls = new Set(ALL_DIRECTIONS.values());
	}

	isVisited() {
		return this.visited;
	}

	setVisited(visited) {
		this.visited = visited;
	}

	removeWall(direction) {
		this.walls.delete(direction);
	}

	build(cells) {
		// TODO Implement the algorithm:
		//
		// 1. Mark this Cell instance as visited.
		//
		this.visited = true;
		// 2. While there are any unvisited neighbors of this
		// instance, repeat the following:
		//
		for (let reachable = this.neighbors(cells, true);
			  reachable.length>0;
			  reachable = this.neighbors(cells,true)) {
			const selection = Math.floor(Math.random()* reachable.length);
			const {direction, destination}=reachable[selection];
			this.removeWall(direction);
			destination.removeWall(direction.opposite());
			destination.build(cells);
		}
		//   a. Select one unvisited neighbor at random.
		//   b. Remove the wall between this cell and the
		//      selected neighbor. (Note that this requires
		//      removal of 2 walls in total - why?)
		//   c. Recursively invoke build(cells) on the selected
		//      neighbor.
	}

	neighbor(cells, direction, unvisitedOnly) {
		// TODO How can we change this to support a toroidal
		// topology? What about an actual adjacency matrix or
		// graph structure?
		let adjacent;
		const r = this.row + direction.rowOffset;
		const c = this.column + direction.colOffset;
		if (r >= 0 && r < cells.length &&
			c >= 0 && c < cells[r].length) {
			adjacent = cells[r][c];
			if (unvisitedOnly && adjacent.visited) {
				adjacent = null;
			}
		} else {
			adjacent = null;
		}
		return adjacent;
	}

	neighbors(cells, unvisitedOnly) {
		return Array.from(this.walls.values())
			.map((w) => new Route(w, this.neighbor(cells, w, true)))
			.filter((n) => n.destination !== null);
	}

	draw(buffer, cellSize) {
		for (let d of this.walls) {
			const startCol = this.column +
				Math.trunc((d.colOffset + 1) / 2) -
				Math.trunc((d.rowOffset - 1) / 2);
			const endCol = startCol + d.rowOffset;
			const startRow = this.row +
				Math.trunc((d.rowOffset + 1) / 2) -
				Math.trunc((d.colOffset - 1) / 2);
			const endRow = startRow + d.colOffset;
			buffer.line(cellSize * startCol, cellSize * startRow,
				cellSize * endCol, cellSize * endRow);
		}
	}

}
