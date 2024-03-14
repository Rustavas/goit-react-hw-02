import { useState } from "react";
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";
import Options from "./components/options/Options.jsx";



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
//  {/* <Options
      //     handleClick={updateFeedback}
      //     handleClickReset={handleClickReset}
      //   />
      // }