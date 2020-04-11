import React, {useState} from 'react';
import WorkingHours from '../../../common/working-hours';
import FullMap from './map';

const HomeContacts = () => {
  const kyiv =    { lat: 50.4477185, lng: 30.6732418 };
  const brovary = { lat: 50.5093882, lng: 30.7928073 };
  const [location, setLocation] = useState(kyiv);
  return(
      <div className="contacts">
          <div className="container">
              <div className="contacts-wrapper">
                  <h2 className="title">Наші контакти</h2>
                  <div className="row">
                      <div className="col-lg-4 col-sm-12">
                          <div className="contacts-item">
                              <div className="row">
                                  <div className="col-10">
                                      <p className="sub-title">Київ</p>
                                      <p className="sub-title sub-title--sm">вул. Макаренка 1а</p>
                                  </div>
                                  <div className="col-2">
                                      <button
                                          onClick={()=>setLocation(kyiv)}
                                      >
                                          <i className="fa fa-chevron-up" aria-hidden="true"></i></button>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col contacts-details">
                                      <WorkingHours />
                                  </div>
                                  <div className="col contacts-details">
                                      <a href="tel:+38098-507-19-88" className="phone">+38 (098) 507 19 88</a>
                                  </div>
                              </div>
                          </div>
                          <div className="contacts-item">
                              <div className="row">
                                  <div className="col-10">
                                      <p className="sub-title">Бровари</p>
                                      <p className="sub-title sub-title--sm">вул.Гагаріна 22</p>
                                  </div>
                                  <div className="col-2">
                                      <button
                                          onClick={()=>setLocation(brovary)}
                                      >
                                      <i className="fa fa-chevron-down" aria-hidden="true"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-12">
                          <FullMap
                              location={location}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
};

export default HomeContacts;