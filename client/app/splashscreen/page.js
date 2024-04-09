import React from 'react'
import './page.css'
import Image from 'next/image'
import Button from '../components/button/button'
import logo from '../../assets/font.svg'
const page = () => {
  return (
    <div className='maincontainer'id='main'>
      <div className='headercontainer'>
      <Image
      src={logo}
      width={200}
      height={200}
      className='heading'
    />
    </div>
        <div className='buttons'>
          <a href="/sourceprofile"><Button title="Source"/></a>
          <a href="/stakeholder"><Button title="StakeHolder"/></a> 
          <a href="/consumerprofile"> <Button title="Consumer"/></a> 
            </div>
      </div>

    
  )
}

export default page