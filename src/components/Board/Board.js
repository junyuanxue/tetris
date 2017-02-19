import React from 'react'
import './Board.css'

class Board extends React.Component {
  generateRows (width) {
    return new Array(width).fill('').map((item, i) => {
      return <td key={i} className='block empty' />
    })
  }

  generateColumns (length, row) {
    return new Array(length).fill('').map((item, i) => {
      return (
        <tr key={i}>{row}</tr>
      )
    })
  }

  render () {
    const width = 10
    const length = 20
    const row = this.generateRows(width)
    const blocks = this.generateColumns(length, row)

    return (
      <table id='board'>
        <tbody>
          {blocks}
        </tbody>
      </table>
    )
  }
}

export default Board
