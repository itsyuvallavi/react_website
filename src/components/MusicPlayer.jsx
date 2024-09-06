import React, { useState, useRef, useCallback, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import CloseIcon from "@mui/icons-material/Close";
import '../styles/player.css';

const MusicPlayer = ({ tracks = [], initialTrackIndex = 0, isVisible, onClose }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(initialTrackIndex);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    // Function to load the selected track and update the track information
    const loadTrack = useCallback(
        (index) => {
            const audioElement = audioRef.current;
            if (audioElement && tracks.length > 0) {
                setCurrentTrackIndex(index);  // Update the current track index
                console.log("Loading track:", tracks[index].url);
                audioElement.src = tracks[index].url;  // Set the track URL
                audioElement.load();  // Load the track into the audio element

                audioElement.onloadedmetadata = () => {
                    setDuration(audioElement.duration);  // Set the total duration of the track
                    console.log('Duration loaded:', audioElement.duration);
                    audioElement.play().catch((error) => {
                        console.error("Playback error:", error);
                    });
                    setIsPlaying(true);  // Set the player to "playing" state
                };
            }
        },
        [tracks]
    );

    // Function to toggle between play and pause
    const playPauseTrack = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            if (isPlaying) {
                audioElement.pause();  // Pause the track
            } else {
                audioElement.play().catch((error) => {
                    console.error("Playback error:", error);
                });
            }
            setIsPlaying(!isPlaying);  // Toggle the play state
        }
    };

    // Function to close the player and reset the track info
    const closePlayer = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.pause();  // Pause the track
            audioElement.currentTime = 0;  // Reset the track to the beginning
        }
        setIsPlaying(false);  // Set play state to false
        setProgress(0);  // Reset progress
        setCurrentTime(0);  // Reset current time
        setDuration(0);  // Reset duration
        onClose();  // Trigger the onClose function to hide the player
        console.log("Player closed and reset");  // Log when the player is closed
    };

    // Function to update the progress bar and current time while the track is playing
    const updateProgress = useCallback(() => {
        const audioElement = audioRef.current;
        if (audioElement && !audioElement.paused) {
            const progressValue = (audioElement.currentTime / audioElement.duration) * 100;  // Calculate progress percentage
            setProgress(progressValue || 0);  // Update the progress bar
            setCurrentTime(audioElement.currentTime);  // Update the current time
        }
    }, []);

    // Function to format time into mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;  // Format minutes and seconds
    };

    // Function to seek within the track when the progress bar is clicked
    const seekTrack = (event) => {
        const audioElement = audioRef.current;
        if (audioElement && audioElement.duration) {
            const progressBar = event.currentTarget;
            const seekTime = (event.nativeEvent.offsetX / progressBar.offsetWidth) * audioElement.duration;  // Calculate seek time
            audioElement.currentTime = seekTime;  // Update the current time of the track
        }
    };

    // Add an event listener to update the progress and time while the track is playing
    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement && isVisible) {
            console.log("Adding timeupdate listener");
            audioElement.addEventListener("timeupdate", updateProgress);  // Update progress every time the current time changes
            return () => {
                console.log("Removing timeupdate listener");
                audioElement.removeEventListener("timeupdate", updateProgress);  // Clean up event listener when the component unmounts or visibility changes
            };
        }
    }, [updateProgress, isVisible]);

    // Reset the track info when a new track is loaded or the player is closed
    useEffect(() => {
        if (isVisible && tracks.length > 0) {
            loadTrack(currentTrackIndex);  // Load the selected track
            setProgress(0);  // Reset the progress
            setCurrentTime(0);  // Reset the current time
            setDuration(0);  // Reset the duration
            console.log("Track loaded and progress reset");  // Log track loading and reset
        }
    }, [isVisible, tracks, loadTrack, currentTrackIndex]);

    // If the player is not visible or there are no tracks, don't render the player
    if (!isVisible || tracks.length === 0) {
        return null;
    }

    return (
        <div className="player-bar">
            <div className="player-bar-content">
                {/* Display track information (title) */}
                <div className="track-info">
                    <h2>{tracks[currentTrackIndex]?.title || "No Track"}</h2>  {/* Show the current track title */}
                </div>

                {/* Progress bar and seek functionality */}
                <div className="progress-bar-container" onClick={seekTrack}>
                    <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: '#009688' }}></div>
                </div>

                {/* Display current time and total duration */}
                <div className="progress-counter">{formatTime(currentTime)} / {formatTime(duration)}</div>

                {/* Play/Pause button */}
                <div className="controls">
                    <button onClick={playPauseTrack}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}  {/* Toggle between play and pause icons */}
                    </button>
                </div>

                {/* Close button to close the player */}
                <button className="close-button" onClick={closePlayer}>
                    <CloseIcon />
                </button>

                {/* Audio element for playback */}
                <audio ref={audioRef} />
            </div>
        </div>
    );
};

export default MusicPlayer;