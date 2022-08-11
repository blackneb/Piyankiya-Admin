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
        tekesha: "",
        kumet: "",
        deret: "",
        wegeb: "",
      });
    const inputs = [
      {
        id: 1,
        name: "tekesha",
        type: "number",
        placeholder: "ትከሻ",
        errorMessage: "How much items do you want",
        label: "ትከሻ",
        required: true,
      },
      {
        id: 2,
        name: "kumet",
        type: "number",
        placeholder: "ቁመት",
        errorMessage: "How much items do you want",
        label: "ቁመት",
        required: true,
      },
      {
        id: 3,
        name: "deret",
        type: "number",
        placeholder: "ደረት",
        errorMessage: "How much items do you want",
        label: "ደረት",
        required: true,
      },
      {
        id: 4,
        name: "wegeb",
        type: "number",
        placeholder: "ወገብ",
        errorMessage: "How much items do you want",
        label: "ወገብ",
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
        {inputs.slice(0,4).map((input) => (
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
