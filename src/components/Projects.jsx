import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData';
import MusicPlayer from './MusicPlayer';
import '../styles/projects.css';

const Projects = () => {
  const [selectedTracks, setSelectedTracks] = useState(() => {
    const saved = localStorage.getItem('selectedTracks');
    return saved ? JSON.parse(saved) : [];
  });
  const [isPlayerVisible, setIsPlayerVisible] = useState(() => {
    return localStorage.getItem('isPlayerVisible') === 'true';
  });
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    return parseInt(localStorage.getItem('currentTrackIndex') || '0', 10);
  });

  useEffect(() => {
    localStorage.setItem('selectedTracks', JSON.stringify(selectedTracks));
    localStorage.setItem('isPlayerVisible', isPlayerVisible);
    localStorage.setItem('currentTrackIndex', currentTrackIndex.toString());
  }, [selectedTracks, isPlayerVisible, currentTrackIndex]);

  const handleAlbumClick = (tracks) => {
    console.log("Album clicked, tracks:", tracks);
    setSelectedTracks(tracks);
    setCurrentTrackIndex(0);
    setIsPlayerVisible(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerVisible(false);
  };

  return (
    <section className="posts" id="projects">
      <div className="row album-gallery">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="post album"
            onClick={() => handleAlbumClick(project.tracks)}
          >
            <img src={project.image} alt={project.album} />
            <div className="album-info">
              <h3>{project.album}</h3>
              <p>{project.style}</p>
            </div>
          </div>
        ))}
      </div>
      <MusicPlayer 
        tracks={selectedTracks}
        initialTrackIndex={currentTrackIndex}
        isVisible={isPlayerVisible}
        onClose={handleClosePlayer}
      />
    </section>
  );
};

export default Projects;