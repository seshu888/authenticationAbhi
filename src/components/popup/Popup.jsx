import React from 'react'
import './popup.css'
const Popup = (props) => {


  return (

    <div className='modal-container'>
    <div className='modal-content'>
        <button className='close-button' onClick={props.onClose}>X</button>
        <div className='details-wrapper'>
            <h1>Here are the country details</h1>
            {props.children}
        </div>
        </div>
    </div>

  )
}

export default Popup