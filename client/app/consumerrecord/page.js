import React from 'react'
import './page.css'
import Record from '../../assets/Records.svg'
import Image from 'next/image'
import Button from '../components/button/button'
const page = () => {
  return (
   <div className='maincontainer'>
    <Image
          src={Record}
          width={400}
          height={400}
          alt='mainpage'
        />
        <Button title="Load More"/>
   </div>
  )
}

export default page