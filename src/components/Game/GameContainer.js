import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import {
  setCurrentTetromino,
  moveDown,
  moveLeft,
  moveRight
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
      moveTetromino(dispatch)
    }
  }
}

function dropTetromino (dispatch) {
  dispatch(moveDown())

  window.setTimeout(() => {
    window.requestAnimationFrame((dropTetromino.bind(this, dispatch)))
  }, DROP_SPEED)
}

function moveTetromino (dispatch) {
  window.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37:
        e.preventDefault()
        dispatch(moveLeft())
        break
      case 39:
        e.preventDefault()
        dispatch(moveRight())
        break
      default:
        break
    }
  })
}


const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer
