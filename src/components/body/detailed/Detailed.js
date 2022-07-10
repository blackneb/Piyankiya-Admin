import React, {useState} from 'react'
import Photo from '../../Images/imageone.jpg'
import { useLocation } from 'react-router-dom'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'

const Adding_Items = (props) => {
  const [values, setValues] = useState({
    name: "",
    gender: "",
    age: "",
    price: "",
    description: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder:"name",
      val:"Name",
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "gender",
      type: "text",
      val:"Gender",
      placeholder: "Gender",
      errorMessage: "Please enter the field",
      label: "Gender",
      required: true,
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      val:"age",
      label: "Age",
    },
    {
      id: 4,
      name: "price",
      type: "number",
      placeholder: "Price",
      val:"2000",
      errorMessage: "Please Enter thr price",
      label: "Price",
      required: true,
    },
    {
      id: 5,
      name: "description",
      type: "text",
      placeholder: "Description",
      val:"Description",
      errorMessage: "Please Enter the description",
      label: "Description",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null,2))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handledelete = (e) => {
    
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

  return (
    <div>
        <div className='detailedmain'>
          <div className='detailedfirst'>

            <img src={Photo} alt='' className='detailedpic'/>
          </div>
          <div className='detailedthird'>
            <Adding_Items names={fname}/>
          </div>


        </div>
    </div>
  )
}

export default Detailed