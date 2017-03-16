import { handleActions } from 'redux-actions'
import { TetrominoState } from '../constants/states'
import constants from '../constants/constants'
const { initialGrid, tetrominoes, BLOCK_SIZE } = constants

const currentTetrominoReducer = handleActions({
  SET_CURRENT_TETROMINO: (state, { payload }) => ({
    offsetX: BLOCK_SIZE * 4,
    offsetY: 0,
    shape: tetrominoes[payload.randomShape].shape,
    name: payload.randomShape,
    color: tetrominoes[payload.randomShape].color
  }),
  MOVE_DOWN: (state) => (
    Object.assign({}, state, { offsetY: state.offsetY + BLOCK_SIZE })
  )
}, TetrominoState) // currentTetrominoState

export default currentTetrominoReducer
