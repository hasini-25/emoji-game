// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, emojiClick} = props
  const {id, emojiUrl, emojiName} = emojis
  const onClickEmoji = () => {
    emojiClick(id)
  }
  return (
    <li>
      <button onClick={onClickEmoji} className="emoji-list" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
