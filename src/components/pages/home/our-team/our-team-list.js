import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { inject, observer } from 'mobx-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurTeamItem from './our-team-item';
import ourTeamInfo from './our-team-info';
import longArrow from '../../../../assets/long-arrow.svg';

@inject('store')
@observer
class OurTeamList extends Component {
  state = {
    currentSlide: 1,
  };
  render() {
    const { currentSlide } = this.state;
    const { store } = this.props;
    const settings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: (index) => {
        this.setState({ currentSlide: index + 1 });
      },
    };

    const team = ourTeamInfo.filter((el) =>
      el.locationId.includes(store.location)
    );

    return (
      <div className="our-team">
        <select
          name="city"
          className="form-control ds-input"
          onChange={(e) => store.setUserLocation(e.target.value)}
          defaultValue="kyiv"
          value={store.location}
        >
          <option value="kyiv">Київ</option>
          <option value="brovary">Бровари</option>
        </select>

        <Slider {...settings}>
          {team.map(({ id, name, location, qualification, description }) => {
            return (
              <OurTeamItem
                key={id}
                img={`/doctors/doctor${id}.jpg`}
                name={name}
                location={location}
                qualification={qualification}
                description={description}
              />
            );
          })}
        </Slider>
        <Link to="/about/#our-team" className="our-team__all-doctors">
          Всі лікарі
          <img src={longArrow} alt="arrow-right" />
        </Link>
        <div className="counter">
          <span>{currentSlide}</span> з {team.length}
        </div>
      </div>
    );
  }
}

export default OurTeamList;

// slidesToShow: 3,
// autoplay: true,
// autoplaySpeed: 0,
// speed: 5000,
// cssEase:'linear',
// infinite: true,
// focusOnSelect: false,
// pauseOnFocus: false,
// pauseOnHover: false,
// touchMove: false,
// centerMode: true,
// variableWidth: true,
