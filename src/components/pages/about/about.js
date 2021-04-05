import React, { useEffect } from 'react';
import HomeAbout from '../home/home-about';
import ourTeamInfo from '../home/our-team/our-team-info';
import OurTeamItem from '../home/our-team/our-team-item';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about__inner-wrapper">
        <div className="container">
          <HomeAbout />
        </div>
      </div>
      <div className="container">
        <div id="our-team" className="our-team">
          <h2 className="title">Наші фахівці</h2>
          <div className="our-team__list">
            {ourTeamInfo.map(({ id, name, location, qualification, description }) => (
              <div className="our-team__item" key={id}>
                <OurTeamItem
                  key={id}
                  img={`/doctors/doctor${id}.jpg`}
                  name={name}
                  location={location}
                  qualification={qualification}
                  description={description}
                />
              </div>
            ))}
          </div>
        </div>
      </div></>
  );
};

export default About;
