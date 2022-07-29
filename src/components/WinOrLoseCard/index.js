// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {win, score, buttonClick} = props

  const winOrLoseText = win ? 'Won' : 'Lose'
  const bestText = win ? 'Best' : ''
  const winOrLoseImage = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="card-bg">
      <div>
        <h1 className="card-heading">You {winOrLoseText}</h1>
        <p className="card-score-para">{bestText} score</p>
        <p className="card-score-number">{score}/12</p>
        <button
          onClick={buttonClick}
          className="card-score-button"
          type="button"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={winOrLoseImage} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
