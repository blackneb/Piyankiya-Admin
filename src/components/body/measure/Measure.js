import React,{useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import MeasureNew from './MeasureNew'
import ViewMeasured from './ViewMeasured'

const Measure = () => {
    const [checkview, setcheckview] = useState(true);
   

   const location= useLocation()
   const navigation=useNavigate()


   useEffect(() => {
    if(checkview){
        navigation(`/measurement/new-measurement`)
    }else{
        navigation(`/measurement/view-measurement`)
    }

   }, [checkview])


    useEffect(() => {
      const loc=location.pathname
       const path=loc.split("/")[2]
       console.log(path)
       if(path){
        if(path==="new-measurement")
            setcheckview(true)
       
       else if(path==="view-measurement")
         setcheckview(false)}
        
    }, [location])


  return (
    <div>
        <div className='measurecheck'>
            <li className={checkview? 'measurecheckbuttonclicked' : 'measurecheckbutton'} onClick={(e)=>setcheckview(true)}>Measure New</li>
            <li className={!checkview? 'measurecheckbuttonclicked' : 'measurecheckbutton'} onClick={(e)=>setcheckview(false)}>View Measured</li>
        </div>
        <div>
            {checkview? <MeasureNew/> : <ViewMeasured/>}
        </div>
    </div>
  )
}

export default Measure
