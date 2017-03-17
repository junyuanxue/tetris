import { BLOCK_SIZE, BOARD_WIDTH, BOARD_HEIGHT } from '../constants/constants'

const hasCollision = (direction, tetromino) => {
  let isColliding = false

  const numOfBlocksX = BOARD_WIDTH / BLOCK_SIZE
  const numOfBlocksY = BOARD_HEIGHT / BLOCK_SIZE
  const currentX = tetromino.offsetX / BLOCK_SIZE
  const currentY = tetromino.offsetY / BLOCK_SIZE
  let changeX = 0
  let changeY = 0

  switch (direction) {
    case 'left':
      changeX = -1
      break

    case 'right':
      changeX = 1
      break

    case 'down':
      changeY = 1
      break

    default:
      break
  }

  const { shape } = tetromino
  shape.forEach((row, i) => {
    row.forEach((block, j) => {
      let finalX = currentX + changeX + j
      let finalY = currentY + changeY + i

      if (finalX < 0 || finalX >= numOfBlocksX || finalY >= numOfBlocksY) {
        isColliding = true
      }
    })
  })

  return isColliding
}

export default hasCollision
