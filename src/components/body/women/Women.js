import React from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";
import {useSelector} from 'react-redux';
import { ActionTypes } from '../../../Redux/Constants/ActionTypes';
const Women = () => {
  const clothes = useSelector(state => state.clothes.clothes);
  let womenclothe = clothes.filter(clothe => clothe.gfor === 'female');
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
