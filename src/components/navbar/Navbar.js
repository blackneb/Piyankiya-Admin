import React,{useState} from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';
import menu from './menu.png';
import close from "./close.png";

const Navbar = () => {

  const[isMobile,setIsMobile]=useState(false);
  return (
      <nav className='navbar'>
          <h3 className='logo'>PIYANKIYA</h3>
          <ul className={isMobile? "nav-links-mobile" : "nav-li"} onClick={()=>setIsMobile(false)}>
            <div className='mobilediv'>
                <Link  to="/" className='links'>
                  <li>Home</li>
                </Link>
                <Link  to="/men" className='links'>
                  <li>Men</li>
                </Link>
                <Link  to="/women" className='links'>
                  <li>Women</li>
                </Link>
                <Link  to="/kids" className='links'>
                  <li>Kids</li>
                </Link>
                <Link  to="/occasion" className='links'>
                  <li>Occasion</li>
                </Link>
                <Link  to="/additems" className='links'>
                  <li>Add Items</li>
                </Link>
                <Link  to="/viewbooked" className='links'>
                  <li>View Booked</li>
                </Link>
                <Link  to="/account" className='links'>
                  <li>My Account</li>
                </Link>
            </div>


          </ul>
          <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
            {isMobile? <img src={close} alt="" className='close-style'/> : <img src={menu} alt="" className='menu-style'/> }
          </button>
      </nav> 
  )
}

export default Navbar
