import React from 'react'
import axios from "axios";
import BookedBox from '../../cards/BookedBox'

const Viewbooked = () => {
  const baseURL = "http://localhost/piyankiya/api/post/readbooking.php";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div className='viewbookedmain'>
      {post.data.map((e) => (
              <BookedBox name={e.name} id={e.cid} email={e.email} phone={e.phone}/>
            ))}
    </div>
  )
}

export default Viewbooked
