import React from 'react';
import TimerLengthControl from './TimerLengthControl';
import Timer from './Timer';
import accurateInterval from './accurateInterval';

import './App.css';

let intervalHandle;

class App extends React.Component {
  state = {
    breakLength: 5,
    sessionLength: 25, // minutes
    elapsedSeconds: 0,
    timerStopped: true,
    isSession: true,
  };

  reset = () => {
    this.stopTimer();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      elapsedSeconds: 0,
      timerStopped: true,
      isSession: true,
    });
  };

  onTimerTick = () => {
    if (this.state.isSession) {
      if (this.state.elapsedSeconds >= this.state.sessionLength * 60) {
        this.setState({
          isSession: false,
          elapsedSeconds: 0,
        });
        return;
      }
    } else {
      if (this.state.elapsedSeconds >= this.state.breakLength * 60) {
        this.setState({
          isSession: true,
          elapsedSeconds: 0,
        });
        return;
      }
    }

    const elapsedSeconds = this.state.elapsedSeconds + 1;
    this.setState({
      elapsedSeconds,
    });
  };

  stopTimer = () => {
    if (!this.state.timerStopped) {
      intervalHandle.cancel();
      this.setState({
        timerStopped: true,
      });
    }
  };

  increment = (id) => {
    if (id === 'session-increment' && this.state.sessionLength < 60) {
      let sessionLength = this.state.sessionLength + 1;
      this.setState({
        sessionLength,
      });
    }
    if (id === 'break-increment' && this.state.breakLength < 60) {
      let breakLength = this.state.breakLength + 1;
      this.setState({
        breakLength,
      });
    }
  };

  decrement = (id) => {
    if (id === 'session-decrement' && this.state.sessionLength > 1) {
      let sessionLength = this.state.sessionLength - 1;
      this.setState({
        sessionLength,
      });
    }
    if (id === 'break-decrement' && this.state.breakLength > 1) {
      let breakLength = this.state.breakLength - 1;
      this.setState({
        breakLength,
      });
    }
  };

  startTimer = () => {
    if (this.state.timerStopped) {
      intervalHandle = accurateInterval(1000, this.onTimerTick);
      this.setState({
        timerStopped: false,
      });
    }
  };
  render() {
    return (
      <div className="App">
        <TimerLengthControl
          minId="break-decrement"
          addId="break-increment"
          titleId="break-label"
          title="Break Length"
          value={this.state.breakLength}
          lengthId="break-length"
          onIncrementClicked={this.increment}
          onDecrementClicked={this.decrement}
        />
        <TimerLengthControl
          minId="session-decrement"
          addId="session-increment"
          titleId="session-label"
          title="Session Length"
          value={this.state.sessionLength}
          lengthId="session-length"
          onIncrementClicked={this.increment}
          onDecrementClicked={this.decrement}
        />
        <Timer
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          elapsedSeconds={this.state.elapsedSeconds}
          onResetClicked={this.reset}
          onStartTimerClicked={this.startTimer}
          onStopTimerClicked={this.stopTimer}
          isSession={this.state.isSession}
        />
      </div>
    );
  }
}

export default App;
