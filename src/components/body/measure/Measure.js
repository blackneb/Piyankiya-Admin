import React,{useState} from 'react'
import MeasureNew from './MeasureNew'
import ViewMeasured from './ViewMeasured'

const Measure = () => {
    const [checkview, setcheckview] = useState(true);
    const opencheck = (e) =>{
        setcheckview(false);
    }
    const closecheck = (e) =>{
        setcheckview(true);
    }
  return (
    <div>
        <div className='measurecheck'>
            <li className='measurecheckbutton' onClick={closecheck}>Measure New</li>
            <li className='measurecheckbutton' onClick={opencheck}>View Measured</li>
        </div>
        <div>
            {checkview? <MeasureNew/> : <ViewMeasured/>}
        </div>
    </div>
  )
}

export default Measure
