import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import helpers from '../../lib/index'
import {
  setCurrentTetromino,
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  updateTetrominoStack
} from '../../actions/index'

const { DROP_SPEED, shapesMapping } = constants
const {
  hasCollision,
  getUpdatedGrid,
  getCompletedRows,
  clearRows,
  rotateShape
} = helpers

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
  dispatch(moveDown())
  dispatch(dropTetromino())
}

function dropTetromino () {
  return (dispatch, getState) => {
    const state = getState()
    const tetromino = state.get('currentTetrominoReducer')
    const currentGrid = state.getIn(['tetrominoStackReducer', 'tetrominoStack'])

    if (!hasCollision('down', tetromino, currentGrid)) {
      dispatch(moveDown())

      window.setTimeout(() => {
        window.requestAnimationFrame(() => dispatch(dropTetromino()))
      }, DROP_SPEED)
    } else {
      let updatedGrid = getUpdatedGrid(currentGrid, tetromino)
      const rowsToClear = getCompletedRows(updatedGrid)
      if (rowsToClear.length) {
        updatedGrid = clearRows(updatedGrid, rowsToClear)
      }
      dispatch(updateTetrominoStack(updatedGrid)) // -------- TODO --------
                                                  // add animation when clearing completed lines
                                                  // -------- TODO --------
                              // -------- TODO --------
                              // Check if game is over
                              // -------- TODO --------
      setAndDropNewTetromino(dispatch)
    }
  }
}

function controlTetromino () {
  return (dispatch, getState) => {
    window.addEventListener('keydown', e => {
      const { keyCode } = e
      const state = getState()
      const tetromino = state.get('currentTetrominoReducer')
      const currentGrid = state.getIn(['tetrominoStackReducer', 'tetrominoStack'])

      if (keyCode === 38) {
        e.preventDefault()
        rotateTetromino(tetromino, dispatch)
      } else {
        const movement = mapMovement(keyCode, dispatch)
        if (movement && !hasCollision(movement.direction, tetromino, currentGrid)) {
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

function rotateTetromino (tetromino, dispatch) {
  const { shape } = tetromino
  const rotatedShape = rotateShape(shape)
  const rotatedTetromino = { ...tetromino, shape: rotatedShape }
  dispatch(rotate(rotatedTetromino))
}

export default GameContainer
