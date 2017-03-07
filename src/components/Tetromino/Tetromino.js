import React from 'react'
import { Rect, Group } from 'react-konva'
import constants from '../../constants/constants'

const Tetromino = props => {
  return (
    <div>
    </div>
  )
}

Tetromino.propTypes = {
  offsetX: React.PropTypes.number,
  offsetY: React.PropTypes.number,
  shape: React.PropTypes.array,
  color: React.PropTypes.string
}

export default Tetromino
