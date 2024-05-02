import React from 'react';
import './Header.css';
import logo from '../../images/amazon_logo.png';
import dropDownImg from '../../images/dropdown_icon.png';
import location from '../../images/location_icon.png';
import searchIcon from '../../images/search_icon.png';
import cartIcon from '../../images/cart_icon.png';
import usFlag from '../../images/us_flag.png';
const Header = () => {
    return (
       <nav>
        <a href="#">
            <img src={logo} width={'100px'} alt="" />
        </a>
        <div className='nav-country'>
        <img src={location} width={'50px'} alt="" />
        <div>
                <p>Deliver To KARTIK</p>
                <h1>Coochbehar 736146</h1>
            </div>
        </div>
        <div className="nav-search">
            <div className="nav-search-category">
                <p>All</p>
                <img src={dropDownImg} height={'12px'}  alt="" />
            </div>
            <input type="text" placeholder="Search Amazon" className="search-input" />
            <img src={searchIcon} className="search-icon" alt="" />
        </div>
        <div className="nav-lang">
            <img src={usFlag} width={"25"} alt="" />
            <p>EN</p>
            <img src={dropDownImg} width={"8"} alt="" />
        </div>

        <div className="nav-account">
            <p>Hello,sign in</p>
            <h1><a href="/signIn.html" target="_blank">Account & Lists <img src={dropDownImg} width={"8"} alt="" /></a></h1>
        </div>
        
        <div className="nav-account">
            <p>Returns</p>
            <h1>& Orders</h1>
        </div>

        <a href="" className="cart-link">
            <img src={cartIcon} width={"35"} alt="" />
            <h4>Cart</h4>
        </a>

       </nav>
    );
};

export default Header;