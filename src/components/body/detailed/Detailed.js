import React, {useState} from 'react'
import axios from "axios";
import Photo from '../../Images/imageone.jpg'
import { useLocation } from 'react-router-dom'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dropdown from '../../Forms/Dropdown';
import Loading from '../../icons/loading.gif'

const Adding_Items = (props) => {
  const [open, setOpen] = React.useState(false);
  const [ud,setud] = useState("");
  const baseURL = "http://blackneb.com/piyankiya/api/post/update.php";
  const baseURLDELETE = "http://blackneb.com/piyankiya/api/post/delete.php";
  const [post, setPost] = React.useState(null);
  const [loading, setloading] = useState(false);
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
      inone:"male",
      intwo:"female"
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      val:props.age,
      label: "Age",
      inone:"adult",
      intwo:"kids"
    },
    {
      id: 4,
      name: "types",
      type: "text",
      placeholder: "types",
      val:props.types,
      errorMessage: "Please Enter the description",
      label: "Types",
      inone:"normal",
      intwo:"occasion"
    },
    {
      id: 5,
      name: "price",
      type: "number",
      placeholder: "Price",
      val:props.price,
      errorMessage: "Please Enter thr price",
      label: "Price",
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
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleloading = (e) => {
    setloading(true);
  }
  const handleloadingclose = (e) => {
    setloading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleloading();
    axios.put(baseURL,{id:values.id,
                      name:values.name,
                      gfor:values.gender,
                      afor:values.age,
                      photos:values.photos,
                      price:values.price,
                      types:values.types,
                      description:values.description}).then((response) => {
      setPost(response.data);
      handleloadingclose();
    });
    setud("Item Updated")
    handleClick();
    if (!post) return null;
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handledelete = (e) => {
    axios.post(baseURLDELETE,{id:values.id}).then((response) => {
      setPostdelete(response.data);
    });
    setud("Item Deleted")
    handleClick();
    if (!post) return null;
  }


  return (
    <div className='additemssec'>
      <div className='additemsmain'>
        <div>
          <form onSubmit={handleSubmit}>
          {inputs.slice(0,1).map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {inputs.slice(1,4).map((input) => (
            <Dropdown
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {inputs.slice(4,6).map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className='withloading'>
            <img className={loading? 'loadingimage' : 'loadingimageclose'} src={Loading}/>
            <input className='submail' type="submit" value="UPDATE"></input>
          </div>
        </form>
        <div className='withloading'>
            <img className={loading? 'loadingimage' : 'loadingimageclose'} src={Loading}/>
            <button className='submaildelete' onClick={handledelete}>DELETE</button>
          </div>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {ud}
              </Alert>
            </Snackbar>
          </Stack>
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
            <img src={fphoto} alt='' className='detailedpic'/>
          </div>
          <div className='detailedthird'>
            <Adding_Items names={fname} price={fprice} photos={fphoto} id={fid} description={fdescription} types={ftypes} age={fage} gender={fgender}/>
          </div>
        </div>
    </div>
  )
}

export default Detailed