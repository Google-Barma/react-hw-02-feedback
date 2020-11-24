import { Component } from "react";

export default class App extends Component {
  propTypes = {};

  defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback(stateType) {
    this.setState(stateType + 1);
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  handleClickBtn(e) {
    const feedbackType = e.currentTarget.textContent;
    this.addFeedback(feedbackType);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </section>

        <section>
          <p>
            good: <span>{good}</span>
          </p>
          <p>
            neutral: <span>{neutral}</span>
          </p>
          <p>
            bad: <span>{bad}</span>
          </p>
          <p>
            total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            petcentage: <span>{this.countPositiveFeedbackPercentage()}</span>
          </p>
        </section>
      </>
    );
  }
}
