const Direction = {
	NORTH: {
		rowOffset: -1,
		colOffset: 0,
		opposite: () => Direction.SOUTH
	},
	EAST: {
		rowOffset: 0,
		colOffset: 1,
		opposite: () => Direction.WEST
	},
	SOUTH: {
		rowOffset: 1,
		colOffset: 0,
		opposite: () => Direction.NORTH
	},
	WEST: {
		rowOffset: 0,
		colOffset: -1,
		opposite: () => Direction.EAST
	}
};

const ALL_DIRECTIONS = new Set([
	Direction.NORTH,
	Direction.EAST,
	Direction.SOUTH,
	Direction.WEST
]);

