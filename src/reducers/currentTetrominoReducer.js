import { handleActions } from 'redux-actions'

const currentTetrominoReducer = handleActions({
  SET_CURRENT_TETROMINO: (state, { payload }) => {
    console.log(payload)
  }
}, {}) // currentTetrominoState

export default currentTetrominoReducer
