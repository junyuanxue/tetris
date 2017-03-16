import React from 'react'

class Game extends React.Component {
  render () {
    this.props.startGame()
    return (
      <div>Gaaaaaame</div>
    )
  }
}

export default Game
