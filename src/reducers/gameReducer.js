import { handleActions } from 'redux-actions'
import { GameState } from '../constants/states'

const gameReducer = handleActions({
  END_GAME: (state) => (
    { ...state, isGameOver: true }
  )
}, GameState)

export default gameReducer
