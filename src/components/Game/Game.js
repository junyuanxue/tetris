import React from 'react'

class Game extends React.Component {
  render () {
    this.props.startGame()
    return (
      <div>
        <div> ------- THE JOY OF TETRIS LOL :D --------- </div>
        <div>{this.props.isGameOver ? 'Game Over :(' : ''}</div>
      </div>
    )
  }
}

Game.propTypes = {
  startGame: React.PropTypes.func,
  isGameOver: React.PropTypes.bool
}

export default Game
