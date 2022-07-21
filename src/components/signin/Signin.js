import React, {useEffect, useState} from 'react'
import FormInput from '../Forms/FormInput'
import '../styles/style.css'
import Cookies from 'js-cookie'
import axios from "axios";

const Signin = ({setlog}) => {
  const baseURL = "http://blackneb.com/piyankiya/api/post/read_admin.php";
  const [post, setPost] = React.useState("");
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
    axios.post(baseURL,{username:values.name,
                      password:values.password}).then((response) => {
                      setPost(response.data.message);
                      if(response.data.message === "success"){
                        Cookies.set("user","true",{ expires: 1/144 });
                        setlog(true);
                      }
                      else{
                        alert("LOGIN ERROR");
                      }
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
                          <input className='submail' type="submit" value="LOG IN"></input>
                        </form> 
                        )
                    }
                })()}
          </div>
    </div>
    </div>
  )
}

export default Signin
