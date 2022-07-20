import React, {useState} from 'react'
import axios from "axios";
import Photo from '../../Images/imageone.jpg'
import { useLocation } from 'react-router-dom'
import '../../styles/style.css'
import FormInput from '../../Forms/FormInput'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import done from "../../icons/check.png"
import Dropdown from '../../Forms/Dropdown';

const Adding_Items = (props) => {
  const [open, setOpen] = React.useState(false);
  const [ud,setud] = useState("");
  const baseURL = "http://blackneb.com/piyankiya/api/post/update.php";
  const baseURLDELETE = "http://blackneb.com/piyankiya/api/post/delete.php";
  const [post, setPost] = React.useState(null);
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

  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(baseURL,{id:values.id,
                      name:values.name,
                      gfor:values.gender,
                      afor:values.age,
                      photos:values.photos,
                      price:values.price,
                      types:values.types,
                      description:values.description}).then((response) => {
      setPost(response.data);
    });
    setud("Item Updated")
    handleClickToOpen();
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
    handleClickToOpen();
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
          <input className='submail' type="submit" value="UPDATE"></input>
        </form>
        <button className='submaildelete' onClick={handledelete}>DELETE</button>
        </div>
        <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{ud}</DialogTitle>
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