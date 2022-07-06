import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/style.css'
import photo from '../Images/imagetwo.jpg'

const ClotheBox = () => {
  return (
    <div className='mainbox'>
      <div className='container'>
        <div className='card'>
        <img src={photo} alt='' className="pic"/>
        </div>
        <div className='intro'>
          <h5 className='details'>Name</h5>
          <div className='but'>
            <Link  to="/detailed" className='detailsbut'>
              <li className='linkdetails'><h5 className='detailsbut'>View</h5></li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClotheBox
