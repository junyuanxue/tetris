const initialGrid = []
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20

for (let i = 0; i < BOARD_WIDTH; i++) {
  initialGrid.push(['grey'])
}

for (let i = 0; i < BOARD_WIDTH; i++) {
  for (let j = 0; j < BOARD_HEIGHT; j++) {
    initialGrid[i].push('grey')
  }
}

export default {
  initialGrid,

  shapesMapping: [
    'i', 'o', 't', 'j', 'l', 'z', 's'
  ],

  tetrominoes: {
    i: {
      shape: [
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'red'
    },

    o: {
      shape: [
        [1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'blue'
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
      color: 'purple'
    },

    s: {
      shape: [
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      color: 'brown'
    }
  }
}
