import { useState } from "react";
import Description from "./Description.jsx";
import Feedback from "./Feedback.jsx";
import Options from "./Options.jsx";


const App = () => {
  const [checkFeedbacks , setCheckFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

const updateFeedback = (feedbackType) =>{
  setCheckFeedbacks({
    ...checkFeedbacks, 
    [feedbackType]: checkFeedbacks[feedbackType] + 1
  });
};

const totalFeedbacks = checkFeedbacks.good + checkFeedbacks.neutral + checkFeedbacks.bad;

  return (
    <>
      <Description />
      <Feedback handleClick ={ updateFeedback }/>
      <Options 
       checkFeedbacks = { checkFeedbacks }
       totalFeedbacks = { totalFeedbacks }
      />
    </>
  );
};

export default App;
