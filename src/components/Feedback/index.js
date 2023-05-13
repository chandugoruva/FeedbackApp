import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    page: false,
  }

  FdPage = () => {
    this.setState(prevState => ({page: !prevState.page}))
  }

  render() {
    const {resources} = this.props
    const {page} = this.state
    let displayFeedback
    if (page === false) {
      displayFeedback = (
        <div className="sub-div">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="img-sub">
            {resources.emojis.map(each => (
              <li className="li" key={each.id}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="img"
                  onClick={this.FdPage}
                />
                <p>{each.name}</p>
              </li>
            ))}
          </div>
        </div>
      )
    } else {
      displayFeedback = (
        <div className="sub-div">
          <div className="fd">
            <img
              src={resources.loveEmojiUrl}
              alt="love emoji"
              className="img"
            />
            <h1 className="heading">Thank You!</h1>
            <p className="paragraph">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      )
    }

    return <div className="bg-color">{displayFeedback}</div>
  }
}
export default Feedback
