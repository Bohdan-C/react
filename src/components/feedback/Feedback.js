import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.bad + this.state.neutral + this.state.good)) *
    100;

  handleGood = () => {
    const { step } = this.props;
    this.setState({ good: this.state.good + step });
  };

  handleNeutral = () => {
    const { step } = this.props;
    this.setState({ neutral: this.state.neutral + step });
  };

  handleBad = () => {
    const { step } = this.props;
    this.setState({ bad: this.state.bad + step });
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.state.bad + this.state.neutral + this.state.good}</p>
        <p>
          Positive feedback:
          {(this.state.good /
            (this.state.bad + this.state.neutral + this.state.good)) *
            100 >
          1
            ? (this.state.good /
                (this.state.bad + this.state.neutral + this.state.good)) *
              100
            : ''}
        </p>
      </div>
    );
  }
}
