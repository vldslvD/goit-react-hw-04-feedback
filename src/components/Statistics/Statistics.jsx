import { Container } from "./Statistics.styled";
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <span>Bad: {bad}</span>
      <span>Neutral: {neutral}</span>
      <span>Good: {good}</span>
      <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
    </Container>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


