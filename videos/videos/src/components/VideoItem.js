/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import './VideoItem.css';
import React from 'react';

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
        key={video.id}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">A video about something</div>
      </div>
    </div>
  );
}
