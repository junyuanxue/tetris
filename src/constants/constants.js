const initialGrid = []
const BOARD_WIDTH = 300
const BOARD_HEIGHT = 660
const BLOCK_SIZE = 30

for (let i = 0; i < BOARD_WIDTH / BLOCK_SIZE; i++) {
  initialGrid.push(['grey'])
}

for (let i = 0; i < BOARD_WIDTH / BLOCK_SIZE; i++) {
  for (let j = 0; j < BOARD_HEIGHT / BLOCK_SIZE; j++) {
    initialGrid[i].push('grey')
  }
}

const constants = {
  BOARD_WIDTH,

  BOARD_HEIGHT,

  BLOCK_SIZE,

  DROP_SPEED: 500,

  START_X: 4,

  START_Y: -2,

  initialGrid,

  shapesMapping: ['i', 'o', 't', 'j', 'l', 'z', 's'],

  tetrominoes: {
    i: {
      shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'crimson'
    },

    o: {
      shape: [
        [1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'lightblue'
    },

    t: {
      shape: [
        [0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'green'
    },

    j: {
      shape: [
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'orange'
    },

    l: {
      shape: [
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'yellow'
    },

    z: {
      shape: [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'lavender'
    },

    s: {
      shape: [
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'lightcoral'
    }
  }
}

export default constants
