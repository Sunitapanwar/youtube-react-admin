import React from 'react'
import ToggleForm from '../ToggleForm/ToggleForm';
import ALLBOOKING from '../Allbooking/ALLBOOKING';
import NEWBOOK from '../newbooking/NEWBOOK';
import './Book.css'

function Book() {
  return (
    <div className='book'>
        <ToggleForm/>
        <ALLBOOKING />
    </div>
  )
}

export default Book