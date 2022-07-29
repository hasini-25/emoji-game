// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, gameProgress, topScore} = props
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="nav-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {gameProgress && (
          <div className="nav-container">
            <p>Score: {score}</p>
            <p className="para-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
