import React from "react";

const sounds = [{}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPlayed: "",
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(clip) {
    this.setState({ lastPlayed: clip });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.lastPlayed}</div>
        <DrumPad
          audioId="heater 1"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          keyCode="Q"
          updateDisplay={this.updateDisplay}
        />
        <DrumPad
          audioId="heater 2"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          keyCode="W"
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    let audio = document.getElementById(this.props.keyCode);
    audio.play();
    this.props.updateDisplay(this.props.audioId);
  }

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.audioId}
        onClick={this.playSound}
      >
        {this.props.keyCode}
        <audio
          src={this.props.src}
          className="clip"
          id={this.props.keyCode}
        ></audio>
      </button>
    );
  }
}

export default App;
