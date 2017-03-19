import { connect } from 'react-redux'
import TetrominoStack from './TetrominoStack'

const mapStateToProps = state => ({
  grid: state.getIn(['tetrominoStackReducer', 'tetrominoStack'])
})

const TetrominoStackContainer = connect(mapStateToProps)(TetrominoStack)

export default TetrominoStackContainer
