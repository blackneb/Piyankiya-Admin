import React, {useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import done from "../../icons/check.png"
import Loading from '../../icons/loading.gif'
const MeasureNew = () => {
    const [post, setPost] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
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
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

  return (
    <div className='additemssec'>
      <div className='additemsmain'>
      <form>
        {inputs.slice(0,1).map((input) => (
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

export default MeasureNew
