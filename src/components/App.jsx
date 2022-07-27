import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const option = e.target.name;
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  countTotalFeedback = () => {
    const objTotal = Object.values(this.state);
    return objTotal.reduce((acc, elem) => acc + elem);
  };
  countPositivePerCentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const perCentage = this.countPositivePerCentage();

    const options = Object.keys(this.state);
    const handleClickButton = this.handleClickButton;

    return (
      <div>
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions options={options} onBtnClick={handleClickButton} />
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={perCentage}
              />
            ) : (
              <Notification message="Not any feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
