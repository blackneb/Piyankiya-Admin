import React from 'react'
import '../styles/style.css'

const Signin = () => {
  return (
    <div className='signinmain'>
      <div className='Signin'>
            <form>
              <label className='conlabel'>Name</label><br/>
              <input className='coninput'/><br/>
              <label className='conlabel'>Password</label><br/>
              <input className='coninput'/><br/>
              <input className='submail' type="submit" value="Login"/>
            </form>
          </div>
    </div>
  )
}

export default Signin
