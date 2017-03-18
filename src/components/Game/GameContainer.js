import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import helpers from '../../lib/index'
import {
  setCurrentTetromino,
  moveDown,
  moveLeft,
  moveRight
} from '../../actions/index'

const { DROP_SPEED, shapesMapping } = constants
const { hasCollision } = helpers

const mapStateToProps = state => {
  return { isPlaying: true }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      setAndDropNewTetromino(dispatch)
      dispatch(controlTetromino())
    }
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

function setAndDropNewTetromino (dispatch) {
  const randomNumber = Math.floor(Math.random() * 7)
  const randomShape = shapesMapping[randomNumber]

  dispatch(setCurrentTetromino({ randomShape }))
  dispatch(dropTetromino())
}

function dropTetromino () {
  return (dispatch, getState) => {
    const tetromino = getState().get('currentTetrominoReducer')

    if (!hasCollision('down', tetromino)) {
      dispatch(moveDown())

      window.setTimeout(() => {
        window.requestAnimationFrame(() => dispatch(dropTetromino()))
      }, DROP_SPEED)
    } else {
                        //
                        // TODO:
                        // freeze current tetromino and add to group
                        //
                        //
      setAndDropNewTetromino(dispatch)
    }
  }
}

function controlTetromino () {
  return (dispatch, getState) => {
    window.addEventListener('keydown', e => {
      const { keyCode } = e
      const tetromino = getState().get('currentTetrominoReducer')

      if (keyCode === 38) {
        e.preventDefault()
        // handleRotation
      } else {
        const movement = mapMovement(keyCode, dispatch)
        if (movement && !hasCollision(movement.direction, tetromino)) {
          e.preventDefault()
          movement.moveTetromino()
        }
      }
    })
  }
}

function mapMovement (keyCode, dispatch) {
  const keyMapping = {
    37: {
      direction: 'left',
      moveTetromino: () => dispatch(moveLeft())
    },
    39: {
      direction: 'right',
      moveTetromino: () => dispatch(moveRight())
    },
    40: {
      direction: 'down',
      moveTetromino: () => dispatch(moveDown())
    }
  }
  return keyMapping[keyCode]
}

export default GameContainer
