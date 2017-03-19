import constants from '../constants/constants'
const { BLOCK_SIZE } = constants

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

export default getUpdatedGrid
