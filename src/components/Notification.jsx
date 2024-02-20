import PropTypes from "prop-types";

const Notification = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return <div>{!totalFeedback}</div>;
};

Notification.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Notification;
