import React from 'react'
import '../images/portrait.png';  // Adjusted path to reach the image from components folder
import '../styles/about.css'

const About = () => {
  return (
    <div className="content" id="about">
    <div className="about-row">
    <img className="about-img" src={require('../images/portrait.png')} alt="portrait" />
      <div className="about-text">
        <small>Yuval Lavi</small>
        <h1>Film Composer</h1>
        <p>
          <span className="highlight" >Yuval Lavi</span> is a classically and contemporary trained composer, and
          producer for visual media based in Los Angeles. Due to his early
          introduction to music and professional training in film-scoring,
          Lavi can completely adapt to all kinds of genres in music and
          visual media. For Lavi, visual media and music are unequivocally
          intertwined as a story is rarely completely told without the
          other. In his practice he often uses music to capture moments,
          embodying emotions in time, not only through sound but through all
          senses. The simultaneous juxtaposition of both harmony and melody,
          as well as shadows and light, simply encapsulates the world around
          us and allows for a truly uniquely powerful experience.
        </p>
      </div>
    </div>
  </div>
    )
}

export default About;