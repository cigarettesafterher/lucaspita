import React from 'react'
import ReactTyped from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black'> 
    <div className='max-w-[800px] mt-[10px] w-full h-full mx-auto text-center flex flex-col justify-center'>
       <h1 className='md:text-4xl sm:text-3xl text-xl font-bold md:py-1'>Lucas Pita lives in Münich and is</h1>
       <div className='flex justify-center items-center'>
       <p className='md:text-4xl sm:text-3xl text-xl font-bold'>creator of</p>
<ReactTyped
className='md:text-4xl sm:text-3xl text-xl font-bold pl-2' strings={['el jardín', 'la luz de su piel']} typeSpeed={120} backSpeed={140} loop />
       </div>
       <p className='md:text-2xl text-xl font-bold text-gray-500 md:py-3 py-3'>Working as a UX UI designer </p>
       <a href="https://drive.google.com/file/d/1i-hRQAtU9lhMtuUWt-b51UgRWvmACmCY/view?usp=sharing">

       <button className='text-transparent text-1xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 w-[200px] rounded-md font-medium my-2 mx-auto pt-3 text-blue-400 hover:bg-z-600 transition duration-500 hover:scale-105'>Read CV</button>
       </a>
        </div>
        </div>
  )
}

export default Hero;