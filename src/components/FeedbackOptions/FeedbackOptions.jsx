import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(option => (
        <FeedbackButton
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackContainer>
  );
};
export default FeedbackOptions;
