import { connect } from 'react-redux'
import Game from './Game'
import constants from '../../constants/constants'
import {
  setCurrentTetromino,
  moveDown
} from '../../actions/index'

const mapStateToProps = state => {
  return { isPlaying: true }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      const { shapesMapping } = constants
      const randomNumber = Math.floor(Math.random() * 7)
      const randomShape = shapesMapping[randomNumber]

      dispatch(setCurrentTetromino({ randomShape }))
      dropTetromino(dispatch)
    }
  }
}

function dropTetromino (dispatch) {
  dispatch(moveDown())
}



const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer
