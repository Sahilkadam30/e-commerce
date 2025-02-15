import React from 'react'
import './style.css';

import banner1 from '../../assets/images/banner1.svg';
import banner2 from '../../assets/images/banner2.svg';
import banner3 from '../../assets/images/banner3.svg';
import banner4 from '../../assets/images/banner4.svg';

const Banners = () => {
    return (
    <div className="bannersection">
        <div className="container-fluid">
            <div className='row'>
                <div className='col'>
                    <div className='box'>
                        <img src={banner4} className='w-100 transition' />

                    </div>
                </div>

                <div className='col'>
                    <div className='box'>
                        <img src={banner2} className='w-100 transition' />

                    </div>
                </div>

                <div className='col'>
                    <div className='box'>
                        <img src={banner3} className='w-100 transition' />

                    </div>
                </div>

            </div>
        </div>
    </div>
    )
    
}
export default Banners;