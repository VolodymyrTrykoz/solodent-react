import React from 'react';
import Greeting from './greeting/';
import HomeServices from './home-services';
import Benefits from './benefits';
import HomeAbout from './home-about';
import OurTeam from './our-team';
import OneStep from './one-step';
import HomeContacts from './home-contacts';

const Home = () => {
  return (
    <>
      <Greeting />
      <HomeServices />
      <Benefits />
      <HomeAbout />
      <OurTeam />
      <OneStep />
      <HomeContacts />
    </>
  );
};

export default Home;
