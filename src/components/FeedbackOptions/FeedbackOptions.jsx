import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

