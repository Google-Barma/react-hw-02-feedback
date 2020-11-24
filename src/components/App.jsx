import { Component } from "react";

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback(type) {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback() > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    // const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={() => this.leaveFeedback("good")}>
            good
          </button>
          <button type="button" onClick={() => this.leaveFeedback("neutral")}>
            Neutral
          </button>
          <button type="button" onClick={() => this.leaveFeedback("bad")}>
            Bad
          </button>
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
            total: <span>{total}</span>
          </p>
          <p>
            percentage: <span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </section>
      </>
    );
  }
}
