import { Wrap } from './App.styled';
import { useEffect, useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Statistic from 'components/Statistics/Statistic.jsx';
import Section from 'components/Section/Section.jsx';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const leaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    let totalSum = good + neutral + bad;
    setTotal(totalSum);
    setPositivePercentage(Math.round((100 / totalSum) * good) || 0);
  }, [good, neutral, bad]);

  const stateKeys = ['good', 'neutral', 'bad'];

  return (
    <Wrap>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrap>
  );
};
