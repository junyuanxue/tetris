import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import currentTetrominoReducer from './currentTetrominoReducer'

const rootReducer = combineReducers({
  currentTetrominoReducer,
  routing: routerReducer
})

export default rootReducer
