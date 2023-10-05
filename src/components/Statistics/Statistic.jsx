import {
  StatsWrap,
  StatsList,
  StatsItem,
  StatsText,
  StatsInfo,
} from './Statistic.styled';
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsWrap>
      <StatsList>
        <StatsItem>
          <StatsText>Good</StatsText>
          <StatsInfo>{good}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsText>Neutral</StatsText>
          <StatsInfo>{neutral}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsText>Bad</StatsText>
          <StatsInfo>{bad}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsText>Total:</StatsText>
          <StatsInfo>{total}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsText>Positive feedback:</StatsText>
          <StatsInfo>{positivePercentage}%</StatsInfo>
        </StatsItem>
      </StatsList>
    </StatsWrap>
  );
};
export default Statistic;
