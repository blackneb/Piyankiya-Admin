import React,{useState} from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { ActionTypes } from '../../../Redux/Constants/ActionTypes';
import { set_clothes } from '../../../Redux/Actions/Actions';
import loadingpage from '../../icons/loadingpage.gif';



const Occasion = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const clothes = useSelector(state => state.clothes.clothes);
  let occasionclothe = clothes.filter(clothe => clothe.types === 'occasion');
  if(clothes.length === 0 ){
    axios.get(ActionTypes.BASEURL + "/read.php").then((response) => {
      dispatch(set_clothes(response.data.data));
      setloading(true);
    })
  }
  return (
    <div>
    <Break/>
    <h1>Occasion Habeshan Clothes</h1>
    <div className='homewo'>
      <div className='homewoboxes'>
      {(()=>{
                    if(clothes.length ===0){
                        return(
                          <h1><img className='loadingpage' src={loadingpage}  alt="loadingpage"/></h1>
                        )
                    }
                    else if(occasionclothe.length===0){
                      return(
                        <h1>we will add contents soon</h1>
                      )
                    }
                    else{
                        return(
                          [...occasionclothe].reverse().map((e) => (
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

export default Occasion
