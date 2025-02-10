import React from 'react'
import './style.css';
import Slider from 'react-slick';

const CatSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrow: true
      };


    return (
        <>
            <div className='catslidersection'>
                <div className='container-fluid'>
                    <h2 className='hd'>Featured Categories</h2>
                    <Slider {...settings} className='cat_slider_main'>
                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src=''/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider
