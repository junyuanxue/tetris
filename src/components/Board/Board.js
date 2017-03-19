import React from 'react'
import { Layer, Stage } from 'react-konva'
import './Board.css'
import constants from '../../constants/constants'
import CurrentTetrominoContainer from '../Tetromino/CurrentTetrominoContainer'
import TetrominoStackContainer from '../Tetromino/TetrominoStackContainer'
const { BOARD_WIDTH, BOARD_HEIGHT } = constants

class Board extends React.Component {
  render () {
    return (
      <div id='board'>
        <Stage width={BOARD_WIDTH} height={BOARD_HEIGHT}>
          <Layer>
            <CurrentTetrominoContainer />
            <TetrominoStackContainer />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Board
