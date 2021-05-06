/* eslint-disable react/prop-types */
import './VideoItem.css';
import React from 'react';

export default function VideoItem({ video }) {
  return (
    <div className="video-item item">
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
