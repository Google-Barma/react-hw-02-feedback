import React, { Component } from "react";
import Layout from "./Layout/Layout";
import StatisticBtn from "./StatisticBtn";
import FeedbackValue from "./FeedbackValue";
import Section from "./Layout/Section";

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (feedbackType) => {
    this.setState((prevState) => {
      return { [feedbackType]: prevState[feedbackType] + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item);

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handlerIncrement = (event) => {
    const typeFeedback = event.currentTarget.textContent;
    this.addFeedback(typeFeedback);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <Section>
          <h2>Please leave feedback</h2>
          <StatisticBtn label="good" onIncrement={this.handlerIncrement} />
          <StatisticBtn label="neutral" onIncrement={this.handlerIncrement} />
          <StatisticBtn label="bad" onIncrement={this.handlerIncrement} />
        </Section>

        {!!this.countTotalFeedback() ? (
          <Section>
            <h2>Statistics:</h2>
            <FeedbackValue label={"Good"} value={good} />
            <FeedbackValue label={"Neutral"} value={neutral} />
            <FeedbackValue label={"Bad"} value={bad} />

            <FeedbackValue label={"Total"} value={this.countTotalFeedback()} />
            <FeedbackValue
              label={"Percentage"}
              value={this.countPositiveFeedbackPercentage() + "%"}
            />
          </Section>
        ) : (
          <p>No feedback</p>
        )}
      </Layout>
    );
  }
}
