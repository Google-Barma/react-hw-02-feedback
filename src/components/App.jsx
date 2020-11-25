import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

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
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    return (
      <>
        <section>
          {Object.keys(this.state).map((key) => (
            <button
              type="button"
              onClick={() => this.leaveFeedback(key)}
              key={uuidv4()}
            >
              {key}
            </button>
          ))}
        </section>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
