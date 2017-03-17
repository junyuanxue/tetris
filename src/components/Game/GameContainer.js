import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import { hasCollision } from '../../lib/index'
import {
  setCurrentTetromino,
  moveDown,
  moveLeft,
  moveRight
} from '../../actions/index'

const { DROP_SPEED, shapesMapping } = constants

const controlTetromino = () => (
  (dispatch, getState) => {
    const state = getState()
    const tetromino = state.get('currentTetrominoReducer')

    window.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37:
          if (hasCollision('left', tetromino)) {
            e.preventDefault()
            dispatch(moveLeft())
          }
          break

        case 39:
          e.preventDefault()
          dispatch(moveRight())
          break

        case 40:
          e.preventDefault()
          dispatch(moveDown())
          break

        case 38:
          e.preventDefault()
          // handleRotation
          break

        default:
          break
      }
    }
  }
)

const mapStateToProps = state => {
  return { isPlaying: true }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    startGame: () => {
      const randomNumber = Math.floor(Math.random() * 7)
      const randomShape = shapesMapping[randomNumber]

      dispatch(setCurrentTetromino({ randomShape }))
      dropTetromino(dispatch)
      dispatch(controlTetromino())
    }
  }
}

function dropTetromino (dispatch) {
  dispatch(moveDown())

  window.setTimeout(() => {
    window.requestAnimationFrame((dropTetromino.bind(this, dispatch)))
  }, DROP_SPEED)
}


const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer
