import React from 'react'
import { Rect, Group } from 'react-konva'
import constants from '../../constants/constants'

class Tetromino extends React.Component {
  render () {
    const { offsetX, offsetY, shape, color } = this.props

    return (
      <div>
      </div>
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
