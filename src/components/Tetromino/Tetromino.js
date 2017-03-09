import React from 'react'
import { Rect, Group } from 'react-konva'
import constants from '../../constants/constants'

class Tetromino extends React.Component {
  getCoordinates (shape) {
    const coordinates = []
    shape.forEach((row, i) => {
      row.forEach((block, j) => {
        if (block) coordinates.push({ x: i, y: j })
      })
    })
    return coordinates
  }

  buildTetromino () {

  }

  render () {
    const { offsetX, offsetY, shape, color } = this.props
    const coordinates = this.getCoordinates(shape)
    const xs = coordinates.map(pair => pair.x + offsetX)
    return (
      <Group>
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
