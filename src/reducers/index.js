import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import currentTetrominoReducer from './currentTetrominoReducer'
import tetrominoStackReducer from './tetrominoStackReducer'

const rootReducer = combineReducers({
  currentTetrominoReducer,
  tetrominoStackReducer,
  routing: routerReducer
})

export default rootReducer
