import React from 'react'
import ToggleForm from '../ToggleForm/ToggleForm';
import Book1 from '../Book1/Book1'
import './Book.css'

function Book() {
  return (
    <div className='book'>
        <ToggleForm/>
        <Book1 />
    </div>
  )
}

export default Book