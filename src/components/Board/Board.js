import React from 'react'
import { Layer, Stage } from 'react-konva'
import './Board.css'
import constants from '../../constants/constants'
const { BOARD_WIDTH, BOARD_HEIGHT } = constants

class Board extends React.Component {
  render () {
    return (
      <div id='board'>
        <Stage width={BOARD_WIDTH * 30} height={BOARD_HEIGHT * 30}>
          <Layer />
        </Stage>
      </div>
    )
  }
}

export default Board
