import React, { Component } from "react";
import milk from "./assets/milk.mp4";
import milkCaption from "./assets/milkCaption.vtt";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      first: false
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "NO FACE";
    this.setState({ name });
    document.title = "DanDoesNyc2018";
  }

  setDelay() {
    setTimeout(() => {
      const { name = "", first } = this.state;
      if (!first) {
        const cue = new VTTCue(2, 5, `HELLO ${name.toUpperCase()}`);
        const tracks = document.querySelector(".video").textTracks;
        tracks[0].addCue(cue);
      }
      this.setState({ first: true });
    }, 500);
  }

  render() {
    return (
      <div>
        <div className="milk-greeter vh-100" />
        <video
          className="fullscreen-bg__video video"
          id="video"
          src={milk}
          playsInline
          autoPlay
          muted
          loop
        >
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={milkCaption}
            default
          />
        </video>
        {this.setDelay()}
      </div>
    );
  }
}

export default App;
