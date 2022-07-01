import React from 'react'
import '../../styles/style.css'

const Contact = () => {
  return (
    <div>
      <div className='main_contact'>
        <h1>Contact us</h1>
        <div className='contactmail'>
                  <form>
                      <label className='conlabel'>Name</label> <br/>
                      <input className='coninput' type="text" name="name" /> <br/>
                      <label className='conlabel'>Phone number</label> <br/>
                      <input className='coninput' type="text" name="phone"/> <br/>
                      <label className='conlabel'>Subject</label> <br/>
                      <input className='coninput' type="text" name="subject" /> <br/>
                      <label className='conlabel'>Email</label> <br/>
                      <input className='coninput' type="email" name="email" /> <br/>
                      <label className='conlabel'>Message</label>
                      <br/>
                      <textarea className='coninput' name='message' ></textarea>
                      <br/>
                      <input className='submail' type="submit" value="Send"></input>
                  </form>
              </div>
      </div>
    </div>
  )
}

export default Contact
