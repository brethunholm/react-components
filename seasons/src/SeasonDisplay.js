import './SeasonDisplay.css';
import React from 'react';
// import styled from 'styled-components';

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

// const StyledSeason = styled.div`
//   display: grid;
//   justify-items: center;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   background-image: linear-gradient(to bottom right, red, yellow);
//   h1 {
//     font-size: 80px;
//     text-shadow: 2px 2px #ff0000;
//     color: white;
//   }
//   .github icon {
//     font-size: 25px;
//   }
// `;

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
