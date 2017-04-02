import { Map } from 'immutable'
import constants from './constants'
const { initialGrid } = constants

export const TetrominoState = Map({
  offsetX: 0,
  offsetY: 0,
  shape: [],
  name: '',
  color: ''
})

export const TetrominoStackState = Map({ tetrominoStack: initialGrid })

export const GameState = Map({
  isGameOver: false,
  score: 0
})
