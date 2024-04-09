import React from 'react'
import './page.css'
import Image from 'next/image'
import Verified from '../../assets/verification.svg'
const page = () => {
  return (
    <div className='maincontainer'>
    <Image
      src={Verified}
      width={200}
      height={180}
      className='profile'
    />
    </div>
  )
}

export default page