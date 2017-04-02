import { connect } from 'react-redux'
import Game from './Game'
import { GameState as initialState } from '../../constants/states'
import constants from '../../constants/constants'
import helpers from '../../lib/index'
import {
  setCurrentTetromino,
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  updateTetrominoStack,
  endGame
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
  const currentState = state.get('gameReducer')
  if (currentState.score >= 0) {
    return {
      isPlaying: true,
      isGameOver: currentState.isGameOver,
      score: currentState.score
    }
  }
  return initialState.toObject()
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
    const hasBottomCollision = hasCollision('down', tetromino, currentGrid)

    if (hasBottomCollision === 'GAME_OVER') {
      console.log('game over.....')
      dispatch(endGame())
    } else if (!hasBottomCollision) {
      dispatch(moveDown())

      window.setTimeout(() => {
        window.requestAnimationFrame(() => dispatch(dropTetromino()))
      }, DROP_SPEED)
    } else {
      let updatedGrid = getUpdatedGrid(currentGrid, tetromino)
      const rowsToClear = getCompletedRows(updatedGrid)
      if (rowsToClear.length) {
        updatedGrid = clearRows(updatedGrid, rowsToClear)
        setTimeout(() => {
          refreshTetrominoesOnBoard(dispatch, updatedGrid)
          //  ---- TODO ----
          // adding score (5 per row?)
          // ---- TODO ----
        }, 600)
      } else {
        refreshTetrominoesOnBoard(dispatch, updatedGrid)
      }
    }
  }
}

function refreshTetrominoesOnBoard (dispatch, updatedGrid) {
  dispatch(updateTetrominoStack(updatedGrid))
  setAndDropNewTetromino(dispatch)
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
