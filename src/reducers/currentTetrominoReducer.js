import { handleActions } from 'redux-actions'
import { TetrominoState } from '../constants/states'
import constants from '../constants/constants'
const { initialGrid, tetrominoes } = constants

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
