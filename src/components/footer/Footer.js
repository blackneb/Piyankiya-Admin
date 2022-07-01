import React from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';
import Telegram from '../icons/telegram.png';
import Twitter from '../icons/twitter.png';
import Youtube from '../icons/youtube.png';


const Footer = () => {
  return (
    <div>
      <div className='main-footer'>
        <div className='footer-one'>
          <h4>About Us</h4>
          <ul>
            <li>E-Mail: company@gmail.com</li>
            <li>Phone number: +251913124578</li>
            <li>P-BOX: 1256</li>
            <li>Address: Addis Ababa, Ethiopia</li>
            <li>FAX: 2894</li>
          </ul>
        </div>
        <div className='footer-two'>
          <h4>Quick Links</h4>
          <ul>
            <Link  to="/" className='linkstwo'>
              <li>Home</li>
            </Link>
            <Link  to="/men" className='linkstwo'>
              <li>Men</li>
            </Link>
            <Link  to="/women" className='linkstwo'>
              <li>Women</li>
            </Link>
            <Link  to="/kids" className='linkstwo'>
              <li>Kids</li>
            </Link>
            <Link  to="/occasion" className='linkstwo'>
              <li>Occasion</li>
            </Link>
            <Link  to="/contact" className='linkstwo'>
              <li>Contact</li>
            </Link>
            <Link  to="/about" className='linkstwo'>
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className='footer-two'>
          <h4>Customer Support</h4>
          <ul>
            <li>+251912131415</li>
            <li>+251998979695</li>
            <li>Customersupport@gmail.com</li>
            <li>Telegram: @customersupport</li>
          </ul>
        </div>
        <div className='social-medias'>
          <h4>Follow us on Social medias</h4>
          <img src={Facebook} alt='' className="social-size"/>
          <img src={Instagram} alt='' className="social-size"/>
          <img src={Youtube} alt='' className="social-size"/>
          <img src={Telegram} alt='' className="social-size"/>
          <img src={Twitter} alt='' className="social-size"/>

        </div>
      </div>
    </div>
  )
}

export default Footer
