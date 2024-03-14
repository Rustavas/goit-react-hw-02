import css from "./Feedback.module.css"

const Feedback = ({ checkFeedbacks, totalFeedbacks, positive }) => {
  return (
    <ul>
      <li className={css.feedbackItem}>Good: {checkFeedbacks.good}</li>
      <li className={css.feedbackItem}>Neutral: {checkFeedbacks.neutral}</li>
      <li className={css.feedbackItem}>Bad: {checkFeedbacks.bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedbacks}</li>
      <li className={css.feedbackItem}>Positive: {positive}%</li>
     
    </ul>
  );
};

export default Feedback;
