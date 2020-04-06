import React, { Component } from 'react'

export default class DrumPadKey extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed);
  }
  playAudio = () => {
    this.props.displayLastPlayed(this.props.id);
    let audioElem = document.getElementById(this.props.name);
    audioElem.currentTime = 0;
    audioElem.play();
  }
  onKeyPressed = (e) => {
    if(e.keyCode === this.props.keyCode){
      this.playAudio();
    }
  }
  render() {
    const {name, url, id} = this.props;
    return (
      <div
        id={id}
        className="drum-pad"
        onClick={this.playAudio}
      >
        {name}
        <audio className="clip" src={url} id={name} />
      </div>
    );
  }
}

