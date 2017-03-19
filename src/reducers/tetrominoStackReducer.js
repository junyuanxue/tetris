import { handleActions } from 'redux-actions'
import { TetrominoStackState } from '../constants/states'

const tetrominoStackReducer = handleActions({
  UPDATE_TETROMINO_STACK: (state, { payload }) => (
    state.set('tetrominoStack', payload)
  )
}, TetrominoStackState)

export default tetrominoStackReducer
