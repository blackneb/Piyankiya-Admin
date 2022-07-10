import React, {useState} from 'react'
import axios from "axios";
import Photo from '../../Images/imageone.jpg'
import { useLocation } from 'react-router-dom'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'

const Adding_Items = (props) => {
  const baseURL = "http://localhost/piyankiya/api/post/update.php";
  const baseURLDELETE = "http://localhost/piyankiya/api/post/delete.php";
  const [post, setPost] = React.useState(null);
  const [postdelete, setPostdelete] = React.useState(null);
  const [values, setValues] = useState({
    id: props.id,
    name: props.names,
    gender: props.gender,
    age: props.age,
    price: props.price,
    types:props.types,
    photos:props.photos,
    description: props.description,
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder:"name",
      val:props.names,
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "gender",
      type: "text",
      val:props.gender,
      placeholder: "Gender",
      errorMessage: "Please enter the field",
      label: "Gender",
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      val:props.age,
      label: "Age",
    },
    {
      id: 4,
      name: "price",
      type: "number",
      placeholder: "Price",
      val:props.price,
      errorMessage: "Please Enter thr price",
      label: "Price",
    },
    {
      id: 5,
      name: "types",
      type: "text",
      placeholder: "types",
      val:props.types,
      errorMessage: "Please Enter the description",
      label: "Types",
    },
    {
      id: 6,
      name: "description",
      type: "text",
      placeholder: "Description",
      val:props.description,
      errorMessage: "Please Enter the description",
      label: "Description",
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(baseURL,{id:values.id,
                      name:values.name,
                      gfor:values.gender,
                      afor:values.age,
                      photos:values.photos,
                      price:values.price,
                      types:values.types,
                      description:values.description}).then((response) => {
      alert("Updated Successfully")
      setPost(response.data);
    });
    if (!post) return null;
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handledelete = (e) => {
    axios.delete(baseURLDELETE,{id:values.id}).then((response) => {
      alert("Post deleted!");
      setPostdelete(response.data);
    });
    if (!post) return null;
  }


  return (
    <div className='additemssec'>
      <div className='additemsmain'>
        <div>
          <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <input className='submail' type="submit" value="UPDATE"></input>
        </form>
        <button className='submaildelete' onClick={handledelete}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

const Detailed = () => {
  const location = useLocation();
  const { fname } = location.state
  const { fphoto } = location.state
  const { fdescription } = location.state
  const { fprice } = location.state
  const { fid } = location.state
  const { fage } =location.state
  const { fgender } =location.state
  const { ftypes } = location.state

  return (
    <div>
        <div className='detailedmain'>
          <div className='detailedfirst'>
            <img src={Photo} alt='' className='detailedpic'/>
          </div>
          <div className='detailedthird'>
            <Adding_Items names={fname} price={fprice} photos={fphoto} id={fid} description={fdescription} types={ftypes} age={fage} gender={fgender}/>
          </div>


        </div>
    </div>
  )
}

export default Detailed