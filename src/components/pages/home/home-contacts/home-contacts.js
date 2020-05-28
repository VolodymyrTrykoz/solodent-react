import React, { Component } from 'react';
import WorkingHours from '../../../common/working-hours';
import arrow from '../../../../assets/arrow.svg';
import FullMap from './map';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { inject, observer } from 'mobx-react';

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
  );
};

@inject('store')
@observer
class HomeContacts extends Component {
  kyiv = { lat: 50.4477185, lng: 30.6732418 };
  brovary = { lat: 50.5093882, lng: 30.7928073 };

  setMainLocation = (city) => {
    this.props.store.setUserLocation(city);
  };

  render() {
    const { location } = this.props.store;

    return (
      <div className="contacts">
        <div className="container">
          <div className="contacts-wrapper">
            <h2 className="title">Наші контакти</h2>
            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <FullMap
                  location={location === 'kyiv' ? this.kyiv : this.brovary}
                />
              </div>
              <div className="col-lg-4 col-sm-12">
                <Accordion activeKey={location === 'kyiv' ? '0' : '1'}>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      onClick={() => this.setMainLocation('kyiv')}
                    >
                      <div className="row align-items-center">
                        <div className="col-10">
                          <p className="city">Київ</p>
                          <p className="street">вул. Макаренка 1а</p>
                        </div>
                        <div className="col-2">
                          <div className={location === 'kyiv' ? 'active' : ''}>
                            <img src={arrow} alt="arrow" />
                          </div>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <AccordionBody />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      onClick={() => this.setMainLocation('brovary')}
                    >
                      <div className="row align-items-center">
                        <div className="col-10">
                          <p className="city">Бровари</p>
                          <p className="street">вул. Гагаріна 22</p>
                        </div>
                        <div className="col-2">
                          <div
                            className={location === 'brovary' ? 'active' : ''}
                          >
                            <img src={arrow} alt="arrow" />
                          </div>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <AccordionBody />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContacts;
