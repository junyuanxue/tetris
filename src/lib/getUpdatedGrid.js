import constants from '../constants/constants'
const { BLOCK_SIZE } = constants

const getUpdatedGrid = (grid, tetromino) => {
  const { color } = tetromino
  const blockCoordinates = getBlockCoordinates(tetromino)
  return ['1']
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
