import React, { useEffect } from 'react';
import HomeServices from '../home/home-services';
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container services">
      <HomeServices />
    </div>
  );
};

export default Services;
