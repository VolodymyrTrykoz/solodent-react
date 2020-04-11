import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OurTeamItem from './our-team-item'
import ourTeamInfo from './our-team-info';

const OurTeamList = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
        ]
    };
    return(
        <div className="our-team">
            <Slider {...settings}>
                {
                    ourTeamInfo.map(({id, img, name, location, qualification}) => {
                    return (
                        <OurTeamItem
                            key={id}
                            img={img}
                            name={name}
                            location={location}
                            qualification={qualification}
                        />
                    )
                }) }
            </Slider>
        </div>
    )
};

export default OurTeamList;