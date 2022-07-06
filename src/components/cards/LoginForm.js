import React, {useState} from 'react'


const LoginForm = () => {
  const [form, setform] =useState({
    email: "",
    password: "",
    confirmpassword: "",
  })
  const onUpdateField = e=>{
    const nextFormState={
      ...form,[e.target.name]: e.target.value,
    };
    setform(nextFormState);
  };

  const onSubmitForm=e=>{
    e.preventDefault();
    alert(JSON.stringify(form, null,2))
  };


  return (
    <div>
      <form className='' onSubmit={onSubmitForm}>
        <label>E-mail</label><br/>
        <input 
          className=''
          type="text"
          name='email'
          value={form.email}
          onChange={onUpdateField}/><br/>
        <label>password</label><br/>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onUpdateField}/><br/>
        <label>confirmpassword</label><br/>
        <input
          type="password"
          name="confirmpassword"
          value={form.confirmpassword}
          onChange={onUpdateField}/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
