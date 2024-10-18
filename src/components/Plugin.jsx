import React, { useEffect, useRef } from "react";
import "../styles/plugin.css";
import hangDreamImage from "../images/HangDream.png";
import frozenReverbImage from "../images/FrozenReverb.png";
import DownloadButtonVST from "./DownloadButtonVST";
import DownloadButtonAU from "./DownloadButtonAU";
import TriangleBackground from "./TriangleBackground";

function Plugin() {
  const pluginRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Capture the current value of pluginRefs.current
    const currentRefs = pluginRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Use the captured value in the cleanup function
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // Empty dependency array

  return (
    <section className="plug-in" id="plugin" ref={sectionRef}>
      <TriangleBackground parentRef={sectionRef} />
      <div className="plugin-container">
        <div className="container-plug-in" ref={(el) => (pluginRefs.current[0] = el)}>
          <div className="plug-in-img">
            <img src={hangDreamImage} alt="Hang Dream Plugin" />
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
            <DownloadButtonVST text="Download Now" />
          </div>
        </div>
        <div className="container-plug-in" ref={(el) => (pluginRefs.current[1] = el)}>
          <div className="plug-in-img">
            <img src={frozenReverbImage} alt="Frozen Reverb Plugin" />
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
            <DownloadButtonAU text="Download Now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plugin;