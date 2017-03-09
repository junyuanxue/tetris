import React from 'react'
import { Rect, Group } from 'react-konva'
import constants from '../../constants/constants'

const { BLOCK_SIZE } = constants

class Tetromino extends React.Component {
  getCoordinates () {
    const { shape } = this.props
    const coordinates = []
    shape.forEach((row, i) => {
      row.forEach((block, j) => {
        if (block) coordinates.push({ x: i, y: j })
      })
    })
    return coordinates
  }

  buildTetromino () {
    const coordinates = this.getCoordinates()
    const { offsetX, offsetY, color } = this.props
    return coordinates.map((pair, i) => {
      return <Rect
                key={i}
                width={BLOCK_SIZE}
                height={BLOCK_SIZE}
                x={pair.x * BLOCK_SIZE + offsetX}
                y={pair.y * BLOCK_SIZE + offsetY}
                fill={color}
                stroke='black'
                strokeWidth={4} />
    })
  }

  render () {
    return (
      <Group>
        {this.buildTetromino()}
      </Group>
    )
  }
}

Tetromino.propTypes = {
  offsetX: React.PropTypes.number,
  offsetY: React.PropTypes.number,
  shape: React.PropTypes.array,
  color: React.PropTypes.string
}

export default Tetromino
