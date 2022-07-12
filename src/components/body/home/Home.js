import React from 'react'
import axios from "axios";
import '../../styles/style.css'
import ClotheBox from '../../cards/ClotheBox'
import Break from '../break/Break'


const Home = () => {
  const baseURL = "http://localhost/piyankiya/api/post/read.php";
  const baseURLMEN = "http://localhost/piyankiya/api/post/read_byg.php?gender=male";
  const baseURLWOMEN = "http://localhost/piyankiya/api/post/read_byg.php?gender=female";
  const baseURLKIDS = "http://localhost/piyankiya/api/post/read_bya.php?age=kids";
  const baseURLOCCASIONS = "http://localhost/piyankiya/api/post/read_byt.php?types=occasion";
  const [post, setPost] = React.useState(null);
  const [men,setmen]= React.useState(null);
  const [women,setwomen]= React.useState(null);
  const [kids,setkids]= React.useState(null);
  const [occasion,setoccasions]= React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
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
  }, []);

  if (!post) return null;
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
                          women.data.map((e) => (
                            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                          men.data.map((e) => (
                            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                          occasion.data.map((e) => (
                            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
                          kids.data.map((e) => (
                            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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
    </div>
  )
}

export default Home
