import React from "react";

const Options = ({ checkFeedbacks, totalFeedbacks }) => {
  return totalFeedbacks === 0 ? (
    <p>No feedback yet</p>
  ) : (
    <ul>
      <li>Good: {checkFeedbacks.good}</li>
      <li>Neutral: {checkFeedbacks.neutral}</li>
      <li>Bad: {checkFeedbacks.bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>
        Positive:{" "}
        {Math.round(
          ((checkFeedbacks.good + checkFeedbacks.neutral) / totalFeedbacks) *
            100
        )}
        %
      </li>
    </ul>
  );
};

export default Options;
