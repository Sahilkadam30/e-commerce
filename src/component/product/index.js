import React from 'react'
import './style.css';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {
    return(
        <div className='productthumb'>
            <Link>
                <div className='imgwrapper'>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" className='productimg'/>
                </div>
            </Link>

            <div className='info'>
                <span className='d-block catname'>snack</span>
                <h4 className='title'><Link>Seeds of Change Organic , Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <span className='brand d-block text-g'>By <Link className='text-g'>SFood</Link></span>

                <div className='d-flex align-items-center mt-2'>
                    <div className='d-flex align-items-center'>
                        <span className='price'> ₹500.00</span> <span className='oldprice'>₹600.00</span>
                    </div>
                    <button id='btn1' className='bg-g ml-auto'><ShoppingCartOutlinedIcon/> Add</button>
                </div>
            </div>
            
        </div>
    )
}

export default Product;