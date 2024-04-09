import React from 'react'
import Image from 'next/image'
import './page.css'
import Consumer from '../../assets/Consumer.svg'
import Profile from '../../assets/sourceprofile.svg'
import Navbar from '../components/navbar/navbar.js'
import Button from  '../components/button/button'
const page = () => {
  return (
    <div className='maincontainer '>
      <div className='flex flex-col items-center mb-8 mt-10'>

      <Image
      src={Consumer}
      width={300}
      height={300}
      className='source  sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4'
      />
    <Image
      src={Profile}
      width={200}
      height={180}
      className='profile mt-10 '
      />
      </div>
      
      <div className='my-8 w-screen flex flex-col items-center container '>
        <label>Add Name</label>
        <input type='text' className='input' placeholder='Enter the details'/>
        <label>Add Location</label>
        <input type='text' className='input' placeholder='Enter the details'/>
        <label>Add Email</label>
        <input type='email' className='input' placeholder='Enter the details'/>
        
      </div>
     <a href ='/consumerrecord'><Button title="Add"/></a>
      <Navbar/>
    </div>
    
  )
}

export default page