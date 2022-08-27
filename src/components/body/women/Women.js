import React, {useState} from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";
import { ActionTypes } from '../../../Redux/Constants/ActionTypes';
import { set_clothes } from '../../../Redux/Actions/Actions';
import {useSelector, useDispatch} from 'react-redux';
const Women = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const clothes = useSelector(state => state.clothes.clothes);
  let womenclothe = clothes.filter(clothe => clothe.gfor === 'female');
  if(clothes.length === 0 ){
    axios.get(ActionTypes.BASEURL + "/read.php").then((response) => {
      dispatch(set_clothes(response.data.data));
      setloading(true);
    })
  }
  return (
    <div>
      <Break/>
      <h1>Women Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
        {(()=>{
                    if(womenclothe.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...womenclothe].reverse().map((e) => (
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

export default Women
