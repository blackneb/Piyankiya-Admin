import React from 'react'
import '../../styles/style.css'
import ClotheBox from '../../cards/ClotheBox'
import Break from '../break/Break'


const Home = () => {
  return (
    <div>
      <Break/>
      <div className='homewo'>
        <div className='homewoname'>
        <h1>For Women</h1>
        </div>
        <div className='homewoboxes'>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
        </div>
      </div>
      <Break/>
      <div className='homewo'>
        <div className='homewoboxes'>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
        </div>
        <div className='homewonname'>
        <h1>For Men</h1>
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewonname'>
        <h1>For Occasions</h1>
        </div>
        <div className='homewoboxes'>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
        </div>
      </div>
      <Break/>
      <div className='homewo'>
        <div className='homewoboxes'>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
        </div>
        <div className='homewonname'>
        <h1>For Kids</h1>
        </div>
      </div>
      <Break/>
    </div>
  )
}

export default Home
