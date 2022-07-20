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
            <li>E-Mail: tsedeymkt@gmail.com</li>
            <li>Phone number: +251913993381</li>
            <li>Address: Addis Ababa, Ethiopia</li>
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
            <Link  to="/additems" className='linkstwo'>
              <li>Add Items</li>
            </Link>
            <Link  to="/viewbooked" className='linkstwo'>
              <li>View Booked Items</li>
            </Link>
          </ul>
        </div>
        
        <div className='social-medias'>
          <h4>Follow us on Social medias</h4>
          <a href='https://facebook.com'><img src={Facebook} alt='' className="social-size"/></a>
          <a href='https://instagram.com'><img src={Instagram} alt='' className="social-size"/></a>
          <a href='https://youtube.com'><img src={Youtube} alt='' className="social-size"/></a>
          <a href='https://telegram.com'><img src={Telegram} alt='' className="social-size"/></a>
          <a href='https://twitter.com'><img src={Twitter} alt='' className="social-size"/></a>          
        </div>
      </div>
    </div>
  )
}

export default Footer
