import React from 'react'
import Slider from 'react-slick';
import './index.css';

import slide1 from '../../../assets/images/slider1.png';
import slide2 from '../../../assets/images/slider2.png';

const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrow: true
      };
    return (
        <section className='homeslider'>
            <div className='container-fluid'>
                <Slider {...settings} className='home_slider_main'>
                    <div className='item'> 
                        <img src={slide1} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-4">
                                Don't miss amazing <br/>
                                grocery deals
                            </h2>
                            <p>Sign up for the daily updates</p>

                        </div>
                    </div>
                    <div className='item'> 
                        <img src={slide2} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-4">
                                Fresh groceries <br/>
                                big discounts
                            </h2>
                            <p>Sign up for the daily updates</p>

                        </div>
                    </div>
                </Slider>

            </div>
        </section>
    )
}

export default HomeSlider
