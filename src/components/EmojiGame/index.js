/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {emojis: [], gameProgress: true, topScore: 0}

  buttonClick = () => {
    this.setState({emojis: [], gameProgress: true})
  }

  getWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {emojis} = this.state
    const win = emojis.length === emojisList.length

    return (
      <WinOrLoseCard
        win={win}
        buttonClick={this.buttonClick}
        score={emojis.length}
      />
    )
  }

  emojisTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, gameProgress: false})
  }

  emojiClick = id => {
    const {emojis} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = emojis.includes(id)
    const emojiLength = emojis.length

    if (isEmojiPresent) {
      this.emojisTopScore(emojiLength)
    } else {
      if (emojisList.length - 1 === emojiLength) {
        this.emojisTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        emojis: [...prevState.emojis, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojiCards = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="cards">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojis={eachEmoji}
            key={eachEmoji.id}
            emojiClick={this.emojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {gameProgress, emojis, topScore} = this.state

    return (
      <div className="emoji-game-container">
        <NavBar
          score={emojis.length}
          topScore={topScore}
          gameProgress={gameProgress}
        />
        <div className="emoji-cards">
          {gameProgress ? this.getEmojiCards() : this.getWinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
