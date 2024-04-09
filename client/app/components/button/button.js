import React from 'react'
import '../button/button.css'
const button = ({title}) => {
  return (
    <div className='button'>
          <button className='btn'>{title}</button>
        </div>
  )
}

export default button