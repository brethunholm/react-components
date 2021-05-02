import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: `Let's hit the beach! 😎 🌞`,
    iconName: 'sun',
  },
  winter: {
    text: `Burr! It's chilly! 🥶 ☃️`,
    iconName: 'snowflake',
  },
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
}

/* eslint-disable react/prop-types */
export default function SeasonDisplay(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
}
