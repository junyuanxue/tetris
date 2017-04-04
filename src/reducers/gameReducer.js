import { handleActions } from 'redux-actions'
import { GameState } from '../constants/states'

const gameReducer = handleActions({
  END_GAME: (state) => (
    state.set('isGameOver', true)
  ),
  INCREMENT_SCORE: (state, { payload }) => (
    state.set('score', state.get('score') + payload)
  )
}, GameState)

export default gameReducer
