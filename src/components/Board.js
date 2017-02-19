import React from 'react'

class Board extends React.Component {
  render () {
    const width = 10
    const length = 20

    const row = new Array(width).map((item, i) => {
      return <td key={i} className='block empty' />
    })

    const blocks = new Array(length).map((item, i) => {
      return (
        <tr key={i}>{row}</tr>
      )
    })

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
