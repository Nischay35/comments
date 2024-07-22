import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'
import {v4 as uuidv4} from 'uuid'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {username: '', comment: '', commentsList: []}
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }
  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }
  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state
    const initialContainerBackgroundColorClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      user: username,
      comments: comment,
      date: new Date(),
      initialClassName: initialContainerBackgroundColorClassNames,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      comment: '',
    }))
  }
  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }
  deleteUser = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }
  render() {
    const {username, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="upper-body">
            <h1 className="heading">Comments</h1>
            <form className="forms" onSubmit={this.onAddComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                onChange={this.onChangeUsername}
                value={username}
                className="input-text"
                placeholder="Your Name"
              />
              <textArea
                rows="6"
                cols="9"
                className="txtArea"
                onChange={this.onChangeComment}
                value={comment}
                placeholder="Your Comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr />
        <div className="comments-container">
          <p className="comment-text">
            <span className="styling">{commentsList.length}</span>Comments
          </p>
          <ul className="comment-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteUser={this.deleteUser}
                toggleLikeBtn={this.toggleLikeBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
