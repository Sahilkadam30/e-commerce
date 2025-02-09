import React from 'react';
import '../header/header.css';
import logo from '../../assets/images/logo1.PNG';


const Header = () => {
  return(
    <>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <img src={logo} className='logo1' />
                </div>

                <div className="col-sm-5">
                <div className="headerSearch d-flex align-items-center">
                    <div className='selecrdrop cursor'>
                        All Categories
                    </div>
                    <div className='search'>
                        <input type="text" />
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default Header;
