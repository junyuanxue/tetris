import constants from '../constants/constants'
const { BLOCK_SIZE, INACTIVE_COLOR } = constants

const getUpdatedGrid = (grid, tetromino) => {
  let updatedGrid = grid.map(block => [...block])
  const blockCoordinates = getBlockCoordinates(tetromino)

  blockCoordinates.forEach(coordinates => {
    const { x, y } = coordinates
    updatedGrid[x][y] = tetromino.color
  })

  return updatedGrid
}

function getBlockCoordinates (tetromino) {
  const blockCoordinates = []
  const currentX = tetromino.offsetX / BLOCK_SIZE
  const currentY = tetromino.offsetY / BLOCK_SIZE

  const { shape } = tetromino
  shape.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block) {
        blockCoordinates.push({
          x: x + currentX,
          y: y + currentY
        })
      }
    })
  })

  return blockCoordinates
}



function clearRows (grid, rowsToClear) {
  rowsToClear.forEach(row => {
    grid.forEach(column => {
      column[row] = INACTIVE_COLOR
    })
  })

  for (let row = rowsToClear[0] - 1; row >= 0; row--) {
    const numOfRowsToShiftDown = rowsToClear.length
    grid.forEach(column => {
      column[row + numOfRowsToShiftDown] = column[row]
    })
  }

  return grid
}

export default getUpdatedGrid
