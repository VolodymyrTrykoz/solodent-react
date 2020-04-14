import React, {useState} from 'react';
import WorkingHours from '../../../common/working-hours';
import FullMap from './map';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const AccordionBody = () => {
    return (
        <div className="row">
            <div className="col contacts-details">
                <WorkingHours />
            </div>
            <div className="col contacts-details">
                <a href="tel:+38098-507-19-88">+38 (098) 507 19 88</a>
            </div>
        </div>
    )
};

const HomeContacts = () => {
  const kyiv =    { lat: 50.4477185, lng: 30.6732418 };
  const brovary = { lat: 50.5093882, lng: 30.7928073 };
  const [location, setLocation] = useState(kyiv);
  const [currentKey, setCurrentKey] = useState('0');

  const setKyivAsMainLocation = () => {
      setCurrentKey('0');
      setLocation(kyiv);
  };

  const setBrovaryAsMainLocation = () => {
      setCurrentKey('1');
      setLocation(brovary);
  };

  const chevron = (key) => {
      return (
          currentKey === key ?
              (
                  <svg className="bi bi-chevron-compact-up" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M7.776 5.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L8 6.56 2.224 9.447a.5.5 0 11-.448-.894l6-3z"
                            clipRule="evenodd"/>
                  </svg>
              ) :
              (
                  <svg className="bi bi-chevron-compact-down" width="2em" height="2em"
                       viewBox="0 0 16 16" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
                            clipRule="evenodd"/>
                  </svg>
              )
      )
  };

  return(
      <div className="contacts">
          <div className="container">
              <div className="contacts-wrapper">
                  <h2 className="title">Наші контакти</h2>
                  <div className="row">
                      <div className="col-lg-4 col-sm-12">
                          <Accordion activeKey={currentKey}>
                              <Card>
                                  <Accordion.Toggle as={Card.Header} eventKey='0'
                                      onClick={() => setKyivAsMainLocation()}
                                  >
                                      <div className="row align-items-center">
                                          <div className="col-10">
                                              <p>Київ</p>
                                              <p>вул. Макаренка 1а</p>
                                          </div>
                                          <div className="col-2">
                                              { chevron('0') }
                                          </div>
                                      </div>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey='0'>
                                      <Card.Body>
                                          <AccordionBody/>
                                      </Card.Body>
                                  </Accordion.Collapse>
                              </Card>
                              <Card>
                                  <Accordion.Toggle as={Card.Header} eventKey='1'
                                        onClick={() => setBrovaryAsMainLocation()}
                                  >
                                      <div className="row align-items-center">
                                          <div className="col-10">
                                              <p>Бровари</p>
                                              <p>вул. Гагаріна 22</p>
                                          </div>
                                          <div className="col-2">
                                              { chevron('1') }
                                          </div>
                                      </div>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey='1'>
                                      <Card.Body>
                                          <AccordionBody/>
                                      </Card.Body>
                                  </Accordion.Collapse>
                              </Card>
                          </Accordion>
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
