import React from 'react'
import Devscreen from '../assets/devscreen.png';

const Potraitdev = () => {
  return (
    <section className="developer" id='developer'>
    <div className='flex md:w-[60%] w-[80%] mx-auto'>
    <img className='w-[60%] mx-auto my-3 transform   hover:bg-z-600 transition duration-500 hover:scale-105' src={Devscreen} alt='/'/>
   </div>
   </section>
  )
}

export default Potraitdev