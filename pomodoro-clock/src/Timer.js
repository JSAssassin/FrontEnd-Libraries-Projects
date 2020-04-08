import React from 'react';

export default function Timer(props) {
  const {
    sessionLength,
    breakLength,
    elapsedSeconds,
    onResetClicked,
    onStartStopClicked,
    isSession,
  } = props;
  let totalSeconds = isSession ? sessionLength * 60 : breakLength * 60;
  let timeleft = totalSeconds - elapsedSeconds;

  var min = Math.floor(timeleft / 60);
  var seconds = timeleft - min * 60;
  seconds = Math.round(seconds * 100) / 100;
  var result = min < 10 ? '0' + min : min;
  result += ':' + (seconds < 10 ? '0' + seconds : seconds);
  const timerLabel = isSession ? 'Session' : 'Break';

  return (
    <div>
      <h1 id="timer-label">{timerLabel}</h1>
      <h2 id="time-left">{result}</h2>
      <button id="start_stop" onClick={onStartStopClicked}>
        <i className="fas fa-play"></i>
        <i className="fas fa-stop"></i>
      </button>
      <button id="reset" onClick={onResetClicked}>
        <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
}
