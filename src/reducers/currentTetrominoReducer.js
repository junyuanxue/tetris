import { handleActions } from 'redux-actions'
import { TetrominoState } from '../constants/state'
import Constants from '../constants/constants'
const { initialGrid, tetrominoes } = Constants

const currentTetrominoReducer = handleActions({
  SET_CURRENT_TETROMINO: (state, { payload }) => ({
    offsetX: 0,
    offsetY: 1,
    shape: tetrominoes[payload.randomShape].shape,
    name: payload.randomShape,
    color: tetrominoes[payload.randomShape].color
  })
}, TetrominoState) // currentTetrominoState

export default currentTetrominoReducer
