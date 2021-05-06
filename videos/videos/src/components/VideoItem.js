/* eslint-disable react/prop-types */
import React from 'react';

export default function VideoItem({ video }) {
  return (
    <div className="item">
      <img src={video.snippet.thumbnails.medium.url} alt="" key={video.id} />
      {video.snippet.title}
    </div>
  );
}
