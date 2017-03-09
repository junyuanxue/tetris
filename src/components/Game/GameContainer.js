import { connect } from 'react-redux'
import { setCurrentTetromino } from '../../actions/index'

const mapStateToProps = state => {
  return { isPlaying: true }
}

const mapDispatchToProps = dispatch => {
  dispatch(setCurrentTetromino())
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)()
