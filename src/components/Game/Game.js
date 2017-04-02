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
        <div className='score'>
          <span className='text'>Score</span>
          <span className='value'>
            {this.props.score}
          </span>
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  startGame: React.PropTypes.func,
  isGameOver: React.PropTypes.bool,
  score: React.PropTypes.number
}

export default Game
