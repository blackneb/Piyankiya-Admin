import React from 'react'
import Photo from '../../Images/imageone.jpg'
import '../../styles/style.css'

const Detailed = () => {
  return (
    <div>
        <div className='detailedmain'>
          <div className='detailedfirst'>
            <img src={Photo} alt='' className='detailedpic'/>
          </div>

          <div className='detailedsecond'>
            <h2 className='conlabel'>Detailed View</h2>
            <h3 className='conlabel'>Name: </h3>
            <h3 className='conlabel'>Price: </h3>
            <h3 className='conlabel'>Description: </h3>
            <h3 className='conlabel'>Type: </h3>
          </div>
          <div className='detailedthird'>
            <form>
              <label className='conlabel'>Name</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>E-mail</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Phone</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Quantity</label><br/>
              <input className='coninput'/><br/>
              <input className='submail' type="submit" value="Book"></input>
            </form>
          </div>


        </div>
    </div>
  )
}

export default Detailed