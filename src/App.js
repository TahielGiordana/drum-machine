import React from "react";

const clips = [
  {
    clipId: "Heater 1",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    keyCode: "Q",
    keyTrigger: 0,
  },
  {
    clipId: "Heater 2",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    keyCode: "W",
    keyTrigger: 0,
  },
  {
    clipId: "Heater 3",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    keyCode: "E",
    keyTrigger: 0,
  },
  {
    clipId: "Heater 4",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    keyCode: "A",
    keyTrigger: 0,
  },
  {
    clipId: "Clap",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    keyCode: "S",
    keyTrigger: 0,
  },
  {
    clipId: "Open-HH",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    keyCode: "D",
    keyTrigger: 0,
  },
  {
    clipId: "Kick-n'-Hat",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    keyCode: "Z",
    keyTrigger: 0,
  },
  {
    clipId: "Kick",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    keyCode: "X",
    keyTrigger: 0,
  },
  {
    clipId: "Closed-HH",
    clipSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    keyCode: "C",
    keyTrigger: 0,
  },
];

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
        {clips.map((clip) => (
          <DrumPad
            clipId={clip.clipId}
            clipSrc={clip.clipSrc}
            keyCode={clip.keyCode}
            updateDisplay={this.updateDisplay}
          />
        ))}
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
    this.props.updateDisplay(this.props.clipId);
  }

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.clipId}
        onClick={this.playSound}
      >
        {this.props.keyCode}
        <audio
          src={this.props.clipSrc}
          className="clip"
          id={this.props.keyCode}
        ></audio>
      </button>
    );
  }
}

export default App;
