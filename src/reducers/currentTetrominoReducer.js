import { handleActions } from 'redux-actions'
import { TetrominoState } from '../constants/state'

const currentTetrominoReducer = handleActions({
  SET_CURRENT_TETROMINO: (state, { payload }) => {
    console.log(payload)
  }
}, TetrominoState) // currentTetrominoState

export default currentTetrominoReducer
