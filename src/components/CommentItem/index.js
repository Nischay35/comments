import './index.css'
import {formatDistanceToNow} from 'date-fns'
const CommentItem = props => {
  const {commentDetails, deleteUser, toggleLikeBtn} = props
  const {id, user, comments, date, initialClassName, isLiked} =
    commentDetails
  const onDelete = () => {
    deleteUser(id)
  }
  const onLikeBtn = () => {
    toggleLikeBtn(id)
  }
  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-items">
      <div className={initialClassName}>
        <p className="text">{user.slice(0, 1).toUpperCase()}</p>
      </div>
      <div className="user-container">
        <div>
          <p className="user">{user}</p>
          <p className="comments">{comments}</p>
        </div>
        <div>
          <p className="date-text">{formatDistanceToNow(date)} ago</p>
        </div>
        <div className="btn-container">
          <button className="like-btn" onClick={onLikeBtn}>
            <img src={likeUrl} alt="like" className="like-image" />
          </button>
          <button
            className="delete-btn"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
