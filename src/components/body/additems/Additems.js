import React, {useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'

const Additems = () => {
  const baseURL = "http://localhost/piyankiya/api/post/create.php";
  const [post, setPost] = React.useState(null);
  const [values, setValues] = useState({
    name: "",
    gfor: "",
    afor: "",
    photos: "",
    price: "",
    types:"",
    description: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "gfor",
      type: "text",
      placeholder: "Gender",
      errorMessage: "Please enter the field",
      label: "Gender",
      required: true,
    },
    {
      id: 3,
      name: "afor",
      type: "text",
      placeholder: "Age",
      label: "Age",
    },
    {
      id: 4,
      name: "photos",
      type: "file",
      placeholder: "photos",
      errorMessage:"Enter Photo",
      label: "Photos",
      required: true,
    },
    {
      id: 5,
      name: "price",
      type: "number",
      placeholder: "Price",
      errorMessage: "Please Enter thr price",
      label: "Price",
      required: true,
    },
    {
      id: 6,
      name: "types",
      type: "text",
      placeholder: "Type",
      errorMessage: "Please Enter the Type",
      label: "Type",
      required: true,
    },
    {
      id: 7,
      name: "description",
      type: "text",
      placeholder: "Description",
      errorMessage: "Please Enter the description",
      label: "Description",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null,2));
    axios.post(baseURL,{name:values.name,
                        gfor:values.gfor,
                        afor:values.afor,
                        photos:values.photos,
                        price:values.price,
                        types:values.types,
                        description:values.description}).then((response) => {
      setPost(response.data);
    });
    if (!post) return null;

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className='additemssec'>
      <div className='additemsmain'>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <input className='submail' type="submit" value="Add"></input>
      </form>
          </div>
    </div>
  )
}

export default Additems
