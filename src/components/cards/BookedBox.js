import React,{useState} from 'react'
import '../styles/style.css'

const BookedBox = (props) => {
  return (
    <div>
        <div className='bookedboxmain'>
          <div className='bookedboxinner'>
            <h4>Client Name: {props.name} </h4>
            <h4>Client Phone:{props.phone}</h4>
            <h4>E-mail: {props.email}</h4>
            <h4>Cloth_ID: {props.id}</h4>
          </div>
        </div>
    </div>
  )
}

export default BookedBox
