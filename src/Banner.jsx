import React from 'react';
import VideoToggle from './VideoToggle.jsx';
import config from './config.js';

function Banner({ isVideoOn, toggleVideo }) {
  return (
    <div className="banner-top">
      <a href={config.basePath}>
        <h1 className="titel">Ronyas</h1>
        <h1 className="titel">Restaurang</h1>
      </a>
      <VideoToggle isVideoOn={isVideoOn} toggleVideo={toggleVideo} />
    </div>
  );
}

export default Banner;