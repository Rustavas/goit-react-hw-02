import { useEffect, useState } from "react";
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";
import Options from "./components/options/Options.jsx";

const objFeedbacks = {
  good: 0,
  neutral: 0,
  bad: 0
}
const App = () => {

  const [checkFeedbacks, setCheckFeedbacks] = useState(() => {
    const parseFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) ?? objFeedbacks;
    return parseFeedbacks;
  });

  const updateFeedback = (feedbackType) => {
    setCheckFeedbacks({
      ...checkFeedbacks,
      [feedbackType]: checkFeedbacks[feedbackType] + 1
    });
  };

  const handleClickReset = () => {
    setCheckFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedbacks = Object.values(checkFeedbacks).reduce((acc, curr) => acc + curr, 0);
  const positive = Math.round(((checkFeedbacks.good + checkFeedbacks.neutral) / totalFeedbacks) * 100);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(checkFeedbacks))
  }, [checkFeedbacks])

  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        handleClickReset={handleClickReset}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks ?
        <Feedback
          checkFeedbacks={checkFeedbacks}
          totalFeedbacks={totalFeedbacks}
          positive={positive}
        /> :
        <Notification />
      }
    </>
  );
};

export default App;