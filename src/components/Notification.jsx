import PropTypes from "prop-types";

const Notification = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return <div>{totalFeedback === 0 && <p>No feedback given yet</p>}</div>;
};

Notification.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Notification;
