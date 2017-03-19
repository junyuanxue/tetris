import React from 'react'
import { Rect, Group } from 'react-konva'
import constants from '../../constants/constants'
const { INACTIVE_COLOR, BLOCK_SIZE } = constants

class TetrominoStack extends React.Component {
  buildStack () {
    const stack = []
    const { grid } = this.props
    grid.forEach((column, x) => {
      column.forEach((block, y) => {
        let strokeColor = 'lightgray'
        let strokeWidth = 2
        if (block !== INACTIVE_COLOR) {
          strokeColor = 'black'
          strokeWidth = 4
        }
        stack.push(
          <Rect
            key={`x:${x},y:${y}`}
            width={BLOCK_SIZE}
            height={BLOCK_SIZE}
            x={x * BLOCK_SIZE}
            y={y * BLOCK_SIZE}
            fill={block}
            stroke={strokeColor}
            strokeWidth={strokeWidth} />
        )
      })
    })
    return stack
  }

  render () {
    return (
      <Group>
        {this.buildStack()}
      </Group>
    )
  }
}

TetrominoStack.propTypes = {
  grid: React.PropTypes.array
}

export default TetrominoStack
