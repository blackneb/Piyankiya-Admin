import React from 'react'
import '../../styles/style.css'

const Additems = () => {
  return (
    <div className='additemssec'>
      <div className='additemsmain'>
            <form>
              <label className='conlabel'>Name</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Gender-For</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Age-For</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Photos</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Price</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Description</label><br/>
              <input className='coninput'/><br/>
              <input className='submail' type="submit" value="Add"></input>
            </form>
          </div>
    </div>
  )
}

export default Additems
