import React from "react";
import "../styles/plugin.css";
import hangDreamImage from "../images/HangDream.png";
import frozenReverbImage from "../images/FrozenReverb.png";
import DownloadButton from './DownloadButton';

function Plugin() {
  return (
    <section className="plug-in" id="plugin">
      <div className="plugin-container">
        <div className="container-plug-in">
          <div className="plug-in-img">
            <img
              src={hangDreamImage}
              alt="Hang Dream Plugin"
            />
          </div>
          <div className="description-container">
            <h2>Hang Dream</h2>
            <p>
              Hang Drum Kontakt library offers a beautifully captured digital
              recreation of the Hang Drum, recorded at God Knows Studios. Using
              premium microphones, this plugin brings the instrument's unique tones
              into your DAW with stunning realism.
            </p>
          </div>
          <div className="purchase-container">
            <DownloadButton text="Download Now" />
          </div>
        </div>

        <div className="container-plug-in">
          <div className="plug-in-img">
            <img
              src={frozenReverbImage}
              alt="Frozen Reverb Plugin"
            />
          </div>
          <div className="description-container">
            <h2>Frozen Reverb</h2>
            <p>
              Frozen Reverb is a unique audio effect plugin combining lush reverb
              and precise delay. With intuitive controls, it offers endless
              possibilities for spatial sound design, perfect for ambient and
              experimental productions.
            </p>
          </div>
          <div className="purchase-container">
            <DownloadButton text="Download Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plugin;