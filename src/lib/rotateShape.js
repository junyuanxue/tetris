const rotateShape = (shape) => {
  const matrix = shape.map(value => [...value])
  const rotatedShape = [[], [], [], []]

  matrix.forEach((row, y) => {
    row.forEach((block, x) => {
      rotatedShape[y][x] = matrix[4 - x - 1][y]
      
    })
  })

  return rotatedShape
}

export default rotateShape
