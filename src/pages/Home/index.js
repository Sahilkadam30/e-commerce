import React from 'react';
import Slider from './slider/index';
import CatSlider from '../../component/catslider';
import './style.css';

import Product from '../../component/product';
import Banners from '../../component/banner';
const Home =()=>{
    return (
        <>
            <Slider/>
            <CatSlider/>

            <Banners/>

            <section className='homeproducts'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                        <ul className='list list-inline ml-auto filtertab'>
                            <li className='list-inline-item'>
                                <a className='cursor'>All</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Milk & Dairies</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Coffes & Teas</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Pet Foods</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Meats</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Vegetables</a>
                            </li>
                            <li className='list-list-inline'>
                                <a className='cursor'>Fruits</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='row productrow'>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                        <div className='item'>
                            <Product/>
                        </div>
                    </div>











                </div>
            </section>
        </>

    )
}

export default Home;