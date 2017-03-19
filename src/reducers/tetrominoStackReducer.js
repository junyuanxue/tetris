import { handleActions } from 'redux-actions'
import { TetrominoStackState } from '../constants/states'
import constants from '../constants/constants'
const { initialGrid } = constants

const tetrominoStackReducer = handleActions({
  START_TETROMINO_STACK: (state) => (
    // state.set('tetrominoStack', initialGrid)
    { grid: initialGrid }
  ),
  UPDATE_TETROMINO_STACK: (state, { payload }) => (
    // state.set('tetrominoStack', payload)
    { grid: payload }
  )
}, TetrominoStackState)

export default tetrominoStackReducer
