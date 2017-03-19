import { connect } from 'react-redux'
import TetrominoStack from './TetrominoStack'

const mapStateToProps = state => ({
  grid: state.get('tetrominoStackReducer').grid
})

const TetrominoStackContainer = connect(mapStateToProps)(TetrominoStack)

export default TetrominoStackContainer
