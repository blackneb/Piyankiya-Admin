import React,{useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import ClotheBox from '../../cards/ClotheBox'
import Break from '../break/Break'
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../Redux/Constants/ActionTypes';
import { set_clothes } from '../../../Redux/Actions/Actions';
import { GetSpecificClothes } from '../../../Redux/GetSpecificClothes';


const RenderClothes = () =>{
  const clothes = useSelector(state => state.clothes.clothes);
  let menclothes = clothes.filter(clothe => clothe.gfor === 'male');
  let womenclothes = clothes.filter(clothe => clothe.gfor === 'female');
  console.log(womenclothes)
  let kidsclothes = clothes.filter(clothe => clothe.afor === 'kids');
  let occasionclothes = clothes.filter(clothe => clothe.types === 'occasion');
  return(
    <div>
      <div className='homewo'>
        <div className='homewoname'>
        <h1>For Women</h1>
        </div>
        <div className='homewoboxes'>
          {(()=>{
                    if(womenclothes.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...womenclothes].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={ActionTypes.PHOTOURL+e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
      </div>
      <div className='homewo'>
      <div className='homewoboxes'>
      {(()=>{
                    if(menclothes.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...menclothes].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={ActionTypes.PHOTOURL+e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
        <div className='homewonname'>
        <h1>For Men</h1>
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewonname'>
        <h1>For Occasions</h1>
        </div>
        <div className='homewoboxes'>
        {(()=>{
                    if(occasionclothes.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...occasionclothes].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={ActionTypes.PHOTOURL+e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewoboxes'>
      {(()=>{
                    if(kidsclothes.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...kidsclothes].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={ActionTypes.PHOTOURL+e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
        <div className='homewonname'>
        <h1>For Kids</h1>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();


  React.useEffect(() => {
    axios.get(ActionTypes.BASEURL + "/read.php").then((response) => {
      dispatch(set_clothes(response.data.data));
      setloading(true);
    })
  }, [dispatch]);
  
  return (
    <div>
      <Break/>
      {loading ? <RenderClothes/> : "Loading..."}
    </div>
  )
}

export default Home
