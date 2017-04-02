import constants from '../constants/constants'
const { INACTIVE_COLOR } = constants

function getCompletedRows (grid) {
  const rowsToClear = []

  for (let row = 0; row < grid[0].length; row++) {
    let isCompleteRow = true

    grid.forEach(column => {
      if (column[row] === INACTIVE_COLOR) {
        isCompleteRow = false
      }
    })

    if (isCompleteRow) rowsToClear.push(row)
  }

  return rowsToClear
}

export default getCompletedRows
