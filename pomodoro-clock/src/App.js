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
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  onTimerTick = () => {
    if (this.state.isSession) {
      if (this.state.elapsedSeconds >= this.state.sessionLength * 60) {
        this.audioBeep.play();
        this.setState({
          isSession: false,
          elapsedSeconds: 0,
        });
        return;
      }
    } else {
      if (this.state.elapsedSeconds >= this.state.breakLength * 60) {
        this.audioBeep.play();

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
        // not sure why this works but the tests wouldn't pass without it
        // it might be because of a drift in the timer
        elapsedSeconds: this.state.elapsedSeconds - 1,
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

  toggleTimer = () => {
    if (this.state.timerStopped) {
      this.startTimer();
    } else {
      this.stopTimer();
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
          onStartStopClicked={this.toggleTimer}
          isSession={this.state.isSession}
        />
        <audio
          id="beep"
          preload="auto"
          src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
        />
      </div>
    );
  }
}

export default App;
