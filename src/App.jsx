import { useState } from "react";
import Description from "./Description.jsx";
import Feedback from "./Feedback.jsx";
import Notification from "./Notification.jsx";
import Options from "./Options.jsx";



const App = () => {
  const [checkFeedbacks, setCheckFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
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

  const totalFeedbacks = checkFeedbacks.good + checkFeedbacks.neutral + checkFeedbacks.bad;
  const positive = Math.round(((checkFeedbacks.good + checkFeedbacks.neutral) / totalFeedbacks) * 100);

  return (
    <>
      <Description />
      {totalFeedbacks ?
        <Options
          handleClick={updateFeedback}
          handleClickReset={handleClickReset}
          totalFeedbacks={totalFeedbacks}
        /> :
        <Options
          handleClick={updateFeedback}
          handleClickReset={handleClickReset}
        />
      }
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