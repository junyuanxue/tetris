import { Map } from 'immutable'

export const TetrominoState = Map({
  offsetX: 0,
  offsetY: 0,
  shape: [],
  name: '',
  color: ''
})

export const TetrominoStackState = Map({ tetrominoStack: [] })
