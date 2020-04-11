import React from 'react';
import OurTeamList from './our-team-list'

const OurTeam = () => {

  return(
      <div className="our-team">
          <div className="our-team-wrapper">
              <div className="container">
                  <h2 className="title">Співробітники - наша особлива гордість</h2>
              </div>
              <OurTeamList/>
          </div>
      </div>
  )
};

export default OurTeam;