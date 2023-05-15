// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const newClassName = isClicked ? 'dark-container' : 'light-container'
    const buttonClass = isClicked ? 'dark-button' : 'light-button'
    const buttonText = isClicked ? 'Light Mode' : 'Dark Mode'

    return (
      <giv className="bg-container">
        <div className={newClassName}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className={buttonClass}
            type="button"
            onClick={this.onClickButton}
          >
            {buttonText}
          </button>
        </div>
      </giv>
    )
  }
}
export default LightDarkMode
