import React from 'react'
import Laptop from '../assets/Laptop.png'

const Potrait = () => {
  return (
    <div className='flex md:w-[60%] w-[80%] pt-5 bg-none mx-auto '>
    <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2 '></div>
   <img className='mx-auto' src={Laptop} alt="/" />
   
   </div>
    
  )
}

export default Potrait