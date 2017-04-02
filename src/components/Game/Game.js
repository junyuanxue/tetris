import React from 'react'
import './Game.css'

class Game extends React.Component {
  render () {
    this.props.startGame()
    return (
      <div id='game'>
        <div> ------- THE JOY OF TETRIS LOL :D --------- </div>
        <div className={this.props.isGameOver ? 'game-over' : 'hide'}>
          ------ Game over :( -----
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  startGame: React.PropTypes.func,
  isGameOver: React.PropTypes.bool
}

export default Game
