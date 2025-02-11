import React, { useState } from 'react'
import './style.css';
import Slider from 'react-slick';

const CatSlider = () => {

    const[ itembg, setitembg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fec4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fec4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

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
                    <Slider {...settings} className='cat_slider_main' id='cat_slider_main'>
                        {
                            itembg.length!==0 && itembg.map((item, index) => {
                                return(
                                    <div className='item' >
                            <div className='info' style={{background: item}}>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1J5cxQpjqZP6tGerW6UsWkLYEQg8NlOelA&s' className='image'/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                                )
                                })
                        }
                        

                      {/* <div className='item'>
                            <div className='info'>
                                <img src='https://img.freepik.com/premium-photo/cup-coffee-white-background_763111-7837.jpg'className='image'/>
                                <h5>Coffe & Tea</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://img.freepik.com/premium-photo/strawberry-white-background_241146-2554.jpg' className='image'/>
                                <h5>Strawberry</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4rwuXY6YrRRtpyk2KALiSUKgNCjzjnN-9okYg_hZ9D4zhj2gQaTRKNwQuUQCGOdnys&usqp=CAU' className='image'/>
                                <h5>Vegetables</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://img.freepik.com/premium-photo/square-chocolate-wafer-biscuits-isolated-white-background-bakery-snack_34435-5402.jpg' className='image'/>
                                <h5>Snack</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://media.istockphoto.com/id/925389178/photo/red-apple-fruit-with-green-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=_8d-RRR3BX36MwIOBZuN-bV-wp02C0WNCEo7fp0hqhA=' className='image'/>
                                <h5>Red Apple</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://st.depositphotos.com/1002351/1462/i/450/depositphotos_14623689-stock-photo-ripe-peach-fruit.jpg' className='image'/>
                                <h5>Peach</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovuYi2Jz_yRsnDojXGE_9c4U2ibhWnQrKhQ&s' className='image'/>
                                <h5>Organic Kiwi</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://thumbs.dreamstime.com/b/black-plum-isolated-white-background-74583652.jpg' className='image'/>
                                <h5>Black Plum</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='info'>
                                <img src='https://img.freepik.com/premium-psd/fresh-custard-apple-4k-hd-isolated-white-transparent-background_1262886-10135.jpg' className='image'/>
                                <h5>Custard apple</h5>
                                <p>26 items</p>
                            </div>
                        </div>*/}
                        
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider
