import React from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";

const Men = () => {
  const baseURL = "http://blackneb.com/piyankiya/api/post/read_byg.php?gender=male";
  const [post, setPost] = React.useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  return (
    <div>
      <Break/>
      <h1>Men Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
        {(()=>{
                    if(post.message==="no posts found"){
                        return(
                            <h1>we will add contents soon</h1>
                        )
                    }
                    else{
                        return(
                          post.data.map((e) => (
                            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photos} age={e.afor} gender={e.gfor} types={e.types}/>          
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

export default Men
