import React from 'react'

const Feedback = ({handleClick }) => {
  return (
    <div>
      <button onClick={()=>handleClick("good")}>Good</button>
      <button onClick={()=>handleClick("neutral")}>Neutral</button>
      <button onClick={()=>handleClick("bad")}>Bad</button>
    </div>
  )
};

export default Feedback;