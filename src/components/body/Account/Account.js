import React, {useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from '../../icons/loading.gif';
import Cookies from 'js-cookie'
const Account = () => {
    const baseURL = "http://blackneb.com/piyankiya/api/post/update_admin.php";
    const [post, setPost] = React.useState(null);
    const [me,setme] = useState("");
    const [serv,setserv] = useState("");
    const [open, setOpen] = React.useState(false);
    const [loading, setloading] = useState(false);
    const [values, setValues] = useState({
        name: "",
        password: "",
        confirmpassword: "",
      });

      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder:"name",
          val:values.name,
          errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
          label: "Name",
          pattern: "^[A-Za-z0-9 ]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "password",
          errorMessage: "Please enter the field",
          label: "Password",
          required: true,
        },
        {
          id: 3,
          name: "confirmpassword",
          type: "password",
          placeholder: "Confirm",
          label: "Confirm Password",
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

      const handleSubmit = (e) => {
        e.preventDefault();
        handleloading();
        if(values.password===values.confirmpassword){
            axios.post(baseURL,{superadmin:"admin",
            username:values.name,
            password:values.password}).then((response) => {
                            setPost(response.data);
                            if(response.data.message === "success"){
                                setme("Account Updated Successfully!");
                                setserv("success");
                                handleClick();
                                Cookies.remove('user');
                            }
                            handleloadingclose();
            });
        }
        else{
            setme("Password Mismatch");
            setserv("error");
            handleClick();
            handleloadingclose();
        }
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
          <div className='withloading'>
            <img className={loading? 'loadingimage' : 'loadingimageclose'} src={Loading}/>
            <input className='submail' type="submit" value="UPDATE"></input>
          </div>
        </form>
        </div>
        <div>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={serv} sx={{ width: '100%' }}>
                    {me}
              </Alert>
            </Snackbar>
          </Stack>
          </div>
    </div>
  )
}

export default Account
