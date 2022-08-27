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
  const { id, name, gfor, afor, photos, price , types, description } = clothes;
  let menclothes = clothes.filter(clothe => clothe.gfor === 'male');
  let womenclothes = clothes.filter(clothe => clothe.gfor === 'female');
  let kidsclothes = clothes.filter(clothe => clothe.afor === 'kids');
  let occasionclothes = clothes.filter(clothe => clothe.types === 'occasion');
  console.log("mens clothes",menclothes);
  console.log("women clothes",womenclothes);
  console.log("kids clothes",kidsclothes);
  console.log("occasin clothes",occasionclothes);
  return(
    <div>

    </div>
  )
}

const Home = () => {
  const baseURLMEN = "http://blackneb.com/piyankiya/api/post/read_byg.php?gender=male";
  const baseURLWOMEN = "http://blackneb.com/piyankiya/api/post/read_byg.php?gender=female";
  const baseURLKIDS = "http://blackneb.com/piyankiya/api/post/read_bya.php?age=kids";
  const baseURLOCCASIONS = "http://blackneb.com/piyankiya/api/post/read_byt.php?types=occasion";
  const [men,setmen]= React.useState(null);
  const [women,setwomen]= React.useState(null);
  const [kids,setkids]= React.useState(null);
  const [occasion,setoccasions]= React.useState(null);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();


  React.useEffect(() => {
    axios.get(baseURLMEN).then((response) => {
      setmen(response.data);
    });
    axios.get(baseURLWOMEN).then((response) => {
      setwomen(response.data);
    });
    axios.get(baseURLKIDS).then((response) => {
      setkids(response.data);
    });
    axios.get(baseURLOCCASIONS).then((response) => {
      setoccasions(response.data);
    });
    axios.get(ActionTypes.BASEURL + "/read.php").then((response) => {
      dispatch(set_clothes(response.data.data));
      console.log(response.data.data);
      setloading(true);
    })
  }, [dispatch]);

  if (!men) return null;
  if (!women) return null;
  if (!kids) return null;
  if (!occasion) return null;
  
  return (
    <div>
      <Break/>
      <div className='homewo'>
        <div className='homewoname'>
        <h1>For Women</h1>
        </div>
        <div className='homewoboxes'>
          {(()=>{
                    if(women.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...women.data].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                    if(men.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...men.data].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                    if(occasion.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...occasion.data].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                    if(kids.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          [...kids.data].reverse().slice(0,3).map((e) => (
                            <ClotheBox key={e.id} name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
                            ))
                        )
                    }
                })()}
        </div>
        <div className='homewonname'>
        <h1>For Kids</h1>
        </div>
      </div>
      <Break/>
      {loading ? <RenderClothes/> : "Loading..."}
    </div>
  )
}

export default Home
