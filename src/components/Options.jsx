import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback, onReset }) => (
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
    <button type="button" onClick={onReset}>
      Reset
    </button>
  </div>
);

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
