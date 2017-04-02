import constants from '../constants/constants'
const { INACTIVE_COLOR } = constants

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

export default clearRows
