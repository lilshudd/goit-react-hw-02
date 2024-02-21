import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback, onReset, feedback }) => {
  const { good, neutral, bad } = feedback;
  const anyFeedbackGiven = good > 0 || neutral > 0 || bad > 0;

  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
      {anyFeedbackGiven && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Options;
