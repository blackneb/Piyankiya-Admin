import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../styles/style.css'
import photo from '../Images/imagetwo.jpg'

const ClotheBox = (props) => {
  const [name,setname] = useState(props.name);
  const [price,setprice] = useState(props.price);
  const [description,setdescription] = useState(props.description);
  const [photos,setphotos] = useState(props.photo);
  const [id,setid] = useState(props.id);
  const [age,setage]=useState(props.age);
  const [gender,setgender]=useState(props.gender);
  const [types,settypes]=useState(props.types);
  return (
    <div className='mainbox'>
      <div className='container'>
        <div className='card'>
        <img src={photos} alt='' className="pic"/>
        </div>
        <div className='intro'>
          <h5 className='details'>{props.name}</h5>
          <div className='but'>
            <Link  to={`/detailed/${props.id}`}  state={{fname:name,fphoto:photos,fprice:price,fdescription:description, fid:id, fage:age, fgender:gender, ftypes:types }} className='detailsbut'>
              <li className='linkdetails'><h5 className='detailsbut'>View</h5></li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClotheBox
