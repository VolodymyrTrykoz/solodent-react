import React from 'react';
import Greeting from './greeting/';
import Services from './services/';
import Benefits from './benefits';
import HomeAbout from './home-about';
import OurTeam from './our-team';
import OneStep from './one-step'
import HomeContacts from './home-contacts';

const Home = () => {
    return(
        <>
            <Greeting />
            <Services />
            <Benefits />
            <HomeAbout />
            <OurTeam />
            <OneStep />
            <HomeContacts />
        </>
    )
};

export default Home;
