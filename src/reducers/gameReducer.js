import { handleActions } from 'redux-actions'
import { GameState } from '../constants/states'

const gameReducer = handleActions({
  END_GAME: (state) => (
    { ...state, isGameOver: true }
  ),
  INCREMENT_SCORE: (state, { payload }) => (
    { ...state, score: payload.score }
  )
}, GameState)

export default gameReducer
