// VideoToggle.js
import React from 'react';

const VideoToggle = ({ isVideoOn, toggleVideo }) => {
  return (
    <button 
      className="video-toggle" 
      onClick={toggleVideo}
      aria-label={isVideoOn ? "Turn video off" : "Turn video on"}
    >
      {isVideoOn ? "🎬 Off" : "🎬 On"}
    </button>
  );
};

export default VideoToggle;