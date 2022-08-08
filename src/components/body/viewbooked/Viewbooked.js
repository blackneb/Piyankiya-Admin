import React from 'react'
import axios from "axios";
import BookedBox from '../../cards/BookedBox'

const Viewbooked = () => {
  const baseURL = "http://blackneb.com/piyankiya/api/post/readbooking.php";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className='viewbookedmain'>

      {(()=>{
                    if(post.message==="no posts found"){
                        return(
                            <h1>There is no Booked item</h1>
                        )
                    }
                    else{
                        return(
                          [...post.data].reverse().map((e) => (
                            <BookedBox name={e.name} id={e.cid} email={e.email} phone={e.phone}/>    
                            ))
                        )
                    }
                })()}
    </div>
  )
}

export default Viewbooked
