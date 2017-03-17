import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import {
  setCurrentTetromino,
  moveDown
} from '../../actions/index'

const { DROP_SPEED, shapesMapping } = constants

const mapStateToProps = state => {
  return { isPlaying: true }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      const randomNumber = Math.floor(Math.random() * 7)
      const randomShape = shapesMapping[randomNumber]

      dispatch(setCurrentTetromino({ randomShape }))
      dropTetromino(dispatch)
    }
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

function dropTetromino (dispatch) {
  dispatch(moveDown())

  window.setTimeout(() => {
    window.requestAnimationFrame((dropTetromino.bind(this, dispatch)))
  }, DROP_SPEED)
}



export default GameContainer
