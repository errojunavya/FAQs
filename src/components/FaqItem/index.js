// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isButtonActive: false}

  renderAnswer = () => {
    const {isButtonActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isButtonActive) {
      return (
        <>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </>
      )
    }
    return null
  }

  toggleSymbol = () => {
    this.setState(prevState => ({isButtonActive: !prevState.isButtonActive}))
  }

  renderActiveSymbol = () => {
    const {isButtonActive} = this.state
    const image = isButtonActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isButtonActive ? 'Minus' : 'Plus'

    return (
      <button className="button" type="button" onClick={this.toggleSymbol}>
        <img src={image} alt={altText} className="symbol-icon" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faqList-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveSymbol()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
