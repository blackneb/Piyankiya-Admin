import React,{useState} from 'react'
import Break from '../break/Break'
import axios from "axios";
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import {useSelector,useDispatch} from 'react-redux';
import { ActionTypes } from '../../../Redux/Constants/ActionTypes';
import { set_clothes } from '../../../Redux/Actions/Actions';


const Kids = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const clothes = useSelector(state => state.clothes.clothes);
  const kidsclothe = clothes.filter((clothe) => clothe.afor === 'kids');
  if(clothes.length === 0 ){
    axios.get(ActionTypes.BASEURL + "/read.php").then((response) => {
      dispatch(set_clothes(response.data.data));
      setloading(true);
    })
  }

  return (
    <div>
      <Break/>
      <h1>Kids Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
        {(()=>{
                    if(kidsclothe.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...kidsclothe].reverse().map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={ActionTypes.PHOTOURL + e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
      </div>
      <Break/>
    </div>
  )
}

export default Kids
