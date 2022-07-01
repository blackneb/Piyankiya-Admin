import React from 'react'
import '../../styles/style.css'
import Photo from '../../Images/imageone.jpg'

const About = () => {
  return (
    <div>
      <div>
        <h1 className='aboutname'>About us</h1>
        <div className='aboutsplit'>
        <div className='aboutimage'>
          <img src={Photo} alt='' className='aboutpic'/>
        </div>
        <div className='about_inner'>
          <p> Habesha kemis is the traditional attire of Habesha women.The ankle length dress is usually 
            worn by Ethiopian and Eritrean women at formal events, holidays and invitations. But it comes 
            in many forms nowadays. It is made of cotton fabric, and typically comes in white, grey or beige 
            shades. Many women also wrap a shawl called a netela around the formal dress. </p>
        </div>
        <div className='detailedobjectives'>
          <div className='detailedmission'>
          </div>
          <div className='detailedvision'>
          </div>
        </div>
        </div>
        <div className='aboutaddmain'>
              <h5 className='aboutadd'>Address: Addis Ababa, Ethiopia </h5>
              <h5 className='aboutadd'>Phone: +251965592630 </h5>
              <h5 className='aboutadd'>E-mail: Tsedeymkt@gmail.com </h5>
            </div>
      </div>
    </div>
  )
}

export default About
