const rotateShape = (shape) => {
  const matrix = shape.map(value => [...value])
  const rotatedShape = [[], [], [], []]
  let newStartIndex = 10

  matrix.forEach((row, y) => {
    row.forEach((block, x) => {
      rotatedShape[y][x] = matrix[4 - x - 1][y]
      if (rotatedShape[y][x]) {
        newStartIndex = Math.min(newStartIndex, x)
      }
    })
  })

  const zeros = new Array(newStartIndex).fill(0)

  matrix.forEach((row, y) => {
    rotateShape[y] = rotateShape[y].slice(newStartIndex).concat(zeros)
  })

  return rotatedShape
}

export default rotateShape
