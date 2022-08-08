import React,{useState} from 'react'
import MeasureNew from './MeasureNew'
import ViewMeasured from './ViewMeasured'

const Measure = () => {
    const [checkview, setcheckview] = useState(true);
    const [clickednew,setclickednew] = useState(true);
    const [clicked,setclicked] = useState(false);
    const newcheck = (e) =>{
        setcheckview(true);
        setclicked(false);
        setclickednew(true);
    }
    const viewcheck = (e) =>{
        setcheckview(false);
        setclicked(true);
        setclickednew(false);
    }
  return (
    <div>
        <div className='measurecheck'>
            <li className={clickednew? 'measurecheckbuttonclicked' : 'measurecheckbutton'} onClick={newcheck}>Measure New</li>
            <li className={clicked? 'measurecheckbuttonclicked' : 'measurecheckbutton'} onClick={viewcheck}>View Measured</li>
        </div>
        <div>
            {checkview? <MeasureNew/> : <ViewMeasured/>}
        </div>
    </div>
  )
}

export default Measure
