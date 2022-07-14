import React, {useState} from 'react'
import axios from "axios";
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import done from "../../icons/check.png"

const Additems = () => {
  const baseURL = "http://localhost/piyankiya/api/post/create.php";
  const [post, setPost] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [image, setimage] = useState("");
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

  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData =  new FormData();
    formData.append('image', file);
    let url = "http://localhost/piyankiya/api/post/Upload_file.php";
    axios.post(url, formData, {
    })
    .then(res => {
        setimage(res.data.url);
        console.log(res.data);
        if(res.data.status==="success"){
          axios.post(baseURL,{name:values.name,
            gfor:values.gfor,
            afor:values.afor,
            photos:res.data.url,
            price:values.price,
            types:values.types,
            description:values.description}).then((response) => {
              setPost(response.data);
              if(response.data.message==='post created'){
                handleClickToOpen();
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
          <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Item Added"}</DialogTitle>
        <DialogContent className='dialoguecontentcenter'>
          <DialogContentText>
            
          </DialogContentText>
          <img src={done} alt="" className='additemdialogueicon' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  )
}

export default Additems
