import React from 'react'

class Game extends React.Component {
  render () {
    this.props.startGame()
    return (
      <div> ------- THE JOY OF TETRIS LOL :D --------- </div>
    )
  }
}

Game.propTypes = {
  startGame: React.PropTypes.func
}

export default Game
