import React from "react";
import "../styles/plugin.css";
import ScrollAnimation from "../hooks/ScrollAnimation";
import hangDreamImage from "../images/HangDream.png";
import DownloadButton from './DownloadButton';


function Plugin() {
  return (
    <section className="plug-in">
      
        <div className="container-plug-in">
        <ScrollAnimation>
          <img
            src={hangDreamImage}
            alt="Plug-in"
            className="image-transition"
          />
          </ScrollAnimation>
        </div>

        <div className="container-plug-in bottom-container">
        <ScrollAnimation>
          <div className="description-container">
            <p>
              Hang Drum Kontakt library offers a beautifully captured digital
              recreation of the Hang Drum, recorded at God Knows Studios. Using
              premium microphones like the Coles 4038 and AKG C414 XLS, this
              plugin brings the instrument’s unique tones into your DAW with
              stunning realism. <br /> Perfect for composers and producers, it
              integrates seamlessly with any Digital Audio Workstation, providing
              versatile controls for mic positioning and tonal adjustments.
              Whether for ambient soundscapes or cinematic scores, Lavi’s Hang
              Drum plugin adds an organic, expressive layer to your music,
              inspiring creativity in every project.
            </p>
          </div>
          <div className="purchase-container">
            <DownloadButton /> 
          </div>
          </ScrollAnimation>
        </div>
    </section>
  );
}

export default Plugin;