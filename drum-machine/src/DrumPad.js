import React, { Component } from 'react';
import DrumPadKey from './DrumPadKey';

export default class DrumPad extends Component {
  state = {
    display: '',
  };

  displayLastPlayed = (lastAudioId) => {
    this.setState({
      display: lastAudioId,
    });
  };
  render() {
    const display = this.state.display ? (<p>{this.state.display}</p>) : (<p>Press the Keys</p>)
    return (
      <div id="display">
        <div id="lastPlayed">
          <p>{display}</p>
        </div>
        <div id="drumpad-key">
          <DrumPadKey
            id="Heater-1"
            name="Q"
            url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            keyCode={81}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Heater-2"
            name="W"
            url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            keyCode={87}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Heater-3"
            name="E"
            url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            keyCode={69}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Heater-4"
            name="A"
            url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            keyCode={65}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Clap"
            name="S"
            url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            keyCode={83}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Open-HH"
            name="D"
            url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            keyCode={68}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Kick-n'-Hat"
            name="Z"
            url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            keyCode={90}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Kick"
            name="X"
            url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            keyCode={88}
            displayLastPlayed={this.displayLastPlayed}
          />
          <DrumPadKey
            id="Closed-HH"
            name="C"
            url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            keyCode={67}
            displayLastPlayed={this.displayLastPlayed}
          />
        </div>
      </div>
    );
  }
}
