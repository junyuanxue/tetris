import { handleActions } from 'redux-actions'
import { TetrominoStackState } from '../constants/states'
import constants from '../constants/constants'
const { initialGrid } = constants

const tetrominoStackReducer = handleActions({
  START_TETROMINO_STACK: (state) => ({
    grid: initialGrid
  }),

  UPDATE_TETROMINO_STACK: (state, { payload }) => ({
    grid: payload
  })
}, TetrominoStackState)

export default tetrominoStackReducer
