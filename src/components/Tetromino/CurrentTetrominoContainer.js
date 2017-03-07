import { connect } from 'react-redux'
import Tetromino from './Tetromino'
import { TetrominoState as initialState } from '../../constants/states'

const mapStateToProps = state => {
  const currentState = state.get('currentTetrominoReducer')
  if (currentState.shape) {
    return {
      offsetX: currentState.offsetX,
      offsetY: currentState.offsetY,
      shape: currentState.shape,
      name: currentState.name,
      color: currentState.color
    }
  }
  return initialState
}

const CurrentTetrominoContainer = connect(mapStateToProps)(Tetromino)

export default CurrentTetrominoContainer
