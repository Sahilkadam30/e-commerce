import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import PhoneIcon from '@mui/icons-material/Phone';
import image1 from '../../assets/images/image1.svg';

const Nav = () => {
    return(
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-sm-3 part1'>
                        <button className='bg-g text-white'> BROWSE ALL CATEGORIES <ArrowDropDownIcon/></button>
                    </div>

                    <div className='col-sm-7 part2 '>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Button><Link>Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Vendors</Link></Button>
                                </li>
                                <li className='list-inline-item '>
                                    <Button><Link>Mega menu <KeyboardArrowDownTwoToneIcon/> </Link></Button>
                                    <div className='dropdown_menu megaMenu w-100'>
                                    <div className="dropdown-menu">
                                    <div className="menu-content">
                                        <div className="menu-section">
                                        <h3 className="menu-title">Fruit & Vegetables</h3>
                                        <ul className="menu-list">
                                            <li><Link to="">Meat & Poultry</Link></li>
                                            <li><Link to="">Fresh Vegetables</Link></li>
                                            <li><Link to="">Herbs & Seasonings</Link></li>
                                            <li><Link to="">Cuts & Sprouts</Link></li>
                                            <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                            <li><Link to="">Packaged Produce</Link></li>
                                        </ul>
                                        </div>
                                        <div className="menu-section">
                                        <h3 className="menu-title">Breakfast & Dairy</h3>
                                        <ul className="menu-list">
                                            <li><Link to=" ">Milk & Flavored Milk</Link></li>
                                            <li><Link to=" ">Butter and Margarine</Link></li>
                                            <li><Link to=" ">Egg Substitutes</Link></li>
                                            <li><Link to=" ">Marmalades</Link></li>
                                            <li><Link to=" ">Sour Cream</Link></li>
                                            <li><Link to=" ">Cheese</Link></li>
                                        </ul>
                                        </div>
                                        <div className="menu-section">
                                        <h3 className="menu-title">Meat & Seafood</h3>
                                        <ul className="menu-list">
                                            <li><Link to=" ">Breakfast Sausage</Link></li>
                                            <li><Link to=" ">Dinner Sausage</Link></li>
                                            <li><Link to=" ">Chicken</Link></li>
                                            <li><Link to=" ">Sliced Deli Meat</Link></li>
                                            <li><Link to=" ">Wild Caught Fillets</Link></li>
                                            <li><Link to=" ">Crab and Shellfish</Link></li>
                                        </ul>
                                        </div>
                                        <div className="menu-image-section">
                                            <img src={image1} className="image1" />
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Pages <KeyboardArrowDownTwoToneIcon/> </Link>
                                    </Button>

                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/about">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/about">Login</Link></Button></li>
                                            <li><Button><Link to="/about">Register</Link></Button></li>
                                            <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="/about">Reset Password</Link></Button></li>
                                            <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/about">Terms of Services</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phno d-flex align-items-center ml-auto'>
                        <span><PhoneIcon/></span>
                            <div className='info ml-3'>
                                <h3 className='text-g mb-0'>862605xxxx </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Nav;

