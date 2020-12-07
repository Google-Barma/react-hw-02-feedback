import { Component } from "react";

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

  leaveFeedback = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  makeStatisticsList = () => {
    return Object.entries(this.state);
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.leaveFeedback}
        />
        <Statistics
          stats={this.makeStatisticsList()}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
