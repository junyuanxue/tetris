import React from 'react'
import Board from './Board/Board'
import GameContainer from './Game/GameContainer'

class Main extends React.Component {
  render () {
    return (
      <div>
        <GameContainer />
        <Board/>
      </div>
    )
  }
}

export default Main
