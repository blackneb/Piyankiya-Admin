import React from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'

const Men = () => {
  return (
    <div>
      <Break/>
      <h1>Men Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
          <ClotheBox/>
        </div>
      </div>
      <Break/>
    </div>
  )
}

export default Men
