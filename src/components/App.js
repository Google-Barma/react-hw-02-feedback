import React, { Component } from "react";
import Layout from "./Layout/Layout";
import Section from "./Layout/Section";
import StatisticBtn from "./StatisticBtn";
import FeedbackValue from "./FeedbackValue";

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 2,
    neutral: 3,
    bad: 1,
    total: 0,
    percentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(
      (prevState) =>
        (prevState.total = Object.values(this.state).reduce(
          (acc, item) => acc + item,
          0
        ))
    );
  };

  incrementFeedbackValue = (value) => {
    console.log(value);
    this.setState((prevState) => prevState[value.toLowerCase()] + 1);
    console.log(this.state);
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(
      (prevState) =>
        (prevState.percentage = (this.state.good / this.state.total) * 100)
    );
  };

  handlerIncrement = (event) => {
    const value = event.currentTarget.textContent;
    this.incrementFeedbackValue(value);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <Layout>
        <Section>
          <h2>"Please leave feedback"</h2>
          <StatisticBtn label="Good" onIncrement={this.handlerIncrement} />
          <StatisticBtn label="Neutral" onIncrement={this.handlerIncrement} />
          <StatisticBtn label="Bad" onIncrement={this.handlerIncrement} />
        </Section>

        <Section>
          <h2>"Statistics"</h2>
          <FeedbackValue label={"Good"} value={this.state.good} />
          <FeedbackValue label={"Neutral"} value={this.state.neutral} />
          <FeedbackValue label={"Bad"} value={this.state.bad} />
          <FeedbackValue label={"Total"} value={this.state.total} />
          <FeedbackValue
            label={"Positive feedback"}
            value={this.state.percentage}
          />
        </Section>
      </Layout>
    );
  }
}
