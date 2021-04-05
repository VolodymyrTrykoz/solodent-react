import React from 'react';
import OurTeamList from './our-team-list';

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="our-team-wrapper">
        <div className="container">
          <h2 className="title">
            Наші фахівці
          </h2>
        </div>
        <OurTeamList />
      </div>
    </div>
  );
};

export default OurTeam;
