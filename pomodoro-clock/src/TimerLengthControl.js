import React from 'react';

export default function TimerLengthControl(props) {
  const { minId, addId, titleId, title, value, lengthId, onIncrementClicked,onDecrementClicked } = props;
  return (
    <div>
      <div id={titleId}>{title}</div>
      <button onClick={()=>{onIncrementClicked(addId)}} id={addId}>
        <i className="fas fa-sort-up" />
      </button>
      <div id={lengthId}>{value}</div>
      <button onClick={()=>{onDecrementClicked(minId)}} id={minId}>
        <i className="fas fa-sort-down" />
      </button>
    </div>
  );
}
