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
      color: '#ff598f'
    },

    o: {
      shape: [
        [1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#FFFF00'
    },

    t: {
      shape: [
        [0, 1, 0, 0],
				[1, 1, 1, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#ffa500'
    },

    j: {
      shape: [
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#01dddd'
    },

    l: {
      shape: [
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#FF0000'
    },

    z: {
      shape: [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#BF5FFF'
    },

    s: {
      shape: [
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: '#00B2EE'
    }
  }
}

export default constants
