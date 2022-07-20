import React, {useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import done from "../../icons/check.png"
import Dropdown from '../../Forms/Dropdown';
import Loading from '../../icons/loading.gif'

const Additems = () => {
  const baseURL = "http://blackneb.com/piyankiya/api/post/create.php";
  const [post, setPost] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState()
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
      pattern: "^[A-Za-z 0-9]{3,16}$",
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
      inone:"male",
      intwo:"female"
    },
    {
      id: 3,
      name: "afor",
      type: "text",
      placeholder: "Age",
      label: "Age",
      required: true,
      inone:"adult",
      intwo:"kids"
    },
    {
      id: 4,
      name: "types",
      type: "text",
      placeholder: "Type",
      errorMessage: "Please Enter the Type",
      label: "Type",
      required: true,
      inone:"normal",
      intwo:"occasion"
    },
    {
      id: 5,
      name: "photos",
      type: "file",
      placeholder: "photos",
      errorMessage:"Enter Photo",
      label: "Photos",
      required: true,
    },
    {
      id: 6,
      name: "price",
      type: "number",
      placeholder: "Price",
      errorMessage: "Please Enter thr price",
      label: "Price",
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
    const formData =  new FormData();
    formData.append('image', file);
    let url = "http://blackneb.com/piyankiya/api/post/Upload_file.php";
    axios.post(url, formData, {
    })
    .then(res => {
        setimage(res.data.url);
        console.log(res.data);
        if(res.data.status==="success"){
          axios.post(baseURL,{name:values.name,
            gfor:values.gfor,
            afor:values.afor,
            photos:res.data.name,
            price:values.price,
            types:values.types,
            description:values.description}).then((response) => {
              setPost(response.data);
              if(response.data.message==='post created'){
                handleClick();
                handleloadingclose();
                return(
                  <div>
                  </div>
                )
                }
                else{
                alert(response.data.message);
                }
              });
        }
      });

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFile(e.target.files[0]);
  };

  return (
    <div className='additemssec'>
      <div className='additemsmain'>
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
        {inputs.slice(4,7).map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className='withloading'>
          <img className={loading? 'loadingimage' : 'loadingimageclose'} src={Loading}/>
          <input className='submail' type="submit" value="Add"></input>
        </div>
      </form>
      </div>
          <div>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Item Added Successfully!
              </Alert>
            </Snackbar>
          </Stack>
          </div>
    </div>
    
  )
}

export default Additems
