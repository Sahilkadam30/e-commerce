import React, { useState, useEffect, useRef } from 'react';
import '../header/header.css';
import logo from '../../assets/images/logo1.PNG';
import Select from '../selectdrop/select';
import iconCompare from '../../assets/images/output.svg';
import iconWishlist from '../../assets/images/wishlist.svg';
import iconCart from '../../assets/images/cart.svg';
import iconAccount from '../../assets/images/account.svg';
import Button from '@mui/material/Button';
import { FaUser, FaClipboardList, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import Nav from '../nav/nav';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Function to close dropdown on button click
  const handleButtonClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} className="logo1" alt="Logo" />
            </div>

            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select />
                <div className="search">
                  <input type="text" placeholder="Search for items.." />
                </div>
              </div>
            </div>

            <div className="col-sm-5 d-flex align-item-center">
              <ul className="list list-inline mb-0 headerTabs">
                <li className="list-group-horizontal">
                  <span>
                    <img src={iconCompare} className="compareicon" />
                    <span className="badge bg-success rounded-circle">3</span> Compare
                  </span>
                </li>

                <li className="list-group-horizontal">
                  <span>
                    <img src={iconWishlist} className="wishlisticon" />
                    <span className="badge bg-success rounded-circle">3</span> Wishlist
                  </span>
                </li>

                <li className="list-group-horizontal">
                  <span>
                    <img src={iconCart} className="carticon" />
                    <span className="badge bg-success rounded-circle">3</span> Cart
                  </span>
                </li>

                <li className="list-group-horizontal" ref={dropdownRef}>
                  <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={iconAccount} className="accounticon" /> Account
                  </span>
                  {isDropdownOpen && (
                    <ul className="dropdownmenu">
                      <li>
                        <Button onClick={handleButtonClick} startIcon={<FaUser />}>
                          My Account
                        </Button>
                      </li>
                      <li>
                        <Button onClick={handleButtonClick} startIcon={<FaClipboardList />}>
                          Order Tracking
                        </Button>
                      </li>
                      <li>
                        <Button onClick={handleButtonClick} startIcon={<FaHeart />}>
                          My Wishlist
                        </Button>
                      </li>
                      <li>
                        <Button onClick={handleButtonClick} startIcon={<FaCog />}>
                          Setting
                        </Button>
                      </li>
                      <li>
                        <Button onClick={handleButtonClick} startIcon={<FaSignOutAlt />}>
                          Sign out
                        </Button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Nav/>
    </>
  );
};

export default Header;
