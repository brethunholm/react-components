/* eslint-disable react/prop-types */
import React from 'react';

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading..</div>;
  }
  return <div>{video.snippet.title}</div>;
}
