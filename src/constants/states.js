import Immutable from 'immutable'

export const TetrominoState = Immutable.map({
  offsetX: 0,
  offsetY: 0,
  shape: [],
  name: '',
  color: ''
})
