// import React from "react";
import css from "./Options.module.css"

const Options = ({handleClick, handleClickReset, totalFeedbacks }) => {
  return (
    <div className={css.sectOptions}>
      <button className={css.btnOptions} onClick={()=>handleClick("good")}>Good</button>
      <button className={css.btnOptions} onClick={()=>handleClick("neutral")}>Neutral</button>
      <button className={css.btnOptions} onClick={()=>handleClick("bad")}>Bad</button>
      {totalFeedbacks > 0 && <button className={css.btnOptions} onClick={()=>handleClickReset()}>Reset</button>}
    </div>
  )
};

export default Options;
