import { useState, useEffect } from "react";
import Feedback from "../components/Feedback.jsx";
import Options from "../components/Options.jsx";
import Notification from "../components/Notification.jsx";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        feedback={feedback}
      />
      <Feedback feedback={feedback} />
      <Notification feedback={feedback} />
    </div>
  );
};

export default App;
