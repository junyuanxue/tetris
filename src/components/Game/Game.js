import React from 'react'

class Game extends React.Component {
  render () {
    this.props.startGame()
    return (
      <div>Gaaaaaame</div>
    )
  }
}

Game.propTypes = {
  startGame: React.PropTypes.func
}

export default Game
