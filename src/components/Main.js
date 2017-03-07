import React from 'react'
import Board from './Board/Board'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Board/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main
