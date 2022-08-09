import React, {useEffect, useState} from 'react'
import FormInput from '../Forms/FormInput'
import '../styles/style.css'
import Cookies from 'js-cookie'
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from '../icons/loading.gif'


const Signin = ({setlog}) => {
  const baseURL = "http://blackneb.com/piyankiya/api/post/read_admin.php";
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState("");
  const [ud,setud] = useState("");
  const [serv,setserv] = useState("")
  const [loading, setloading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [auth,setauth] =useState(false);
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z 0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please Enter Your Password",
      label: "Password",
      required: true,
    },
    
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

  const readcookie = (e) =>{
    setauth(Cookies.get("user"));
  }

  useEffect(() => {
    readcookie();
  },[]);
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleloading();
    axios.post(baseURL,{username:values.name,
                      password:values.password}).then((response) => {
                      setPost(response.data.message);
                      if(response.data.message === "success"){
                        Cookies.set("user","true",{ expires: 1/144 });
                        setlog(true);
                        setserv("success");
                        setud("Login");
                        handleClick();
                      }
                      else{
                        setserv("error");
                        setud("Login failed");
                        handleClick();
                      }
    handleloadingclose();
    });
    if (!post) return null;
    };
  return (
    <div>
      <div className='signnavbar'>
        <h3 className='logo'>PIYANKIYA</h3>
      </div>
      <div className='signinmain'>
      <div className='Signin'>
      {(()=>{
                    if(auth==="true"){
                      setlog(true);
                    }
                    else{
                        return(
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
                            <input className='submail' type="submit" value="Log In"></input>
                          </div>
                        </form> 
                        )
                    }
                })()}
          </div>
    </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={serv} sx={{ width: '100%' }}>
                    {ud}
              </Alert>
            </Snackbar>
          </Stack>
    </div>
  )
}

export default Signin
