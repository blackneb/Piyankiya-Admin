import React,{useState} from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';
import menu from './menu.png';
import close from "./close.png";
import Men from "../icons/men.png";
import Home from "../icons/home.png";
import Women from "../icons/woman.png";
import Contact from "../icons/contact.png";
import Kids from "../icons/kids.png";
import About from "../icons/about.png";
import Occasion from "../icons/group.png";

const Navbar = () => {

  const[isMobile,setIsMobile]=useState(false);
  return (
      <nav className='navbar'>
          <h3 className='logo'>PIYANKIYA</h3>
          <ul className={isMobile? "nav-links-mobile" : "nav-li"} onClick={()=>setIsMobile(false)}>
            <div className='mobilediv'>
            <Link  to="/" className='links'>
                  <div className='naviconsmain'>
                    <img src={Home} alt="" className='social-size' />
                    <li className='naviconlabel'>Home</li>
                  </div>
                </Link>
                <Link  to="/men" className='links'>
                  <div className='naviconsmain'>
                    <img src={Men} alt="" className='social-size' />
                    <li className='naviconlabel'>Men</li>
                  </div>
                </Link>
                <Link  to="/women" className='links'>
                  <div className='naviconsmain'>
                    <img src={Women} alt="" className='social-size' />
                    <li className='naviconlabel'>Women</li>
                  </div>
                </Link>
                <Link  to="/kids" className='links'>
                  <div className='naviconsmain'>
                    <img src={Kids} alt="" className='social-size' />
                    <li className='naviconlabel'>Kids</li>
                  </div>
                </Link>
                <Link  to="/occasion" className='links'>
                  <div className='naviconsmain'>
                    <img src={Occasion} alt="" className='social-size' />
                    <li className='naviconlabel'>Occasion</li>
                  </div>        
                </Link>
                <Link  to="/additems" className='links'>
                  <div className='naviconsmain'>
                    <img src={Occasion} alt="" className='social-size' />
                    <li className='naviconlabel'>Add Items</li>
                  </div>        
                </Link>
                <Link  to="/viewbooked" className='links'>
                  <div className='naviconsmain'>
                    <img src={Occasion} alt="" className='social-size' />
                    <li className='naviconlabel'>View Booked</li>
                  </div>        
                </Link>
                <Link  to="/measurement/new-measurement" className='links'>
                  <div className='naviconsmain'>
                    <img src={Occasion} alt="" className='social-size' />
                    <li className='naviconlabel'>Measurement</li>
                  </div>        
                </Link>
                <Link  to="/account" className='links'>
                  <div className='naviconsmain'>
                    <img src={Occasion} alt="" className='social-size' />
                    <li className='naviconlabel'>My account</li>
                  </div>        
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
