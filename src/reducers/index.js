import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import currentTetrominoReducer from './currentTetrominoReducer'
import tetrominoStackReducer from './tetrominoStackReducer'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
  currentTetrominoReducer,
  tetrominoStackReducer,
  gameReducer,
  routing: routerReducer
})

export default rootReducer
