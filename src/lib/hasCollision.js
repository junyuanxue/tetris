import constants from '../constants/constants'

const { BLOCK_SIZE, BOARD_WIDTH, BOARD_HEIGHT, INACTIVE_COLOR } = constants

const hasCollision = (direction, tetromino, grid) => {
  let isColliding = false

  const numOfBlocksX = BOARD_WIDTH / BLOCK_SIZE
  const numOfBlocksY = BOARD_HEIGHT / BLOCK_SIZE
  const currentX = tetromino.offsetX / BLOCK_SIZE
  const currentY = tetromino.offsetY / BLOCK_SIZE
  let changeX = 0
  let changeY = 0

  if (direction === 'left') changeX = -1
  else if (direction === 'right') changeX = 1
  else if (direction === 'down') changeY = 1

  const { shape } = tetromino
  shape.forEach((row, y) => {
    row.forEach((block, x) => {
      if (block) {
        const finalX = currentX + changeX + x
        const finalY = currentY + changeY + y

        if (finalX < 0 || finalX >= numOfBlocksX ||
            finalY >= numOfBlocksY ||
            isOccupied(grid, finalX, finalY)) {
          isColliding = true
        }
      }
    })
  })

  return isColliding
}

function isOccupied (grid, x, y) {
  return grid[x][y] !== INACTIVE_COLOR
}

export default hasCollision
