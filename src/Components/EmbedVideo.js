import React from 'react';
import PropTypes from "prop-types";

const EmbedVideo = ({ embedId }) => {
  return (
    <div className="me-video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Youtube"
    />
  </div>
  )
}

EmbedVideo.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default EmbedVideo;